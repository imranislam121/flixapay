'use client';

import React from 'react';
import { FaWindows, FaApple, FaLinux } from 'react-icons/fa';

const DownloadSection = () => {
  return (
    <section className="bg-white min-h-screen flex flex-col items-center justify-center py-20 px-4 text-white">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-3xl text-pink-500 md:text-5xl font-bold mb-3">Download Flixapay</h2>
        <p className="text-gray-400 text-lg">Available for all major platforms</p>
      </div>

      {/* Mobile Stores */}
      <div className="flex flex-wrap justify-center gap-6 mb-12">
        {/* Google Play */}
        <a
          href="https://play.google.com/store/apps/details?id=example"
          target="_blank"
          rel="noopener noreferrer"
          className="w-[170px] h-[60px] flex items-center justify-center transition-transform duration-300 hover:scale-105"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
            alt="Get it on Google Play"
            className="w-full h-full object-contain"
          />
        </a>

        {/* App Store */}
        <a
          href="https://apps.apple.com/app/id000000000"
          target="_blank"
          rel="noopener noreferrer"
          className="w-[170px] h-[60px] flex items-center justify-center transition-transform duration-300 hover:scale-105"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/91/Download_on_the_App_Store_RGB_blk.svg"
            alt="Download on the App Store"
            className="w-full h-full object-contain"
          />
        </a>
      </div>


      {/* Desktop Platforms */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl w-full">
        {/* Windows */}
        <a
          href="https://example.com/windows-app.exe"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-700 hover:bg-blue-800 px-6 py-4 rounded-xl flex items-center space-x-3 shadow-md transition transform hover:scale-105"
        >
          <FaWindows size={20} />
          <span className="font-medium">Download for Windows</span>
        </a>

        {/* macOS */}
        <a
          href="https://example.com/mac-app.dmg"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-800 hover:bg-gray-900 px-6 py-4 rounded-xl flex items-center space-x-3 shadow-md transition transform hover:scale-105"
        >
          <FaApple size={20} />
          <span className="font-medium">Download for macOS</span>
        </a>

        {/* Linux */}
        <a
          href="https://example.com/linux-app.deb"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-700 hover:bg-green-800 px-6 py-4 rounded-xl flex items-center space-x-3 shadow-md transition transform hover:scale-105"
        >
          <FaLinux size={20} />
          <span className="font-medium">Download for Linux</span>
        </a>
      </div>
    </section>
  );
};

export default DownloadSection;
