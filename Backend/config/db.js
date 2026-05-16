import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      serverSelectionTimeoutMS: 5000,
      family: 4,
    });
    console.log("✅ Connected to MongoDB");
  } catch (error) {
    console.error("❌ Connection Failed");
    console.error(error);
  }
};