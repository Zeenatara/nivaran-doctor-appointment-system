import express from "express";
import cors from "cors";
import dotenv from "dotenv/config";
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import adminRoute from "./routes/adminroute.js";


// app config
const app= express();
const port= process.env.PORT || 9000;
connectDB();
connectCloudinary();

// middlewares
app.use(cors());
app.use(express.json());

//api endpoints
app.use('/api/admin', adminRoute);


// routes
app.get("/", (req, res) => {
    res.status(200).send("the server is running");
});

// listen
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

