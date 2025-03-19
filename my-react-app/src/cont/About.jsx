import React from 'react';
import logo from '../assets/logo.png'; // Fixed incorrect import name
import sura from '../assets/sura.png';

function Footer() {
  return (
    <section 
      className="about flex flex-col md:flex-row items-center justify-center p-6"
      style={{ backgroundColor: 'oklch(0.954 0.038 75.164)' }}
    >
      <div className="flex flex-col md:flex-row w-full md:w-4/5 gap-6 md:gap-10 items-center">

        {/* Left Section */}
        <div className="about-content flex flex-col w-full md:w-1/2 items-center md:items-start text-center md:text-left">
          <h2 className="text-green-600 text-2xl md:text-3xl font-bold pb-4">About Golo</h2>
          <img src={logo} alt="About Image" className="w-full md:w-3/4 h-auto mb-4" />
          <p className="bg-green-600 text-white w-full md:w-3/4 p-4 text-center rounded-lg">
            Established in 2007, GCECCO is proud of its achievements in the field of infrastructure and construction in Somalia.
          </p>
          <p className="w-full md:w-3/4 text-black mt-4 px-2">
            The updated `reportMissingPerson` controller now handles the submission of missing person reports with more detailed information, including the missing person's name, age, sex, 
            missing date, expected return date (`toDate`), skin color, family relationship, location, and description.
          </p>
        </div>

        {/* Right Section */}
        <div className="flex justify-center items-center w-full md:w-1/2">
          <img src={sura} alt="Company about" className="w-full md:w-3/4 h-auto rounded-lg shadow-lg" />
        </div>

      </div>
    </section>
  );
}

export default Footer;
