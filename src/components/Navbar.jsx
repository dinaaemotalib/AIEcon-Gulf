import React, { useState } from "react";
import logo from "../assets/images/white-logo-removebg.png";
import menu from "../assets/images/menu-bar.png";
import close from "../assets/images/close.png";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="fixed top-0 left-0 w-full z-50">
      <div className="relative max-w-7xl mx-auto flex items-center justify-between p-4 md:px-20 lg:px-32 bg-transparent ">
        {/* Logo */}
        <img src={logo} alt="Logo" className="w-24 cursor-pointer" />

        {/* Navigation Links */}
        <ul className="hidden md:flex gap-7 text-lg font-medium text-white absolute left-1/2 transform -translate-x-1/2">
          <a href="#Header" className="cursor-pointer hover:text-gray-800">
            Home
          </a>
          <a href="#About-Us" className="cursor-pointer hover:text-gray-800">
            About Us
          </a>
          <a href="#Projects" className="cursor-pointer hover:text-gray-800">
            Projects
          </a>
          <a href="#Testimonials" className="cursor-pointer hover:text-gray-800">
            Clients
          </a>
        </ul>

        {/* Contact Us Button */}
        {/* <button className="hidden md:block hover:bg-blue-950 hover:text-white px-8 py-2 rounded-full bg-white text-blue-950 transition">
          Contact Us
        </button> */}

        {/* Menu Icon for Mobile */}
        <img
          src={menu}
          alt="Menu"
          className="md:hidden w-7 h-8 cursor-pointer"
          onClick={toggleMobileMenu}
        />
      </div>
      {/* mobile menu */}
      <div
        className={`md:hidden fixed top-0 right-0 w-3/4 h-full bg-gray-800 opacity-95 transform transition-transform duration-300 ease-in-out
        ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex justify-end p-6">
          <img
            src={close}
            alt="Close"
            className="w-6 h-6 cursor-pointer"
            onClick={toggleMobileMenu}
          />
        </div>
        <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium text-white">
          <a
            href="#Header"
            onClick={toggleMobileMenu}
            className="py-2 px-4 rounded-full hover:bg-gray-700"
          >
            Home
          </a>
          <a
            href="#About-Us"
            onClick={toggleMobileMenu}
            className="py-2 px-4 rounded-full hover:bg-gray-700"
          >
            About Us
          </a>
          <a
            href="#Projects"
            onClick={toggleMobileMenu}
            className="py-2 px-4 rounded-full hover:bg-gray-700"
          >
            Projects
          </a>
          <a
            href="#Clients"
            onClick={toggleMobileMenu}
            className="py-2 px-4 rounded-full hover:bg-gray-700"
          >
            Clients
          </a>
        </ul>
      </div>
    </div>
  );
}
