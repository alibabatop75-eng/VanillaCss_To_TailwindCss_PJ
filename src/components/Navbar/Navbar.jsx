// src/components/Navbar/Navbar.jsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  
  const gotoHome = () => {
    navigate('/');
  }

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div 
            className="text-xl font-bold text-green-900 cursor-pointer hover:text-green-900 transition-colors"
            onClick={gotoHome}
          >
            PROPERTY RENTALS
          </div>
          
          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8">
            <li>
              <Link 
                to={"/aboutus"} 
                className="text-gray-700 hover:text-green-900 font-medium transition-colors"
              >
                ABOUT US
              </Link>
            </li>
            <li>
              <Link 
                to={"/villas"} 
                className="text-gray-700 hover:text-green-900 font-medium transition-colors"
              >
                VILLAS
              </Link>
            </li>
            <li>
              <Link 
                to={"/contact"} 
                className="text-gray-700 hover:text-green-900 font-medium transition-colors"
              >
                CONTACT
              </Link>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <RxHamburgerMenu
            className="md:hidden text-2xl text-gray-700 cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <ul className="flex flex-col space-y-4">
              <li>
                <Link 
                  to={"/aboutus"} 
                  className="block text-gray-700 hover:text-green-900 font-medium transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  ABOUT US
                </Link>
              </li>
              <li>
                <Link 
                  to={"/villas"} 
                  className="block text-gray-700 hover:text-green-900 font-medium transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  VILLAS
                </Link>
              </li>
              <li>
                <Link 
                  to={"/contact"} 
                  className="block text-gray-700 hover:text-green-900 font-medium transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  CONTACT
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;