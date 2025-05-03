import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema ({
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
        type: new mongoose.Schema(
            {
              online: { type: Number},
              offline: { type: Number},
            },
            { _id: false }
          ),
          required: false,
    },
    hospital: { //facility
        type: String
    },
    availability: {
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
    },
    address: {
        type: String
    },
})

const Doctors = mongoose.models.Doctor || mongoose.model("Doctor", doctorSchema)

export default Doctors;