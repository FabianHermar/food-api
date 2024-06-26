import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb://localhost:27017/food",
      console.log("Database connected"),
    );
  } catch (error) {
    console.log(error);
    throw new Error("Database connection failed");
  }
};

export default connectDB;
