




// API endpoint for admin dashboard
const addDoctor=(req,res)=>{


  try {

   const { name, email,password,speciality,degree,experience,about,fees,address } = req.body;

   const imageFile=req.File
   console.log(
     {
       name,
       email,
       password,
       speciality,
       degree,
       experience,
       about,
       fees,
       address,
     },
     imageFile
   );

  } catch (error) {

  }
}

export {addDoctor};
