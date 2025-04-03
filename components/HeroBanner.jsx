// components/HeroBanner.jsx
import React from "react";
// import Link from "next/link";

import { urlFor } from "../lib/client";

const HeroBanner = ({ heroBanner }) => {
  return (
    <div className="hero-banner-container relative h-screen flex items-center overflow-hidden">
      <div className="hero-content z-10 px-8 text-center">
        <p className="text-lg md:text-xl font-semibold text-yellow-300 mb-4 animate-fade-in-down">
          {heroBanner.smallText}
        </p>
        <h3 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-slide-in-left">
          {heroBanner.midText}
        </h3>
        <h1 className="text-6xl md:text-9xl font-black text-white uppercase mb-8 animate-scale-up">
          {heroBanner.largeText1}
        </h1>
        
        <div className="max-w-2xl mx-auto animate-fade-in-up">
          <p className="text-lg italic font-medium ">
            {heroBanner.desc}
          </p>
        </div>

        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-8 h-8 border-4 border-yellow-300 rounded-full"></div>
        </div>
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-r from-red-800 to-red-600 opacity-90"></div>
      <div className="absolute inset-0 bg-noise opacity-10"></div>
    </div>
  );
};

export default HeroBanner;
