import React from "react";
import backgroundImage from "../assets/images/header3.jpg";
import Navbar from "./Navbar";
import {motion} from 'framer-motion';

export default function Header() {
  return (
    <div
      id="Header"
      className="relative min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Navbar (and other content) */}
      <Navbar />

      {/* Example content centered */}
      <motion.div 
      initial={{opacity:0, y:100}}
      animate={{opacity:1, y:0}}
      transition={{duration:1.5}}
      whileInView={{opacity:1, y:0}}
      viewport={{once:true}}

      className="container mx-auto py-4 px-6 md:px-20 lg:px-32 text-white relative z-10 text-center w-full">
        <h1 className="text-5xl sm:text-6xl md:text-[82px] inline-block max-w-3xl font-semibold pt-20 text-white">
          Engineering the Future of the Gulf
        </h1>
        <div className="mt-16 space-x-6 text-lg font-medium">
          <a href="#Projects" className="border border-white px-5 py-3 rounded">Projects</a>
          <a href="#Contact" className="bg-blue-500 px-5 py-3 rounded">Contact Us</a>
        </div>
        {/* <p className="text-lg text-gray-300 mt-4">
          Engineering Excellence in the Gulf Region
        </p> */}
      </motion.div>
    </div>
  );
}
