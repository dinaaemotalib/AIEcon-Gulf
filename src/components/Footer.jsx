import React from 'react'
import logo from '../assets/images/white-logo-removebg.png';

export default function Footer() {
  return (
    <div className='pt-10 px-4 md:px-20 lg:px-32 bg-gray-900 w-full overflow-hidden' id='Footer'>
        <div className='container mx-auto flex flex-col md:flex-row justify-between items-start'>
            <div className='w-full md:w-1/3 mb-8 md:mb-0 '>
                <img className='w-24' src={logo} alt="Logo" />
                <p className='text-gray-400 mt-4'>AIECon excels in dam design and global marine engineering, offering services in utility design, groundwater studies, and using BIM and GIS for effective project management.</p>
            </div>

            <div className='w-full md:w-1/5 mb-8 md:mb-0'>
                <h3 className='text-white text-lg font-bold mb-4'>AIEcon</h3>
                <ul className='flex flex-col gap-2 text-gray-400 space-y-2'>
                    <li><a href='#Header' className='hover:text-white'>Home</a></li>
                    <li><a href='#About-Us' className='hover:text-white'>About Us</a></li>
                    <li><a href='#Contact-Us' className='hover:text-white'>Contact Us</a></li>
                    <li><a href='#' className='hover:text-white'>Privacy Policy</a></li>
                </ul>
            </div>

            <div className='w-full md:w-1/3'>
                <h3 className='text-white text-lg font-bold mb-4'>Subscribe to our newsletter</h3>
                <p className='text-gray-400 mb-4 max-w-80'>Stay updated with the latest news, articles, and resources, sent to your inbox weekly.</p>
                <div className='flex gap-2'>
                     <input type="email" placeholder="Enter your email" className='p-2 rounded text-gray-400 bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full md:w-auto' />
                    <button className='bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded '>Subscribe</button>
          
                </div>
                 </div>
        </div>

        <div className='border-t border-gray-700 py-4 mt-10 text-center text-gray-500'>
            Copyright © 2025 AIEcon Gulf. All rights reserved.
        </div>
    </div>
  )
}
