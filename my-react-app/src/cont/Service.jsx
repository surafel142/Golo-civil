import React from 'react';
import { FaWater, FaIndustry, FaTools } from "react-icons/fa";


function Footer() {
  return (
    <div>
   
  

<section className="services text-center py-12 px-12">
  <h2 className="text-3xl font-semibold mb-6">Our Services</h2>

  {/* Grid Layout */}
  <div className="service-grid grid grid-cols-1 md:grid-cols-3 gap-8 justify-center">
    
    {/* Water Solutions */}
    <div className="service-card p-6 bg-gray-50 rounded-xl shadow-md">
      <FaWater className="text-green-600 text-6xl mx-auto" />
      <h3 className="text-lg text-green-700 mt-4">Water & Wastewater Solutions</h3>
      <p className="mt-2">Specializing in environmental pollution control, offering expertise in process design, supply, testing, commissioning, and operation of treatment plants.</p>
    </div>

    {/* Metafabrication */}
    <div className="service-card p-6 bg-gray-50 rounded-xl shadow-md">
      <FaIndustry className="text-green-600 text-6xl mx-auto" />
      <h3 className="text-lg text-green-700 mt-4">Metafabrication Works</h3>
      <p className="mt-2">Experienced fabricators, welders, and designers working in both small and large-scale fabrication for industrial needs.</p>
    </div>

    {/* Electro-Mechanical */}
    <div className="service-card p-6 bg-gray-50 rounded-xl shadow-md">
      <FaTools className="text-green-600 text-6xl mx-auto" />
      <h3 className="text-lg text-green-700 mt-4">Electro - Mechanical</h3>
      <p className="mt-2">Comprehensive repair and maintenance services for office automation equipment including computers, printers, and lab devices.</p>
    </div>

    {/* Extra Service - Repeat for more */}
    <div className="service-card p-6 bg-gray-50 rounded-xl shadow-md">
      <FaTools className="text-green-600 text-6xl mx-auto" />
      <h3 className="text-lg text-green-700 mt-4">Electro - Mechanical</h3>
      <p className="mt-2">Comprehensive repair and maintenance services for office automation equipment including computers, printers, and lab devices.</p>
    </div>

    <div className="service-card p-6 bg-gray-50 rounded-xl shadow-md">
      <FaTools className="text-green-600 text-6xl mx-auto" />
      <h3 className="text-lg text-green-700 mt-4">Electro - Mechanical</h3>
      <p className="mt-2">Comprehensive repair and maintenance services for office automation equipment including computers, printers, and lab devices.</p>
    </div>

    {/* Contact Button */}
    <div className="contact-button mt-6">
      <a href="#" className="btn bg-orange-600 text-white py-2 px-6 inline-block rounded-lg shadow-md hover:bg-orange-700">
        Contact Us
      </a>
    </div>

  </div>
</section>


      </div>
    );
}

export  default Footer; 