import React, { useState } from "react";
import Modal from "../Modal";
import InputForm from "../InputForm";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [popUp, setPopUp] = useState(false);

  const checkLogin = () => {
    setPopUp(!popUp);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="shrink-0">
            <h2 className="text-2xl font-bold text-emerald-600 tracking-tight cursor-pointer">
              Food<span className="text-gray-800">Blog</span>
            </h2>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <ul className="flex space-x-8 items-center font-medium text-gray-600">
              <li className="hover:text-emerald-500 cursor-pointer transition-colors">
                Home
              </li>
              <li className="hover:text-emerald-500 cursor-pointer transition-colors">
                My Recipe
              </li>
              <li className="hover:text-emerald-500 cursor-pointer transition-colors">
                Favourites
              </li>
              <li
                className="bg-emerald-500 text-white px-5 py-2 rounded-full hover:bg-emerald-600 transition-all cursor-pointer"
                onClick={checkLogin}
              >
                Login
              </li>
              <li className="hover:text-red-500 cursor-pointer text-sm transition-colors">
                Logout
              </li>
            </ul>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-emerald-500 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 animate-fade-in-down">
          <ul className="px-4 pt-2 pb-4 space-y-2 font-medium text-gray-600">
            <li className="block px-3 py-2 hover:bg-emerald-50 hover:text-emerald-500 rounded-md">
              Home
            </li>
            <li className="block px-3 py-2 hover:bg-emerald-50 hover:text-emerald-500 rounded-md">
              My Recipe
            </li>
            <li className="block px-3 py-2 hover:bg-emerald-50 hover:text-emerald-500 rounded-md">
              Favourites
            </li>
            <li className="block px-3 py-2 text-emerald-600 font-bold border-t border-gray-100 pt-4">
              Login
            </li>
            <li className="block px-3 py-2 text-red-500">Logout</li>
          </ul>
        </div>
      )}
      {popUp && (
        <Modal onClose={() => setPopUp(false)}>
          <InputForm setIsOpen={() => setIsOpen(false)} />
        </Modal>
      )}
    </header>
  );
};

export default Navbar;
