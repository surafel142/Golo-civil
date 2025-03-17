import React from 'react';
import react from '../assets/logo.png'; 
import sura from '../assets/sura.png';

function Footer() {
  return (
    <div>
    <section className="about flex items-center justify-center p-6 " style={{ backgroundColor: 'oklch(0.954 0.038 75.164)' }}>
  <div className="flex w-4/5 gap-10 items-center">
    {/* Left Section */}
    <div className="about-content flex flex-col w-1/2">
      <h2 className="text-green-600 text-3xl font-bold pb-6">About Golo</h2>
      <img src={react} alt="About Image" className="w-3/4 h-auto mb-4" />
      <p className=" bg-green-600 text-white w-3/4  p-4 text-center rounded-lg" >
        Established in 2007, GCECCO is proud of its achievements in the field of infrastructure and construction in Somalia.
      </p>
      <p className="w-3/4  text-black  mt-4">
        The updated `reportMissingPerson` controller now handles the submission of missing person reports with more detailed information, including the missing person's name, age, sex, 
        missing date, expected return date (`toDate`), skin color, family relationship, location, and description. 
        It processes file uploads for photos and 
        documents, stores the data in a `missing_persons` database table, and returns a success message along with the newly inserted record's ID. 
        The controller has been modified to ensure that the fields match the updated database schema and improve overall organization and readability.
      </p>
    </div>

    {/* Right Section */}
    <div className="flex justify-center items-center w-1/2">
      <img src={sura} alt="Company about" className="w-3/4 h-auto rounded-lg shadow-lg" />
    </div>
  </div>
</section>

    </div>
    );
}

export  default Footer; 

      