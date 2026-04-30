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
          <NavLink onClick={() => setShowMenu(false)} to="/">
            <li className="py-1  hover:text-primary cursor-pointer">Home</li>
            <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
          </NavLink>

          <NavLink onClick={() => setShowMenu(false)} to="/doctors">
            <li className="py-1  hover:text-primary cursor-pointer">
              All Doctors
            </li>
            <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
          </NavLink>

          <NavLink onClick={() => setShowMenu(false)} to="/about">
            <li className="py-1  hover:text-primary cursor-pointer">About</li>
            <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
          </NavLink>

          <NavLink onClick={() => setShowMenu(false)} to="/contact">
            <li className="py-1  hover:text-primary cursor-pointer ">
              Contact
            </li>
            <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
          </NavLink>
        </ul>
        <div>
          {token ? (
            <div className="flex items-center gap-2 cursor-pointer group relative">
              <img
                className="w-8 rounded-full"
                src={assets.profile_pic}
                alt=""
              />
              <img className="w-2.5" src={assets.dropdown_icon} alt="" />
              <div className="absolute top-0 right-0 pt-14 hidden text-base group-hover:block font-medium text-gray-600 z-20 ">
                <div className="min-w-48 bg-slate-100 rounded-lg p-4 flex flex-col gap-2">
                  <p
                    onClick={() => navigate('my-profile')}
                    className="hover:text-black cursor-pointer"
                  >
                    My Profile
                  </p>
                  <p
                    onClick={() => navigate('my-appointment')}
                    className="hover:text-black cursor-pointer"
                  >
                    My Appointments
                  </p>
                  <p
                    onClick={() => setToken(false)}
                    className="hover:text-black cursor-pointer"
                  >
                    Logout
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <button
              onClick={() => navigate('/login')}
              className="h-10 w-auto bg-[#027a8a] px-4 py-2 text-white rounded-full font-bold  hidden md:block"
            >
              Login
            </button>
          )}
          {/* Mobile Menu Button */}
          <img
            onClick={() => setShowMenu(true)}
            className="w-6 md:hidden"
            src={assets.menu_icon}
            alt=""
          />

          {/* Mobile Menu */}
          <div
            className={`${
              showMenu ? 'fixed w-full' : 'h-0 w-0'
            } md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all`}
          >
            <div className="flex items-center justify-between px-5 py-6">
              <img src={nivaran_logo} alt="" className="w-32" />
              <img
                onClick={() => setShowMenu(false)}
                src={assets.cross_icon}
                alt=""
                className="w-7"
              />
            </div>

            <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium">
              <NavLink onClick={() => setShowMenu(false)} to="/">
                <p className="px-4 py-2 rounded inline-block">Home</p>
              </NavLink>

              <NavLink onClick={() => setShowMenu(false)} to="/doctors">
                <p className="px-4 py-2 rounded inline-block">All Doctors</p>
              </NavLink>

              <NavLink onClick={() => setShowMenu(false)} to="/about">
                <p className="px-4 py-2 rounded inline-block">About</p>
              </NavLink>

              <NavLink onClick={() => setShowMenu(false)} to="/contact">
                <p className="px-4 py-2 rounded inline-block">Contact</p>
              </NavLink>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;

