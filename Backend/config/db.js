import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("✅ Connected to MongoDB");
  } catch (error) {
    console.error("❌ Connection Failed");
    console.error(error);
    // Don't process.exit(1) — safe for serverless platforms like Render
  }
};