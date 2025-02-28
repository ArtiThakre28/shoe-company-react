import React, { useState } from "react";
import logo from "/src/assets/logo.png";
import { Squash as Hamburger } from "hamburger-react";
import { NavLink } from "react-router-dom";

function Header() {
  const [isOpen, setOpen] = useState(false);

  return (
    <header className="fixed top-0 z-10 w-full bg-black ">
      <div className=" max-w-[1200px] flex justify-between items-center mx-auto px-6">
        <div>
          <img className="w-[100px] " src={logo} alt="" />
        </div>
        <nav className={isOpen ?"":"hidden md:flex" }>
          <ul className="md:flex space-x-6 text-xl md:text-lg font-bold text-white absolute right-4 top-20 bg-gray-800 p-6 md:relative md:inset-0 md:bg-transparent rounded-md ">
            <li className="pl-6">
              <NavLink className={({isActive})=>
                isActive ? "border-b-2 border-white text-purple-400" : ""
              } to="/">Home</NavLink>
            </li>
            <li>
              <NavLink className={({isActive})=>
                isActive ? "border-b-2 border-white text-purple-400" : ""
              } to="/howitworks">How It Works?</NavLink>
            </li>
            <li>
              <NavLink className={({isActive})=>
                isActive ? "border-b-2 border-white text-purple-400" : ""
              } to="/about">About</NavLink>
            </li>
            <li>
              <NavLink className={({isActive})=>
                isActive ? "border-b-2 border-white text-purple-400" : ""
              } to="/testimonials">Testimonials</NavLink>
            </li>
            <li>
              <NavLink className={({isActive})=>
                isActive ? "border-b-2 border-white text-purple-400" : ""
              } to="/contactus">Contact Us</NavLink>
            </li>
          </ul>
        </nav>
        <div className="text-white md:hidden">
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </div>
      </div>
    </header>
  );
}

export default Header;
