// connecting mongodb 

import mongoose from "mongoose";

export async function connect() {

    if (mongoose.connections[0].readyState) {
        console.log('MongoDB is already connected');
        return;
      }
      
    try {
        mongoose.connect(process.env.MONGO_URI!)
        const connection = mongoose.connection;

        connection.on('connected', () => {
            console.log('MongoDB connected successfully');
            
        })

        connection.on('error', (err) => {
            console.log('MongoDB not connected successfully');
            
        })
        
    } catch (error) {
        console.log('Something went wrong');
        console.error(error);
        
        
    }
}