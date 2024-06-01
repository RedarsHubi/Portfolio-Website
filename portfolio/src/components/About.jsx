import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-yellow-600'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Welcome to my humble abode, please take a look!</p>
            </div>
            <div>
              <p>I'm a passionate learner with a strong dedication to software development.
              I thrive on challenging myself, continuously seeking opportunities to grow and improve.
              My qualities include problem-solving, creativity, and a commitment to excellence in
              every project I undertake.</p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;