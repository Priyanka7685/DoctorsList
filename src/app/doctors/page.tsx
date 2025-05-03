"use client";
import React, { useEffect, useMemo, useState } from "react";
import DoctorFilters from "../components/DoctorFilters";
import DoctorCard from "../components/DoctorCard";
import { ChevronRight } from "lucide-react";
import DoctorList from "../components/DoctorList";
import Head from "next/head";

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

const DoctorPage = () => {

  const [doctors, setDoctors] = useState<Doctor[]>([])
  // const [filteredDoctor, setFilteredDoctors] = useState<Doctor[]>([]); 
  const [selectedFilters, setSelectedFilters] = useState<string[]>(['Hospital Visit', 'Online Consult'])
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const res = await fetch('/api/docRoute')
        const data = await res.json()
        // setDoctors(data)
        // setFilteredDoctors(data)
        if (Array.isArray(data.doctors)) {
          setDoctors(data.doctors);
        } else {
          console.log("Expected an array of doctors, got:", data);
        }
      } catch (error) {
        console.log("Error fetching doctors", error)
      } finally {
        setLoading(false)
      }
    }
    fetchDoctors()
  },[])

  // Filtering doctors based on selected filter
  const filteredDoctors = useMemo(() => {
  return doctors.filter((doctor) => {
    // Mode of consult
    const consultFilters = selectedFilters.filter((f) => ['Hospital Visit', 'Online Consult'].includes(f))
    if (consultFilters.length) {
      if (
        (consultFilters.includes('Online Consult') && !doctor.availability.online) &&
        (consultFilters.includes('Hospital Visit') && !doctor.availability.offline)
      ) return false
    }

    // Experience
    const expFilters = selectedFilters.filter((f) => ['0-5', '6-10', '11-16', '16+'].includes(f))
    if (expFilters.length) {
      const match = expFilters.some(range => {
        const [min, max] = range === '16+' ? [16, Infinity] : range.split('-').map(Number)
        return doctor.experience >= min && doctor.experience <= max
      })
      if (!match) return false
    }

    // Fees
    const feeFilters = selectedFilters.filter(f => ['100-500', '500 - 1000', '1000+'].includes(f))
    if (feeFilters.length) {
      const match = feeFilters.some(range => {
        const [min, max] = range === '1000+' ? [1000, Infinity] : range.replace(/\s/g, '').split('-').map(Number)
        return doctor.consultationFees.offline && doctor.consultationFees.offline >= min && doctor.consultationFees.offline <= max;
      })
      if (!match) return false
    }

    // Languages
    const languageFilters = selectedFilters.filter(f =>
      ['English', 'Hindi', 'Telugu', 'Punjabi', 'Bengali', 'Marathi', 'Urdu', 'Gujarati', 'Tamil', 'Kannada', 'Oriya', 'Persian', 'Assamese'].includes(f)
    )
    if (languageFilters.length && !languageFilters.some(lang => doctor.languages?.includes(lang))) {
      return false
    }

    // Facility
    const facilityFilters = selectedFilters.filter(f => ['Apollo Hospital', 'Other Clinics'].includes(f))
    if (facilityFilters.length && !facilityFilters.includes(doctor.hospital)) {
      return false
    }

    return true
  })
  }, [doctors, selectedFilters])

  return (
    <>
    <Head>
        <title>
          Consult General Physicians or Other Doctors  – Internal Medicine | Apollo 24|7
          Clone
        </title>
        <meta
          name="description"
          content="Find and consult General Physicians online. Book appointments for internal medicine specialists through Apollo-style listing. Apply filters for experience, fees, and languages."
        />
        <meta
          name="keywords"
          content="General Physician, Internal Medicine, Online Doctor, Apollo 247, Book Doctor Online"
        />
        <link
          rel="canonical"
          href="https://yourdomain.com/specialties/general-physician-internal-medicine"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Consult General Physicians Online – Apollo 24|7 Clone" />
        <meta
          property="og:description"
          content="Book expert General Physicians for online and offline consultations with Apollo-style filters and doctor profiles."
        />
        <meta
          property="og:image"
          content="https://media.istockphoto.com/id/638647058/photo/we-offer-our-patients-premium-healthcare-here.jpg?s=612x612"
        />
        <meta
          property="og:url"
          content="https://yourdomain.com/specialties/general-physician-internal-medicine"
        />
      </Head>
    
    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col lg:flex-row gap-6 ">
      
      {/* LEFT: Filters */}
      <div className="w-full lg:w-1/4 sticky top-0 z-10">
        <div className="sticky top-20 bg-white z-10">
          <DoctorFilters selected={selectedFilters} setSelected={setSelectedFilters} />
        </div>
      </div>

      {/* RIGHT: Main content */}
      <div className="flex flex-col lg:flex-row gap-6 items-start">
  
  {/* Left: Breadcrumb + Heading + Doctor Cards */}
  <div className="w-full lg:w-2/3 space-y-6">
    
    {/* Breadcrumb + Title */}
    <div className="space-y-2 border-b pb-4">
      <div className="flex items-center text-sm text-blue-600 space-x-1">
        <span className="hover:underline cursor-pointer">Home</span>
        <ChevronRight className="w-4 h-4" />
        <span className="hover:underline cursor-pointer">Doctors</span>
        <ChevronRight className="w-4 h-4" />
        <span className="text-blue-600 font-medium hover:underline cursor-pointer">General Physicians</span>
      </div>

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
        <h1 className="text-xl md:text-2xl font-semibold text-gray-900">
          Consult General Physicians Online – Internal Medicine Specialists
        </h1>
        <button className="px-4 py-2 text-sm text-white bg-blue-600 hover:bg-blue-700 rounded-md">
          Availability
        </button>
      </div>

      <p className="text-sm text-gray-600">({filteredDoctors.length} doctors)</p>
    </div>

    {/* Doctor Cards */}
    {/* <DoctorList doctors={filteredDoctors} selectedFilters={selectedFilters}/> */}
    {loading ? (
  <div className="flex justify-center items-center py-20">
    <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-600 border-opacity-50"></div>
  </div>
) : (
  <DoctorList doctors={filteredDoctors} selectedFilters={selectedFilters} />
)}
  </div>

  {/* Right: Sticky Help Card */}
  <div className="w-full lg:w-1/3 sticky top-0 z-20">
    <div className="sticky top-20">
      <div className="rounded-xl shadow-lg p-4 bg-blue-900 space-y-3 mt-30">
        <img
          src="https://media.istockphoto.com/id/638647058/photo/we-offer-our-patients-premium-healthcare-here.jpg?s=612x612&w=0&k=20&c=pek5ehwgsZNPemeEh4bObQ1U5DRPEs0WHleosG-daa8="
          alt="Help"
          className="w-full h-40 object-cover rounded-md"
        />
        <p className="text-sm text-white">
          Need help consulting the right doctor?
        </p>
        <p className="text-white">Call +5769712551 to book instantly</p>
      </div>
    </div>
  </div>
</div>
    </div>
    </>
  );
};

export default DoctorPage;



