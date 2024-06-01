import React, { useState } from 'react';
import Logo from '../assets/logo.png';
import { FaTimes, FaBars, FaGithub, FaLinkedin, FaFacebook,  } from "react-icons/fa";
import { HiOutlineMail } from 'react-icons/hi';
import { BsPersonLinesFill } from "react-icons/bs";
import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [showCopiedMessage, setShowCopiedMessage] = useState(false);

  const handleClick = () => setNav(!nav);
  
  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText('redamasters@gmail.com');
    setShowCopiedMessage(true);
    setTimeout(() => {
      setShowCopiedMessage(false);
    }, 3000);
  };

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
      <div>
          <img src={Logo} alt="Logo image" style={{width: '100px'}}/>
      </div>
      {/* menu */}
        <ul className='hidden md:flex'>
          <li>
          <Link to='home' smooth={true} duration={500}>
            Home
          </Link>
          </li>
          <li>
          <Link to='about' smooth={true} duration={500}>
            About
          </Link>
          </li>
          <li>
          <Link to='skills' smooth={true} duration={500}>
            Skills
          </Link>
          </li>
          <li>
          <Link to='work' smooth={true} duration={500}>
            Work
          </Link>
          </li>
          <li>
          <Link to='contact' smooth={true} duration={500}>
            Contact
          </Link>
          </li>
        </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

         {/* Mobile menu */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
        }
      >
           <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='work' smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
        </ul>        

        {/* Social icons */}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
      <ul>
        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
          <a className='flex justify-between items-center w-full text-gray-300'
           href="https://www.linkedin.com/in/reda-cherkaoui-644a97154/">
            Linkedin <FaLinkedin size={30} />
          </a>
        </li>
        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
          <a className='flex justify-between items-center w-full text-gray-300'
           href="https://github.com/RedarsHubi/TheForum">
            Github <FaGithub size={30} />
          </a>
        </li>
        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0] cursor-pointer' onClick={copyEmailToClipboard}>
            <div className='flex justify-between items-center w-full text-gray-300'>
              <span className='mr-2'>Email</span>
              <HiOutlineMail size={30} />
            </div>
          </li>
        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
          <a className='flex justify-between items-center w-full text-gray-300'
           href="https://drive.google.com/file/d/1nkG2Wl3lJXiXNXKf0zj7GG_5TEJriHgE/view?usp=sharing">
            Resume <BsPersonLinesFill size={30} />
          </a>
        </li>
      </ul>
      </div>
      {showCopiedMessage && (
        <div className='fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-[#0a192f] text-white py-2 px-4 rounded-md border border-white'>
          <span className='inline-block'>Email copied to clipboard!</span>
        </div>
      )}
    </div>
  )
}

export default Navbar