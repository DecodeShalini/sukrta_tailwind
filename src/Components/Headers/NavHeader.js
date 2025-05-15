import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../../assets/Images/sukrtaLogo.png";

const NavHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full overflow-x-auto z-50">
      <nav className="bg-white shadow-md relative z-[100]">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">

          {/* Logo */}
          <div className="flex items-center h-12">
            <Link to="/" className="flex h-full">
              <img src={logo} alt="Sukrta Logo" className="h-full w-auto block" />
            </Link>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center space-x-12 text-gray-700 whitespace-nowrap">
            <li><Link to="/" className="hover:text-blue-600 font-semibold">Home</Link></li>
            <li><Link to="/about" className="hover:text-blue-600 font-semibold">About</Link></li>
            <li><Link to="/services" className="hover:text-blue-600 font-semibold">Services</Link></li>
            <li><Link to="/contact" className="hover:text-blue-600 font-semibold">Contact</Link></li>
          </ul>

          {/* Mobile Menu Toggle Icon */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="md:hidden px-4 pb-4">
            <ul className="space-y-4 text-gray-700">
              <li><Link to="/" onClick={() => setMenuOpen(false)} className="block font-medium hover:text-blue-600">Home</Link></li>
              <li><Link to="/about" onClick={() => setMenuOpen(false)} className="block font-medium hover:text-blue-600">About</Link></li>
              <li><Link to="/services" onClick={() => setMenuOpen(false)} className="block font-medium hover:text-blue-600">Services</Link></li>
              <li><Link to="/contact" onClick={() => setMenuOpen(false)} className="block font-medium hover:text-blue-600">Contact</Link></li>
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
};

export default NavHeader;
