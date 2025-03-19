import React from 'react';

function Footer() {
  return (
    <footer className="contact-form flex flex-col md:flex-row items-center justify-center bg-gray-200 p-6 md:p-8">
      <div className="flex flex-col md:flex-row items-center gap-3 w-full max-w-2xl">
        <input 
          type="text" 
          placeholder="Name" 
          className="p-3 w-full md:w-72 bg-white rounded-md shadow-md border border-gray-300"
        />
        <input 
          type="email" 
          placeholder="Email" 
          className="p-3 w-full md:w-72 bg-white rounded-md shadow-md border border-gray-300"
        />
        <input 
          type="text" 
          placeholder="Message" 
          className="p-3 w-full md:w-72 bg-white rounded-md shadow-md border border-gray-300"
        />
        <button className="bg-orange-600 text-white py-2 px-6 md:px-20 rounded-md shadow-md w-full md:w-auto">
          Send
        </button>
      </div>
    </footer>
  );
}

export default Footer;
