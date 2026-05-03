import validator from "validator";

import bcrypt from "bcrypt";
import {v2 as cloudinary} from "cloudinary";
import doctorModel from "../models/doctorModel.js";
import jwt from "jsonwebtoken";




// API endpoint for admin dashboard
const addDoctor= async (req,res)=>{


  try {

   const { name, email,password,degree,speciality,experience,about,fees,address } = req.body;

   const imageFile=req.file

   //checking for all data to check doctor

   if(!name || !email || !password || !degree || !speciality || !experience || !about || !fees || !address || !imageFile){
    return res.status(400).json({success:false,message:"All fields are required"})
   }
   //validating strong password

   if(password.length<8){
    return res.status(400).json({success:false,message:"Password must be at least 8 characters long"})
   }

   //validating email format

   if(!validator.isEmail(email)){
    return res.status(400).json({success:false,message:"Invalid email format"})
   }

   //hashing password
   const salt= await bcrypt.genSalt(10);
   const hashedPassword=await bcrypt.hash(password,salt);

   //upload image to cloudinary

   const imageUpload=await cloudinary.uploader.upload(imageFile.path,{
    resource_type:"image",
   })

   const imageUrl=imageUpload.secure_url;

   const doctorData = {
     name,
     email,
     password: hashedPassword,
     degree,
     speciality,
     experience: parseInt(experience),
     about,
     fees,
     address,
     date: Date.now(),
     image: imageUrl,
   };

   const newDoctor = new doctorModel(doctorData);

   await newDoctor.save();

   res.status(201).json({success:true,message:"Doctor added successfully"})

  } catch (error) {
     console.log('ERROR:', error);
     res.status(500).json({ success: false, message: error.message });
  }
}


// api for login admin

const adminLogin=async(req,res)=>{
  try {
    const {email,password}=req.body;

    if(!email || !password){
      return res.status(400).json({success:false,message:"Email and password are required"})
    }

    if(email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD){

      const token =jwt.sign(email+password,process.env.JWT_SECRET);
      res.status(200).json({success:true,message:"Admin login successful", token})
    }else{
      res.status(401).json({success:false,message:"Invalid email or password"})
    }


  } catch (error) {
     console.log('ERROR:', error);
     res.status(500).json({ success: false, message: error.message });
  }
}

export {adminLogin};

export {addDoctor};
