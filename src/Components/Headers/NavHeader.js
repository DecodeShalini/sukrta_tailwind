import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/Images/sukrtaLogo.png";

const NavHeader = () => {
  return (
    <div className="w-full overflow-x-auto z-50">
    <nav className="bg-white shadow-md relative z-[100]">
    <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">

        {/* Left - Logo */}
        <div className="flex items-center h-12">
          <Link to="/" className="flex h-full">
            <img src={logo} alt="Zentec Logo" className="h-full w-auto block" />
          </Link>
        </div>

        {/* Right - Nav Items */}
        <ul className="hidden md:flex items-center space-x-12 text-gray-700 whitespace-nowrap">

          <li>
            <Link to="/" className="hover:text-blue-600">
              <b>Home</b>
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-blue-600">
              <b>About</b>
            </Link>
          </li>
          <li className="relative group">
  <button className="hover:text-blue-600 flex items-center gap-1">
    <b>Services</b>
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
    </svg>
  </button>
  <ul className="absolute left-0 top-full mt-2 bg-white shadow-lg border rounded w-40 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all duration-300 z-[110]">
    <li className="px-4 py-2 hover:bg-gray-100">
      <Link to="/services/web-development">Web Development</Link>
    </li>
    <li className="px-4 py-2 hover:bg-gray-100">
      <Link to="/services/it-consulting">IT Consulting</Link>
    </li>
    <li className="px-4 py-2 hover:bg-gray-100">
      <Link to="/services/cloud-solutions">Cloud Solutions</Link>
    </li>
  </ul>
</li>
          <li>
            <Link to="/contact" className="hover:text-blue-600">
              <b>Contact</b>
            </Link>
          </li>
        </ul>

        {/* Mobile menu icon (optional) */}
        <div className="md:hidden">
          {/* Hamburger menu logic can go here */}
        </div>
      </div>
    </nav>
    </div>
  );
};

export default NavHeader;
