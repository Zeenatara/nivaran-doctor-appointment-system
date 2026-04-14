import React from 'react';
import { NavLink } from 'react-router-dom';
import nivaran_logo from '../assets/nivaran_logo.png';
import { useNavigate } from 'react-router-dom';
import {assets} from '../assets/assets';
import { useState } from 'react';
const Navbar = () => {
  const navigate = useNavigate();

  const [showMenu, setShowMenu] = useState(false);
  const[token,setToken] = useState(true);
  return (
    <>


      <div className="mx-4 my-2 flex items-center justify-between text-sm border-b border-b-gray-500 ">
        <img className="h-[80px] w-auto px-10" src={nivaran_logo} alt="Logo" />
        <ul className="hidden md:flex gap-5 items-start font-medium">
          <NavLink to = "/">
            <li className="py-1  hover:text-primary cursor-pointer">Home</li>
            <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
          </NavLink>

          <NavLink to = "/doctors">
            <li className="py-1  hover:text-primary cursor-pointer">
              All Doctors
            </li>
            <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
          </NavLink>

          <NavLink to = "/about">
            <li className="py-1  hover:text-primary cursor-pointer">About</li>
            <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
          </NavLink>

          <NavLink to = "/contact">
            <li className="py-1  hover:text-primary cursor-pointer ">
              Contact
            </li>
            <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
          </NavLink>
        </ul>
        <div>


          {token ?
           <div className='flex items-center gap-2 cursor-pointer group relative'>
            <img className='w-8 rounded-full' src={assets.profile_pic} alt="" />
            <img className='w-2.5' src={assets.dropdown_icon} alt="" />
            <div className='absolute top-0 right-0 pt-14 hidden text-base group-hover:block font-medium text-gray-600 z-20 '>
              <div className='min-w-48 bgslate-100 rounded-lg p-4 flex flex-col gap-2'>
                <p onClick={()=>navigate('my-profile')} className='hover:text-black cursor-pointer'>My Profile</p>
                <p onClick={()=>navigate('my-appointment')} className='hover:text-black cursor-pointer'>My Appointments</p>
                <p onClick={()=>setToken(false)}  className='hover:text-black cursor-pointer'>Logout</p>
              </div>
            </div>
          </div>
           :
          <button onClick={()=>navigate('/login')} className="h-10 w-auto bg-[#01626E] px-4 py-2 text-white rounded-full font-bold  hidden md:block">
            Login
          </button>}
        </div>
      </div>
    </>
  );
}

export default Navbar;

