// import { NextResponse, NextRequest } from "next/server";
// import Doctors from "@/lib/doctorModels";
// import { connect } from "@/lib/dbConfig";
// import {v2 as cloudinary} from 'cloudinary'

// cloudinary.config({
//     cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
//     api_key: process.env.CLOUDINARY_API_KEY,
//     api_secret: process.env.CLOUDINARY_API_SECRET,
//   });


// // post doctor
// export async function POST(req: NextRequest) {

//         try {
//             await connect();
//             const {name, specialty, email, address, experience} = req.body;


//             const result = await cloudinary.uploader.upload(imageUrl)
            

//             const doctor = new Doctors({
//                 name, 
//                 specialty,
//                 email,
//                 address,
//                 experience,
//                 imageUrl: result.url,
//             })
//             const savedDoctor = await doctor.save();
//             console.log(savedDoctor)
//             return NextResponse.json({
//                 message: 'Doctor added successfully',
//                 doctor
//             });
//         } catch (error) {
//             return NextResponse.json({
//                 message: 'Error creating doctor',
//                 error: error,
//             });
//         }
//     } 


//     // get doctor
// export async function GET(req: NextRequest, res: NextResponse) {
//     try {
//         await connect()
//         // pagination 
//         const url = new URL(req.url); 
//         const page = parseInt(url.searchParams.get('page') || '1', 10)
//         const limit = parseInt(url.searchParams.get('limit') || '10', 10)
//         const skip = (page - 1) * limit;

//         const doctors = await Doctors.find().skip(skip).limit(limit)

//         return NextResponse.json({
//             message: "Doctors fetched successfully",
//             doctors,
//             page,
//             limit,
//         })

//     } catch (error) {
//         console.error(error);
//         return NextResponse.json({
//             message: "Error fetching doctors",
//             error,
//         })
        
//     }
// }
  
