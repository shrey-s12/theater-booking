import React from 'react';

const Footer = () => {
  return (
    <div className="flex justify-center fixed w-full bottom-0 p-4 bg-gray-100">
      <div className="flex mx-4 items-center">
        <div className="w-5 h-5 bg-white border-green-500 border mr-2"></div>
        Available
      </div>
      <div className="flex mx-4 items-center">
        <div className="w-5 h-5 bg-green-500 border mr-2"></div>
        Selected
      </div>
      <div className="flex mx-4 items-center">
        <div className="w-5 h-5 bg-gray-200 border mr-2"></div>
        Booked
      </div>
    </div>
  );
};

export default Footer;
