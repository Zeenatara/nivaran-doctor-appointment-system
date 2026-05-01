import mongoose from "mongoose";

const connectDB = async () => {

  mongoose.connection.on("connected", () => {
    console.log("MongoDB connected successfully");
  });
  await mongoose.connect(`${process.env.MONDODB_URI}`)
};

export default connectDB;

