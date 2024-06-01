import React from 'react'
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f] '>

        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
          <p className='text-yellow-600'>Hi my name is</p>
          <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Reda Cherkaoui</h1>
          <h2  className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a full stack developer</h2>
          <p className='text-[#8892b0] py-4 max-w-[700px]'>I am a versatile full stack developer proficient in both front-end and back-end
            technologies, with a knack for creating seamless, user-friendly web applications.
            My expertise spans various programming languages, frameworks, and tools, enabling
            me to build robust and scalable solutions.</p>
          <div>
          <Link to='work' smooth={true} duration={500}> 
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-yellow-600 hover:border-yellow-600'>View work 
            <span className='group-hover:rotate-90 duration-300'>
            <HiArrowNarrowRight className='ml-3' />
            </span>
            </button>
            </Link>
          </div>
      </div>
    </div>
  )
}

export default Home