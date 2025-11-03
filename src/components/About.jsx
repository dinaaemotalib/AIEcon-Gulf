import React from 'react'
import about from "../assets/images/about.png";
import {motion} from 'framer-motion';


export default function About() {
  return (
    <motion.div 
      initial={{opacity:0, x:200}}
      animate={{opacity:1, y:0}}
      transition={{duration:1}}
      whileInView={{opacity:1, x:0}}
      viewport={{once:true}}
    className='flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden' id='About-Us'>
      <h1 className='text-4xl font-bold mb-4'>About <span className='text-primary underline underline-offset-4 decoration-1 under font-light'>Us</span></h1>
      <p className='text-gray-600 max-w-80 mb-8 text-lg text-center'>
        Passionate about making a difference in the world through technology and innovation.
      </p>
        {/* <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            <div className='bg-white rounded-lg shadow-md p-6'>
                <h2 className='text-2xl font-semibold mb-4'>Our Mission</h2>
                <p className='text-gray-600'>
                    To empower businesses with cutting-edge AI solutions that drive growth, efficiency, and innovation.
                </p>
            </div>
            <div className='bg-white rounded-lg shadow-md p-6'>
                <h2 className='text-2xl font-semibold mb-4'>Our Vision</h2>
                <p className='text-gray-600'>
                    To be the leading provider of AI-powered solutions for businesses worldwide, shaping the future of technology.
                </p>
            </div>
        </div>
        <div className='flex flex-col items-center justify-center'>
            <img src="/about-image.png" alt="About Us" className='mt-8 w-full h-auto max-w-md rounded-lg shadow-lg'/>
        </div> */}

        <div className='flex flex-col md:flex-row items-center md:items-start md:gap-20 justify-center'>
            <img src={about} alt="About Us" className='sm:w-1/2 max-w-lg w-full'/>
            <div className='flex flex-col items-center md:items-start mt-10 md:mt-0 text-gray-600 max-w-xl'>
                <div className='grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28'>
                    <div>
                        <p className='text-4xl font-medium text-gray-800'>
                            10+
                        </p>
                        <p >Years of Experience</p>
                    </div>
                    <div>
                        <p className='text-4xl font-medium text-gray-800'>
                            12+
                        </p>
                        <p >Projects Completed</p>
                    </div>
                    <div>
                        <p className='text-4xl font-medium text-gray-800'>
                            20+
                        </p>
                        <p >Mn. Sq. Ft. Delivered</p>
                    </div>
                    <div>
                        <p className='text-4xl font-medium text-gray-800 '>
                            25+
                        </p>
                        <p>Ongoing Projects</p>
                    </div>
                </div>

                <p className='my-10 max-w-lg'>With a team of multidisciplinary experts, AIEcon Gulf provides end-to-end engineering solutions — from studies and design to supervision and project management.</p>
                <button className='bg-blue-600 text-white py-2 px-4 rounded-md'>Learn More</button>
            </div>
        </div>

    </motion.div>
  )
}
