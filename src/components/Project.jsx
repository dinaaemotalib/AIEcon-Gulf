import React, { useState, useEffect } from 'react'
import { projectsData } from '../assets/data'

export default function Project() {
 const [currentIndex, setCurrentIndex] = useState(0)
  const [visibleProjects, setVisibleProjects] = useState(4)

  // detect screen size and adjust visibleProjects dynamically
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleProjects(1) // for small screens
      } else {
        setVisibleProjects(4) // for medium and large screens
      }
    }

    handleResize() // run once on mount
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const handleNext = () => {
    if (currentIndex < projectsData.length - visibleProjects) {
      setCurrentIndex(currentIndex + 1)
    }
  }

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    }
  }
  return (
    <div className='container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden' id='Projects'>
        <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>Projects <span className='text-primary underline underline-offset-4 decoration-1 under font-light'>Completed</span></h1>
        <p className='text-center text-gray-500 mb-8 max-w-80 mx-auto'>We have successfully completed numerous projects across various industries, delivering innovative solutions that drive results.</p>

        {/* slider buttons */}
        <div className='flex justify-end mb-8 items-center gap-4'>
             <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className={`p-3 rounded-full transition ${currentIndex === 0 ? 'bg-gray-100 cursor-not-allowed' : 'bg-gray-200 hover:bg-gray-300'}`}
          aria-label='Previous Project'
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={handleNext}
          disabled={currentIndex >= projectsData.length - visibleProjects}
          className={`p-3 rounded-full transition ${currentIndex >= projectsData.length - visibleProjects ? 'bg-gray-100 cursor-not-allowed' : 'bg-gray-200 hover:bg-gray-300'}`}
          aria-label='Next Project'
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
        </div>

        {/* Project Slider */}
        <div className='overflow-hidden'>
            <div  className='flex gap-8 transition-transform duration-500 ease-in-out'
          style={{
            transform: `translateX(-${currentIndex * (100 / visibleProjects)}%)`,
          }}>
                {/* Project Card */}          
                {projectsData.map((project) => (
                    <div key={project.id}  className={`relative flex-shrink-0 w-full ${
                visibleProjects === 1 ? 'sm:w-full' : 'sm:w-1/4'
              }`}>
                        <img src={project.image} alt={project.title} className="w-full h-80 mb-14 object-cover rounded-lg"/>    
                        <div className='absolute bottom-5 left-0 right-0 flex justify-center '>
                            <div className='inline-block bg-white w-3/4 px-4 py-2 shadow-md'>
                            <h2 className='text-xl font-semibold text-gray-800'>{project.title}</h2>
                            <p className='text-gray-500 text-sm'>{project.Location} <span>|</span> {project.Client}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}
