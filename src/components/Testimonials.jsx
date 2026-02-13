// import React from 'react'
// import { testimonialsData } from '../assets/data.js';
// import { motion } from 'framer-motion';
  

// export default function Testimonials() {
//   return (
//     <motion.div
//       initial={{opacity:0, x:100}}
//       animate={{opacity:1, y:0}}
//       transition={{duration:1}}
//       whileInView={{opacity:1, x:0}}
//       viewport={{once:true}}
//       className='container mx-auto py-10 lg:px-20 w-full overflow-hidden' id='Testimonials'>
//         <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>Client <span className='underline underline-offset-4 decoration-1 under font-light'>Testimonials</span></h1>
//         <p className='text-center text-gray-500 mb-12 max-w-80 mx-auto'>What our clients say about us.</p>

//         <div className='flex flex-wrap justify-center gap-8'>
//             {/* Testimonials content will go here */}
//             {testimonialsData.map((testimonial) => (
//                 <div key={testimonial.id} className='max-w-[340px]  rounded shadow-lg px-8 py-12 text-center' >
//                     <img src={testimonial.logo} alt={testimonial.name} className='h-12 rounded-full mx-auto mb-4' />

//                         <h2 className='text-xl text-gray-700 font-medium'>{testimonial.name}</h2>
//                         <p className='text-sm text-gray-500 mb-4'>{testimonial.position}</p>
//                         <p className='text-gray-600'>{testimonial.testimonial}</p>
//                     </div>
                
//             ))}

//         </div>
//     </motion.div>
//   )
// }
