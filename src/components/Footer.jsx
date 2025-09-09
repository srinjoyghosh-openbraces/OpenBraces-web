import React from "react";
import assets from "../assets/assets";

const Footer = ({ theme }) => {
  return (
    <div
      className="bg-gray-300 dark:bg-slate-900 pt-10 sm:pt-10 mt-20 sm:mt-40 px-4
    sm:px-10 lg:px-24 xl:px-40"
    >
      {/* footer top */}
      <div className="flex justify-between lg:items-center max-lg:flex-col gap-10">
        {/* Left side (Logo + Menu) */}
        <div className="space-y-5 text-sm text-black dark:text-gray-400">
          <img
            src={theme === "dark" ? assets.logo1 : assets.logo1}
            className="w-44 sm:w-48"
            alt="Logo"
          />
          <p className="max-w-md">
            Smart strategies for a smarter digital world.
          </p>

          <ul className="flex gap-8">
            <li>
              <a className="hover:text-blue-600" href="#hero">
                Home
              </a>
            </li>
            <li>
              <a className="hover:text-blue-600" href="#services">
                Services
              </a>
            </li>
            <li>
              <a className="hover:text-blue-600" href="#our-work">
                Our Works
              </a>
            </li>
            <li>
              <a className="hover:text-blue-600" href="#contact-us">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Right side (Address + Contact Info) */}
        <div className="text-gray-600 dark:text-gray-400 space-y-4">
          <h3 className="font-semibold text-lg">Contact Us:</h3>
          <p className="max-w-xs">
            <span className="font-medium">Address:</span>
            <br />
            OpenBraces Ventures
            <br />
            Kolkata, West Bengal,India - 700151
          </p>
          <p>
            <span className="font-medium">Phone:</span> +91 9681 446 840
          </p>
          <p>
            <span className="font-medium">Email:</span> connect@openbraces.in
          </p>
        </div>
      </div>
      <hr className="border-black dark:border-gray-600 my-6" />
      <div className="pb-6 text-sm text-gray-500 flex justify-center sm:justify-between gap-4 flex-wrap">
        <p className="text-gray-500 dark:text-white">
          © Copyright OpenBraces Ventures Private Limited. All Rights Reserved.
        </p>
        <div className="flex gap-4 py-3">
          <img src={assets.linkedin_icon} alt="" />
          <img src={assets.facebook_icon} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
