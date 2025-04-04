import React, { useState } from "react";
import { Link } from "react-router-dom"; // If you're using React Router

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-blue-600 shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="text-white text-2xl font-bold">
            <Link to="/">StoryTeller</Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="text-white hover:text-blue-200 transition">
              Home
            </Link>
            <Link to="#about" className="text-white hover:text-blue-200 transition">
              About
            </Link>
            <Link to="#blog" className="text-white hover:text-blue-200 transition">
              Blog
            </Link>
            <Link to="#stories" className="text-white hover:text-blue-200 transition">
              Stories
            </Link>

            {/* Auth Links */}
            <Link
              to="/register"
              className="text-white hover:text-blue-200 transition px-4 py-2 border-2 border-white rounded-md"
            >
              Register
            </Link>
            <Link
              to="/login"
              className="text-white hover:text-blue-200 transition px-4 py-2 border-2 border-white rounded-md"
            >
              Login
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } md:hidden bg-blue-600 text-white space-y-4 mt-4 px-4 py-3 rounded-md shadow-lg`}
        >
          <Link to="/" className="block text-white hover:text-blue-200 transition">
            Home
          </Link>
          <Link to="#about" className="block text-white hover:text-blue-200 transition">
            About
          </Link>
          <Link to="#blog" className="block text-white hover:text-blue-200 transition">
            Blog
          </Link>
          <Link to="#stories" className="block text-white hover:text-blue-200 transition">
            Stories
          </Link>

          {/* Auth Links */}
          <Link
            to="/register"
            className="block text-white hover:text-blue-200 transition px-4 py-2 border-2 border-white rounded-md"
          >
            Register
          </Link>
          <Link
            to="/login"
            className="block text-white hover:text-blue-200 transition px-4 py-2 border-2 border-white rounded-md"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
