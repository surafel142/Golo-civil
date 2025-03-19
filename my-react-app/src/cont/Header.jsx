import React from 'react';
import { SearchIcon } from '@heroicons/react/outline';
import { ArrowRightIcon } from '@heroicons/react/solid';
import logo from '../assets/logo.png'; 
import hero from '../assets/hero.png';
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <div>
      {/* Header */}
      <header className="flex flex-wrap justify-between items-center px-6 py-4 bg-white shadow-md">
        {/* Logo */}
        <div className="w-full md:w-auto flex justify-center md:justify-start mb-3 md:mb-0">
          <img src={logo} alt="Company Logo" className="w-20" />
        </div>

        {/* Search Bar & Social Icons */}
        <div className="w-full md:w-auto flex flex-col md:flex-row items-center space-y-3 md:space-y-0 md:space-x-4">
          <div className="search-bar flex items-center bg-white rounded-lg shadow-sm overflow-hidden border border-gray-300 w-full md:w-80">
            <input 
              type="text" 
              placeholder="Search..." 
              className="p-2 flex-grow outline-none border-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-blue-500 text-white p-2 hover:bg-blue-600 transition duration-200">
              <SearchIcon className="w-5 h-5" />
            </button>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-black text-lg">
              <FaFacebookF />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-black text-lg">
              <FaLinkedinIn />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-black text-lg">
              <FaInstagram />
            </a>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-green-600 p-4">
        <ul className="flex flex-wrap justify-center space-x-4 md:space-x-6 text-white text-sm font-bold">
          <li><a href="#">Home</a></li>
          <li><a href="#">About Golo</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Past Projects</a></li>
          <li><a href="#">Our Achievements</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="hero bg-cover bg-center text-green-600 p-10 md:p-20 flex flex-col-reverse md:flex-row items-center">
        {/* Hero Text */}
        <div className="hero-text text-center md:text-left w-full md:w-1/2">
          <h1 className="text-3xl md:text-5xl font-bold">Golo Civil Engineering & Consulting Company</h1>
          <p className="mt-4 text-lg md:text-2xl text-blue-900">
            GCECCO is a Somali Diaspora-led business consortium focused on construction, investment, and sustainable development.
          </p>
          <div className="mt-6 space-x-2">
            <a href="#" className="btn bg-blue-600 text-white py-2 px-4 md:px-6 inline-block rounded-md">Contact Us</a>
            <a href="#" className="btn bg-white text-blue-900 py-2 px-4 md:px-6 inline-block rounded-md border border-blue-900">
              Our Work <ArrowRightIcon className="w-5 h-5 inline-block ml-2" />
            </a>
          </div>
        </div>

        {/* Hero Image */}
        <div className="hero-image w-full md:w-1/2 flex justify-center md:justify-end">
          <img src={hero} alt="Company image" className="w-3/4 md:w-1/2" />
        </div>
      </section>
    </div>
  );
}

export default Footer;
