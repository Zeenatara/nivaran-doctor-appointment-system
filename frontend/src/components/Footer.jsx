import React from 'react';
import { assets } from '../assets/assets';
import nivaran_logo from '../assets/nivaran_logo.png';

const Footer = () => {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[2fr_1fr_1fr] gap-14 my-10 mt-40 text-sm ">
        <div>
          <img className="mb-5 w-40" src={nivaran_logo} alt="" />
          <p className="mt-6 w-full md:w-2/3 text-gray-600 leading-6 ">
            Lorem ipsum dol or sit, amet consectetur adipisicing elit. Unde
            officiis ab nihil fugit? Nam in aperiam reprehenderit sapiente
            obcaecati excepturi.
          </p>
        </div>

        {/* center  section */}

        <div>
          <p className="text-xl font font-medium mb-5">COMPANY</p>
          <ul className=" flex flex-col gap-2 text-gray-600">
            <li>Home </li>
            <li>About us</li>
            <li>Contact us</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        {/* right section */}

        <div>
          <p className="text-xl font font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>+91-212-342-5467</li>
            <li>nivaran@gmail.com</li>
          </ul>
        </div>
      </div>
      {/* copyright text  */}

      <div>
        <hr />
        <p className='py-5 text-sm text-center'>Copyright 2026@ Nivaran - All Right Reserved</p>
      </div>
    </div>
  );
}

export default Footer;
