import { redirect } from 'next/navigation';
import DoctorCard from './components/DoctorCard';
import DoctorFilters from './components/DoctorFilters';

export default function Home() {
  redirect('\doctors')
  return (
    <div className="">
     
    </div>
  );
}
