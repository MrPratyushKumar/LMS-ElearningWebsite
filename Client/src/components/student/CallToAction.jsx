import React from "react";
import { assets } from "../../assets/assets";

function CallToAction() {
  return (
    <section className="w-full bg-white py-16 px-6 sm:px-10 lg:px-24">
      
      <div className="max-w-5xl mx-auto text-center space-y-6">
        
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
          Learn Anything, Anytime, Anywhere
        </h1>

        {/* Description */}
        <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
          Upgrade your skills with industry-ready courses, expert guidance,
          and flexible learning designed to help you grow faster.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4">
          
          {/* Primary Button */}
          <button className="px-8 py-3 text-white bg-blue-600 rounded-lg font-semibold
                             hover:bg-blue-700 transition duration-300">
            Get Started
          </button>

          {/* Secondary Button */}
          <button className="flex items-center gap-2 px-8 py-3 text-blue-600 border
                             border-blue-600 rounded-lg font-semibold
                             hover:bg-blue-50 transition duration-300">
            Learn More
            <img
              src={assets.arrow_icon}
              alt="arrow icon"
              className="w-4 h-4"
            />
          </button>

        </div>

      </div>
    </section>
  );
}

export default CallToAction;
