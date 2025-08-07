import React from 'react';
import logoName from "../assets/BrandName.webp";

function Navbar() {
  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50 h-[78px]">
      <div className="max-w-7xl h-full mx-auto px-4 grid grid-cols-2 items-center">
        
        {/* Logo / Brand */}
       <div className="bg-blue-500 h-[70px] w-[150px] flex items-center justify-center rounded-4xl my-[1px]">
  <img
    src={logoName}
    alt="HealthX Logo"
    className=" w-auto object-contain"
  />
</div>


        {/* Navigation Links */}
        <div className="justify-self-end space-x-6 hidden md:block">
          <a href="/monitor" className="text-white text-lg hover:text-red-400 transition bg-blue-600  p-3 rounded-3xl">Monitor</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

