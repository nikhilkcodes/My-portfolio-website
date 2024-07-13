import React, { useState } from "react";
import './style.css'
import { Link } from 'react-router-dom';
import ThemeBtn from "../themebtn/ThemeBtn";

function Navbar() {
  const handleMenu = () => {
    const navDialog = document.getElementById('nav-dialog');
    navDialog.classList.toggle('hidden');
  };

  return (
    <div className="Nav-color">
      <nav className="bg-gray-200 dark:bg-slate-800">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">

          <div className="relative flex h-16 items-center justify-between">
            <div className="text-2xl text-black font-semibold font-monospace dark:text-white">
              Nikhil Singh
            </div>
            <div className="font-monospace dark:text-white">
              <ul className="md:flex hidden">
              <li className="mx-[10px] cursor-pointer"><Link to="/">Home</Link></li>
                <li className="mx-[10px] cursor-pointer"><Link to="/about">About</Link></li>
                <li className="mx-[10px] cursor-pointer"><Link to="/projects">Projects</Link></li>
                <li className="mx-[10px] cursor-pointer"><Link to="/contact">Contact</Link></li>
              </ul>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              {/**dark mode button here */}
              <ThemeBtn />
              {/**here navbutton for smaller screens */}
              <br />
              <button className="p-2 md:hidden" onClick={handleMenu}>
                <i className="fa-solid fa-bars dark:text-white"></i>
              </button>
              <div id="nav-dialog" className="hidden fixed z-10 md:hidden bg-white dark:bg-slate-800 inset-0 p-3">
                <div id="nav-bar" className="flex justify-between">
                  <button className="p-2 md:hidden" onClick={handleMenu}>
                    <i className="fa-solid fa-xmark text-black dark:text-white"></i>
                  </button>
                </div>
                <div className="mt-6 font-monospace">
                  <Link to="/" className="font-medium m-3 p-3 hover:bg-gray-200 dark:hover:bg-slate-800 dark:text-white block rounded-lg">Home</Link>
                  <Link to="/about" className="font-medium m-3 p-3 hover:bg-gray-200 dark:hover:bg-slate-800 dark:text-white block rounded-lg">About</Link>
                  <Link to="/projects" className="font-medium m-3 p-3 hover:bg-gray-200 dark:hover:bg-slate-800 dark:text-white block rounded-lg">Projects</Link>
                  <Link to="/contact" className="font-medium m-3 p-3 hover:bg-gray-200 dark:hover:bg-slate-800 dark:text-white block rounded-lg">Contact</Link>
                </div>
                <div className="h-[1px] bg-gray-300 dark:bg-gray-600"></div>
              </div>

            </div>
          </div>
        </div>
      </nav>
    </div>

  )
}

export default Navbar;
