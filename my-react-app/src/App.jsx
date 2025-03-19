import React from 'react';
import Footer from './cont/Footer';
import Header from './cont/Header';
import About from './cont/About';
import Obj from './cont/Obj';
import Service from './cont/Service';
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import logo from './assets/logo.png';
  
function App() {
  return (
    <div>
     <Header />
     <About/> 
      <Obj />
      <Service />
     <Footer/>
    


     <footer className="p-6 bg-gray-100 text-black">
  <div className="container mx-auto flex flex-col md:flex-row flex-wrap justify-between items-center text-center md:text-left space-y-6 md:space-y-0">

    {/* Address Section */}
    <div className="flex flex-col space-y-2 w-full md:w-1/3 items-center md:items-start">
      <img src={logo} alt="Company Logo" className="w-16 md:w-20 mb-2" />
      <p className="text-sm">Bulahubey, Wadajir district Apartment next to Jabuti School</p>
      <p className="text-sm">Mogadishu, Somalia</p>
    </div>

    {/* Navigation Links */}
    <div className="flex flex-wrap justify-center space-x-4 md:space-x-6 w-full md:w-auto">
      <a href="#about" className="text-sm text-yellow-900 hover:underline">About</a>
      <a href="#work" className="text-sm text-yellow-900 hover:underline">Our Work</a>
      <a href="#contact" className="text-sm text-yellow-900 hover:underline">Contact</a>
    </div>

    {/* Social Media Icons */}
    <div className="flex space-x-4 w-full md:w-auto justify-center">
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

  {/* Copyright Section */}
  <div className="bg-green-500 text-white p-4 mt-6 text-center">
    <p className="text-sm">Copyright © 2024 By Golo Civil Engineering & Consulting Company</p>
    <p className="text-sm">Designed and Developed By <span className='text-yellow-900'>Jafar Noyon</span></p>
  </div>
</footer>



     </div>
  );
}

export default App;
