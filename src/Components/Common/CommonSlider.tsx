// components/Breadcrumb.js
import image from 'next/image';
import React from 'react';
type Prop = {
    data: {
      cont1: string;
      cont2: string;
    };
    image: string;
  };

const CommonSlider = ({ data, image }: Prop) => {
   
  return (
    <div className="relative bg-cover bg-center h-screen flex items-center justify-center text-white"
         style={{ backgroundImage: `url(${image})` }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 md:px-10">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
        {data.cont1}
        </h1>
        <p className="mt-4 text-lg md:text-2xl">
        {data.cont2}
        </p>

        {/* Buttons */}
        <div className="mt-8 flex space-x-4 justify-center">
          <button className="px-6 py-3 bg-white text-black font-semibold rounded-md shadow-md hover:bg-gray-200">
            {`Let's`} connect
          </button>
          <button className="px-6 py-3 bg-transparent border border-white text-white font-semibold rounded-md shadow-md hover:bg-white hover:text-black">
            Explore
          </button>
        </div>
      </div>
    </div>
  );
};

export default CommonSlider;
