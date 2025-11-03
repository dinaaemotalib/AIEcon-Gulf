import React from 'react'
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';

export default function Contact() {
     const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "fcc0bbc7-dea3-4fd1-bc1b-70b80c48ff27");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
     toast.success("Form sent successfully!");
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error(data.message);
      setResult("");
    }
  };
  return (

    <motion.div
        initial={{opacity:0, x:-200}}
      animate={{opacity:1, y:0}}
      transition={{duration:1}}
      whileInView={{opacity:1, x:0}}
      viewport={{once:true}}
    className='text-center p-6 py-20 lg:px-32 w-full overflow-hidden' id='Contact'>
         <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>Contact <span className='underline underline-offset-4 decoration-1 under font-light'>Us</span></h1>
        <p className='text-center text-gray-500 mb-12 max-w-80 mx-auto'>Get in touch with us for any inquiries or collaboration opportunities.</p>

        <form onSubmit={onSubmit} className='max-w-2xl mx-auto text-gray-600 pt-8'>
            <div className='flex flex-wrap'>
                <div className='text-left w-full md:w-1/2'>
                    Your Name
                    <input required name='Name' type="text" placeholder='Enter your name' className='w-full border border-gray-300 rounded py-3 px-4 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500'/>
             </div>
                <div className='text-left w-full md:w-1/2 md:pl-4'>
                    Your Email
                    <input required name='Email' type="email" placeholder='Enter your email' className='w-full border border-gray-300 rounded py-3 px-4 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500'/>
             </div>

            </div>
            <div className='my-6 text-left'>
                Message
                <textarea required name='Message' rows="5" placeholder='Enter your message' className='w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500'></textarea>
            </div>

            
            <div className='text-center mt-6'>
                <button type='submit' className='bg-blue-600 text-white py-2 px-12 mb-10 rounded hover:bg-blue-700 transition duration-300'>{result? result : "Send Message"}</button>
            </div>
        </form>

    </motion.div>
  )
}
