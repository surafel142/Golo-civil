import React from 'react';

function Footer() {
  return (
    <div>
      {/* Footer Contact Form */}
      <footer className="contact-form flex justify-center bg-gray-200 p-25">
        <input type="text" placeholder="Name" className="p-3 m-2 w-72 bg-white"/>
        <input type="email" placeholder="Email" className="p-3 m-2 w-72 bg-white"/>
        <input type="text" placeholder="Message" className="p-3 m-2 w-72 bg-white"/>
        <button className="bg-orange-600 text-white py-1 px-20 ml-4">Send</button>
      </footer>
    </div>
    );
}

export  default Footer; 
