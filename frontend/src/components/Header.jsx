import React from 'react';
import {assets} from '../assets/assets'; // change if needed

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row flex-wrap bg-primary rounded-lg px-6 md:px-14 lg:px-20 my-10 mx-4 md:mx-10 gap-10 md:gap-0">
      {/* Left Side */}
      <div className="w-full md:w-1/2 flex flex-col gap-6 justify-center items-start text-white py-10 md:py-[10vw] md:mb-[-30px]">
        <p className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
          Book Appointment <br /> With Trusted Doctors
        </p>

        <div className="flex flex-col md:flex-row gap-4 items-center text-sm text-gray-300">
          <img className="w-25" src={assets.group_profiles} alt="" />
          <p>
            Simply browse through our extensive list of trusted doctors,
            <br />
            schedule your appointment hassle-free.
          </p>
        </div>

        <a
          className="flex items-center gap-2 bg-white px-4 py-2 text-black rounded-full font-bold mt-auto text-sm md:m-0 hover:scale-105 transition-all duration-300"
          href="#speciality"
        >
          Book Appointment
          <img className="w-3" src={assets.arrow_icon} alt="" />
        </a>
      </div>

      {/* Right Side */}
      <div className="w-full md:w-1/2 relative">
        <img
          className="w-full md:absolute bottom-0 h-auto rounded-lg"
          src={assets.header_img}
          alt=""
        />
      </div>
    </div>
  );
};

export default Header;
