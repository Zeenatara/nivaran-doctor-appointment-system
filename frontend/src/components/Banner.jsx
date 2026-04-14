import React from 'react';
import { assets } from '../assets/assets';

const Banner = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row items-center justify-between bg-[#70aab2] rounded-lg px-6 md:px-10 lg:px-20 mx-20 my-10 gap-6">
        <div className="text-white text-center md:text-left">
          <p className="text-2xl md:text-3xl font-semibold leading-tight">
            Your Health, Our Priority
          </p>
          <p className="mt-4 text-sm md:text-base text-gray-300">
            Experience personalized healthcare with our trusted doctors.
          </p>
          <button className="bg-slate-300 px-4 py-2 rounded-full font-medium w-auto text-black mt-12">
            create account
          </button>
        </div>

        <img
          className="w-full md:w-auto h-auto rounded-lg"
          src={assets.appointment_img}
          alt=""
        />
      </div>
    </div>
  );
}

export default Banner;
