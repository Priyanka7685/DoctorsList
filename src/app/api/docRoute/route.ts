import { NextResponse, NextRequest } from "next/server";
import Doctors from "@/lib/doctorModels";
import { connect } from "@/lib/dbConfig";
import {v2 as cloudinary} from 'cloudinary';
import { Readable } from "stream";

cloudinary.config({
    cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });

// add doctors
export async function POST(req: NextRequest) {
    await connect();

    const formData = await req.formData();
  const file = formData.get('image') as File;

  const buffer = Buffer.from(await file.arrayBuffer());

  const uploadResult = await new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      {
        folder: 'doctors',
      },
      (error, result) => {
        if (error) reject(error);
        else resolve(result);
      }
    );
    const readable = new Readable();
    readable._read = () => {};
    readable.push(buffer);
    readable.push(null);
    readable.pipe(uploadStream);
  });

  const doctor = await Doctors.create({
    name: formData.get('name'),
    imageUrl: (uploadResult as any).secure_url,
    qualifications: formData.getAll('qualifications'),
    specialization: formData.get('specialization'),
    experience: formData.get('experience'),
    languagesSpoken: formData.getAll('languagesSpoken'),
    consultationFees: {
        online: Number(formData.get('consultationFeeOnline') || 0),
        offline: Number(formData.get('consultationFeeOffline') || 0),
    },
    hospital: formData.get('hospital'),
    address: formData.get('address'),
    availability: {
      online: formData.get('online') === 'true',
      offline: formData.get('offline') === 'true',
      timings: formData.getAll('timings'),
    },
   
  });

  return NextResponse.json(doctor, {status: 201});
    } 


    // listing doctors with filter
export async function GET(req: NextRequest) {
    await connect();
    const { searchParams } = new URL(req.url);
  const page = parseInt(searchParams.get("page") || "1");
  const limit = parseInt(searchParams.get("limit") || "50");
  const skip = (page - 1) * limit;
  const filters = searchParams.get("filters");


  const filterObject = filters ? JSON.parse(filters) : [];
  const query: any = {};

  filterObject.forEach((filter: string) => {

    if (filterObject.includes("Hospital Visit") && !filterObject.includes("Online Consult")) {
      query['availability.online'] = false; // Exclude doctors who are also online
    }

    if (filterObject.includes("Online Consult") && !filterObject.includes("Hospital Visit")) {
      query['availability.offline'] = false; // Exclude doctors who are also online
    }
    

    // Experience Filters
    if (filter === '0-5') {
      query['experience'] = { $lte: 5 };
    } else if (filter === '6-10') {
      query['experience'] = { $gte: 6, $lte: 10 };
    } else if (filter === '11-16') {
      query['experience'] = { $gte: 11, $lte: 16 };
    } else if (filter === '16+') {
      query['experience'] = { $gte: 17 };
    } 

    // Fees Filters
    if (filter === '100-500') {
      query['$or'] = [
        { 'consultationFees.offline': { $exists: true, $ne: null, $lte: 500 } },
        { 'consultationFees.online': { $exists: true, $ne: null, $lte: 500 } },
      ];
    } else if (filter === '500-1000') {
      query['$or'] = [
        { 'consultationFees.offline': { $exists: true, $ne: null, $gte: 501, $lte: 1000 } },
        { 'consultationFees.online': { $exists: true, $ne: null, $gte: 501, $lte: 1000 } },
      ];
    } else if (filter === '1000+') {
      query['$or'] = [
        { 'consultationFees.offline': { $exists: true, $ne: null, $gte: 1001 } },
        { 'consultationFees.online': { $exists: true, $ne: null, $gte: 1001 } },
      ];
    }
    

    // Hospital Filters
    if (filter === 'Apollo Hospital') {
      query['hospital'] = { $regex: '\\bApollo\\b', $options: 'i' };
    } else if (filter === 'Other Clinics') {
      query['hospital'] = { $ne: 'Apollo Hospital' }; // Exclude Apollo Hospital
    }

    // Language Filters
    const languageList = [
      'English', 'Hindi', 'Telugu', 'Punjabi', 'Bengali',
      'Marathi', 'Urdu', 'Gujarati', 'Tamil', 'Kannada',
      'Oriya', 'Persian', 'Assamese'
    ];
    if (languageList.includes(filter)) {
      query['languagesSpoken'] = { $in: [filter] };
    }
  });

  const totalDoctors = await Doctors.countDocuments(query);
  const doctors = await Doctors.find(query).skip(skip).limit(limit);

  const totalPages = Math.ceil(totalDoctors / limit);

  return NextResponse.json({ doctors, totalPages }, { status: 200 });
}
  
