import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
 
const mongoDB_URL= process.env.MONGODB_URL

const connectDB=async(req,res)=>{
    try {
        const connection = await mongoose.connect(mongoDB_URL)
        console.log("MongoDB connected...");
    } 
    catch (err) 
    {
        console.error("Error connecting to MongoDB", err);
      res.status (500).json({message:"MongoDB connection Error",})
    }
}
export default connectDB;