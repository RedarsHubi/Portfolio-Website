import React from 'react'
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import C from '../assets/c.png';
import MySql from '../assets/mysql.png';
import Django from '../assets/django.png';
import Python from '../assets/python.png';

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
          <p className='text-4xl font-bold inline border-b-4 border-yellow-600'>Skills</p>
          <p className='py-4'>Here are the main technologies I've worked with:</p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
          <div className='shadow-sm shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={C} alt="C icon" />
            <p className='my-4'>C</p>
          </div>
          <div className='shadow-sm shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Django} alt="Django icon" />
            <p className='my-4'>Django</p>
          </div>
          <div className='shadow-sm shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Python} alt="Python icon" />
            <p className='my-4'>Python</p>
          </div>
          <div className='shadow-sm shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={MySql} alt="MySql icon" />
            <p className='my-4'>MySql</p>
          </div>
          <div className='shadow-sm shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
            <p className='my-4'>HTML</p>
          </div>
          <div className='shadow-sm shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={CSS} alt="CSS icon" />
            <p className='my-4'>CSS</p>
          </div>
          <div className='shadow-sm shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={JavaScript} alt="Javascript icon" />
            <p className='my-4'>JavaScript</p>
          </div>
          <div className='shadow-sm shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={ReactImg} alt="React icon" />
            <p className='my-4'>React</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills