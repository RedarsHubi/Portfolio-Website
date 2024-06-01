import React from 'react'
import forum from '../assets/projects/forum.jpg'
import cheesy from '../assets/projects/cheesy.jpg'

const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-yellow-600'>Projects</p>
          <p className='py-6'>These are some of my recent projects: </p>
        </div>

        <div className='grid sm:grid-col-2 md:grid-cols-3 gap-4'>

          <div 
          style={{backgroundImage: `url(${forum})`}}
          className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

            {/* Hover effects */}
            <div className='opacity-0 group-hover:opacity-100  '>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Django Vanilla Js application
              </span>
              <div className='pt-8 text-center'>
                <a href="https://theforum.up.railway.app/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                </a>
                <a href="https://github.com/RedarsHubi/TheForum">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                </a>
              </div>
            </div>
          </div>
          <div 
          style={{backgroundImage: `url(${cheesy})`}}
          className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

            {/* Hover effects */}
            <div className='opacity-0 group-hover:opacity-100 justify-center '>
              <span className='text-2xl font-bold text-white tracking-wider text-justify'>
                Python Vanilla Js application
              </span>
              <div className='pt-8 text-center'>
                <a href="https://cheesy-life.onrender.com/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                </a>
                <a href="https://github.com/MO1-dot-618/cheesy-life">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
      
    </div>
  )
}

export default Work