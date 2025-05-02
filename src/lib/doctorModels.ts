import { time } from "console";
import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema ({
    // name: {
    //     type: String,
    //     required: true
    // }, 
    // specialty: {
    //     type: String,
    //     required: true
    // },
    //   address: {
    //     type: String,
    //     required: true,
    //   },
    //   experience: {
    //     type: Number,
    //     required: true,
    //   },
    //   createdAt: {
    //     type: Date,
    //     default: Date.now,
    //   },
    //   fees: {
    //     type: Number,
    //     required: true
    //   },
    // //   : online,offline , qualification, languages, availabilty, availabilty location, availabilty time, cashback 
    // consultation: {
    //     type: 
    // }
    //   imageUrl: {
    //   }

    name: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    qualifications: {
        type: [String],
        required: true
    },
    specialization: {
        type: String,
        required: true
    }, 
    experience: {
        type: Number,
        required: true
    },
    languagesSpoken: {
        type: [String]
    },
    consultationFees: {
        type: Number,
        required: true
    },
    hospital: { //facility
        type: String
    },
    availabilty: {
        online: {
            type: Boolean,
            required: false
        },
        offline: {
            type: Boolean,
            required: false
        }, 
        timings: {
            type: [String]
        }
    }
})

const Doctors = mongoose.models.Doctor || mongoose.model("Doctor", doctorSchema)

export default Doctors;