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
    



<footer className="p-10 bg-gray-100 text-black">
  <div className="container mx-auto flex flex-wrap justify-between items-center">

    {/* Address Section */}
    <div className="flex flex-col space-y-2 w-1/3">
      <img src={logo} alt="Company Logo" className="w-20 mb-2" />
      <p className="text-sm">Bulahubey, Wadajir district Apartment next to Jabuti School</p>
      <p className="text-sm">Mogadishu, Somalia</p>
    </div>

    {/* Navigation Links */}
    <div className="flex space-x-6">
      <a href="#about" className="text-sm text-yellow-900">About</a>
      <a href="#work" className="text-sm text-yellow-900">Our Work</a>
      <a href="#contact" className="text-sm text-yellow-900">Contact</a>
    </div>

    {/* Social Media Icons */}
    <div className="flex space-x-4">
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-lg">
        <FaFacebookF />
      </a>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-lg">
        <FaLinkedinIn />
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-lg">
        <FaInstagram />
      </a>
    </div>

  </div>

  {/* Copyright Section */}
  <div className="bg-green-500 text-white p-4 mt-6">
    <div className="container mx-auto flex justify-between text-sm">
      <p>Copyright © 2024 By Golo Civil Engineering & Consulting Company</p>
      <p>Designed and Developed By <span className='text-yellow-900'>Jafar Noyon </span></p>
    </div>
  </div>
</footer>


     </div>
  );
}

export default App;
