import DoctorCard from './components/DoctorCard';
import DoctorFilters from './components/DoctorFilters';

export default function Home() {
  return (
    <div className="">
      {/* Left Sidebar Filters */}
      <div className="w-[280px]">
        {/* <DoctorFilters /> */}
      </div>

      {/* Right Main Content - Doctor Cards */}
      <div className="flex-1">
        {/* <DoctorCard /> */}
      </div>
    </div>
  );
}
