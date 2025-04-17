import mongoose from 'mongoose';
// import dotenv from 'dotenv';

export const connectDB = async ()=>{
    try{
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`)
   
console.log('mongodb connected succesfully..');
    }catch(error){
        console.error("connection failed")
        process.exit(1)//exit 1 process with failure, 0 for success
    }
};