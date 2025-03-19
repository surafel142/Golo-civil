import React from 'react';
import logo from '../assets/logo.png';
import { FaBullseye, FaEye } from "react-icons/fa"; // Import icons

function Footer() {
  return (
    <div className="bg-white">
      {/* Objective & Vision Section */}
      <section className="objective-vision flex flex-col md:flex-row items-center justify-center px-4 md:px-20 gap-10 py-10">
        
        {/* Objective Section */}
        <div className="objective flex-1 text-center md:text-left">
          <img src={logo} alt="Company Logo" className="w-24 md:w-40 mx-auto md:mx-0" />
          <h2 className="text-4xl md:text-7xl text-green-500 font-bold mt-4">Our Objective</h2>
          <p className="mt-4 text-gray-700 text-lg md:text-xl">
            GCECCO Construction Company performs operations across all provinces in Somalia, 
            serving in land development, municipal, commercial, industrial, and heavy civil construction.
          </p>
        </div>
        
        {/* Mission & Vision Section */}
        <div className="mission-vision flex-1 bg-gray-100 p-6 rounded-lg text-center md:text-right min-h-[60vh] flex flex-col justify-center">
          
          {/* Mission Section */}
          <div className="flex flex-col items-center md:items-end gap-2">
            <FaBullseye className="text-green-600 text-3xl md:text-5xl w-12" />
            <h3 className="text-3xl md:text-5xl text-green-600 font-semibold">Our Mission</h3>
            <p className="mt-2 text-gray-700 text-lg">To provide foundations for post-conflict Somalia’s future.</p>
          </div>

          {/* Vision Section */}
          <div className="flex flex-col items-center md:items-end gap-2 mt-6">
            <FaEye className="text-green-600 text-3xl md:text-5xl w-12" />
            <h3 className="text-3xl md:text-5xl text-green-600 font-semibold">Our Vision</h3>
            <p className="mt-2 text-gray-700 text-lg">
              To be the most respected and successfully operated company in our industry – creating value for all stakeholders.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}

export default Footer;
