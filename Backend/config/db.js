import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("DB connected successfully.");
  } catch (error) {
    console.error("DB connection failed! Error:", error.message);
    // Don't process.exit(1) — safe for serverless platforms
  }
};