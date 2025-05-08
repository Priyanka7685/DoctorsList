"use client"

import React from "react";
import { useCallback, useEffect, useRef, useState } from "react";
import DoctorCard from "./DoctorCard"
import Pagination from "./Pagination"

 type Doctor = {
  _id: string;
  name: string;
  imageUrl: string;
  specialization: string;
  qualifications: string[];
  experience: number;
  hospital: string;
  address: string;
  consultationFees: {
    online?: number;
    offline?: number;
  };
  availability: {
    online?: boolean;
    offline?: boolean;
  };
  languages?: string[];
};


type DoctorListProps = {
  selectedFilters: string[];
  doctors: Doctor[];
};

const DoctorList: React.FC<DoctorListProps> = ({ selectedFilters }) => {
    const [doctors, setDoctors] = useState<Doctor[]>([])
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [loading, setLoading] = useState(false);

    const fetchedPages = useRef<Set<number>>(new Set());
    const loaderRef = useRef<HTMLDivElement | null>(null);

     // Reset pagination when filters change
  useEffect(() => {
    setDoctors([])
    setCurrentPage(1); // Reset to the first page when filters change
    fetchedPages.current.clear()
    fetchDoctors(1)
  }, [selectedFilters]);

    const fetchDoctors = async (page: number) => {
      if (fetchedPages.current.has(page)) return;
        setLoading(true);
        try {
          const query = new URLSearchParams({
            page: String(page),
            limit: '5',
            filters: JSON.stringify(selectedFilters), // Send filters to the server
          }).toString();
          const res = await fetch(`/api/docRoute?${query}`);
          const data = await res.json();
    
          if (Array.isArray(data.doctors)) {
            // setDoctors(data.doctors); 
            setDoctors((prev) => 
              {
                const combined = [...prev, ...data.doctors];
                const unique = Array.from(
                  new Map(combined.map(doc => [doc._id, doc])).values()
                );
                return unique;
              });
            setTotalPages(data.totalPages);
            fetchedPages.current.add(page)
          } else {
            console.log("Invalid response: 'doctors' is not an array");
          }
        } catch (error) {
          console.log("Error fetching doctors:", error);
        }
        setTimeout(() => {
        setLoading(false);
        }, 1000)
      };
    
      useEffect(() => {
        fetchDoctors(currentPage);
      }, [currentPage, selectedFilters]);
    
      const handlePageChange = (page: number) => {
        // if (page !== currentPage) {
        //   setCurrentPage(page);
        // }
        setCurrentPage(page);
        fetchDoctors(page)
      };

    const handleObserver = useCallback(
        (entries: IntersectionObserverEntry[]) => {
            const target = entries[0];
            if(target.isIntersecting && currentPage < totalPages && !loading) {
                const nextPage = currentPage + 1;
                setCurrentPage(nextPage);
                fetchDoctors(nextPage)
            }
        },
        [currentPage, totalPages, loading]
    )

    useEffect(() => {
        const option = {
          root: null,
          rootMargin: "20px",
          threshold: 1.0,
        };
    
        const observer = new IntersectionObserver(handleObserver, option);
        if (loaderRef.current) observer.observe(loaderRef.current);
    
        return () => {
          if (loaderRef.current) observer.unobserve(loaderRef.current);
        };
      }, [handleObserver]);



    

    return (
    //     <div className="space-y-4">
    //   {doctors.map(doctor => (
    //     <DoctorCard key={doctor._id} {...doctor} />
    //   ))}
      
    // </div>

    <div>
      <div className="space-y-4">
        {loading && <p className="text-center text-gray-500">Loading...</p>}
        {!loading && doctors.length === 0 && (
          <p className="text-center text-gray-500">No doctors found.</p>
        )}
        {!loading &&
          doctors.map((doctor) => (
            <DoctorCard key={doctor._id} {...doctor} />
          ))}
      </div>

      {loading && (
          <div className="flex justify-center items-center py-4">
            <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-600 border-opacity-50"></div>
          </div>
        )}
      

           {/* Loader div for intersection observer */}
      <div ref={loaderRef} className="h-10"></div>
      {/* Pagination */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
    )
}

export default DoctorList;