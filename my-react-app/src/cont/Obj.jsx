import React from 'react';
import logo from '../assets/logo.png';
import { FaBullseye, FaEye } from "react-icons/fa"; // Import icon


function Footer() {
  return (
    <div>
 <section className="objective-vision flex items-center justify-center pl-100 pr-100 gap-10">
  
  {/* Objective Section */}
  <div className="objective flex-1 pb-10">
    <img src={logo} alt="Company Logo" className="w-40" /><br></br>
    <h2 className="text-7xl text-green-500 mt-4">Our Objective</h2>
    <p>
      GCECCO Construction Company performs operations across all provinces in Somalia, 
      serving in land development, municipal, commercial, industrial, and heavy civil construction.
    </p>
  </div>
  
  {/* Mission & Vision Section */}
  <div className="mission-vision flex-1 bg-gray-100 p-6 text-right rtl min-h-[60vh] flex flex-col justify-center">
    
    {/* Mission Section */}
    {/* Mission Section */}
<div className="flex flex-col items-end gap-2">
  <FaBullseye className="text-green-600 text-5xl w-12" />
  <h3 className="text-5xl text-green-600 font-semibold">Our Mission</h3>
</div>
<p className="mt-2 text-gray-700">To provide foundations for post-conflict Somalia’s future.</p>

{/* Vision Section */}
<div className="flex flex-col items-end gap-2 mt-6">
  <FaEye className="text-green-600 text-5xl w-12" />
  <h3 className="text-5xl text-green-600 font-semibold">Our Vision</h3>
</div>
<p className="mt-2 text-gray-700">
  To be the most respected and successfully operated company in our industry – creating value for all stakeholders.
</p>


  </div>

</section>


    </div>
    );
}

export  default Footer; 

      