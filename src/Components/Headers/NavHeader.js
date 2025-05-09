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
          <Link to="/services" className="hover:text-blue-600">
              <b>Services</b>
            </Link>
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
