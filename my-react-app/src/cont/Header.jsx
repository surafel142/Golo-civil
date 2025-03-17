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
      <header className=" flex justify-between align-center   items-center px-6 py-6 pt-6 pb-6">
        
        <div className="logo">
  <img src={logo} alt="Company Logo" className="w-20" />
</div>
<div className='mr-100 '>
<div className="search-bar flex items-center bg-white rounded-lg shadow-sm overflow-hidden">
    <input 
        type="text" 
        placeholder="Search..." 
        className="p-2 flex-grow outline-none border-none focus:ring-2 focus:ring-blue-500"
    />
    <button 
        className="bg-blue-500 text-white p-2 flex items-center gap-2 hover:bg-blue-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
    >
        
        <SearchIcon className="w-5 h-5" /> {/* Heroicons search icon */}
    </button>
    
    <div className="flex space-x-4 pl-10">
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-black text-lg">
        <FaFacebookF />
      </a>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-black text-lg">
        <FaLinkedinIn />
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blacke text-lg">
        <FaInstagram />
      </a>
    </div>
    </div>
</div>


  </header>
      <nav className='flex justify-between items-center   align-center bg-green-600 pl-40 pt-6 pb-6' >
      <ul className="flex gap-5 pl-130">
    <li className="border-r-2 border-white pr-5 h-full flex items-center"><a href="#" className="text-white font-bold">Home</a></li>
    <li className="border-r-2 border-white pr-5 h-full flex items-center"><a href="#" className="text-white font-bold">About Golo</a></li>
    <li className="border-r-2 border-white pr-5 h-full flex items-center"><a href="#" className="text-white font-bold">Services</a></li>
    <li className="border-r-2 border-white pr-5 h-full flex items-center"><a href="#" className="text-white font-bold">Past Projects</a></li>
    <li className="border-r-2 border-white pr-5 h-full flex items-center"><a href="#" className="text-white font-bold">Our Achievements</a></li>
    <li className="h-full flex items-center"><a href="#" className="text-white font-bold">Contact Us</a></li></ul>
        </nav>

 {/* Hero Section */}
   
     
      <section className="hero bg-cover bg-center text-green-600 p-40" style={{ backgroundImage: "url('../assets/hero.png')" }}>
      <div className="hero-image  flex justify-end mr-40">
      <img src={hero} alt="Company image" className="w-40" />
    </div>
  <div className="hero-content flex items-center justify-between">
    <div className="hero-text w-1/2">
      <h1 className="text-5xl font-bold">Golo Civil Engineering & Consulting Company</h1>
      <p className="mt-4 text-2xl text-blue-900">
        GCECCO is a Somali Diaspora-led business consortium focused on construction, investment, sustainable development, and more.
      </p>
      <div className="hero-buttons mt-6">
        <a href="#" className="btn bg-blue-600 text-white py-2 px-6 inline-block">Contact Us</a>
        <a href="#" className="btn bg-white text-blue-900 py-2 px-6 inline-block ml-4">
          Our Work <ArrowRightIcon className="w-5 h-5 inline-block ml-2" />
        </a>
      </div>
    </div>
    
  </div>
</section>


      </div>
    );
}

export  default Footer; 