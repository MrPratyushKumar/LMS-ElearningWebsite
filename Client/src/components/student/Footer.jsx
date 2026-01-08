import React from "react";
import { assets } from "../../assets/assets";

function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-gray-300 mt-16">
      
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-24 py-12
                      grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Column 1: Logo & About */}
        <div className="space-y-4">
          <img
            src={assets.logo_dark}
            alt="TechStack Logo"
            className="w-36"
          />
          <p className="text-sm leading-relaxed text-gray-400">
            Learn industry-ready skills with expert-led courses and
            hands-on projects. Grow your career with confidence.
          </p>
        </div>

        {/* Column 2: Company Links */}
        <div>
          <h2 className="text-white font-semibold text-lg mb-4">
            Company
          </h2>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white transition">Home</a></li>
            <li><a href="#" className="hover:text-white transition">About Us</a></li>
            <li><a href="#" className="hover:text-white transition">Contact Us</a></li>
            <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Column 3: Newsletter */}
        <div className="space-y-4">
          <h2 className="text-white font-semibold text-lg">
            Subscribe to our Newsletter
          </h2>
          <p className="text-sm text-gray-400">
            Get the latest updates, articles, and learning resources
            delivered straight to your inbox.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-md bg-gray-800 text-sm
                         text-gray-200 placeholder-gray-500
                         focus:outline-none focus:ring-2
                         focus:ring-blue-600"
            />
            <button
              className="px-5 py-2 rounded-md bg-blue-600 text-white
                         text-sm font-semibold hover:bg-blue-700
                         transition duration-300">
              Subscribe
            </button>
          </div>
        </div>

      </div>

      {/* Divider */}
      <div className="border-t border-gray-800"></div>

      {/* Copyright */}
      <div className="text-center py-6 text-sm text-gray-500">
        © 2026 TechStack. All Rights Reserved.
      </div>

    </footer>
  );
}

export default Footer;
