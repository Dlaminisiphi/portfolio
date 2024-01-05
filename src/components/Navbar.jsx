import React, { useState } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';
import {Link} from 'react-scroll'
import Resume from '../assets/resume.pdf';

// Navbar functional component
const Navbar = () => {
  // State variable to manage the visibility of the mobile menu
  const [nav, setNav] = useState(false);

  // Function to toggle the mobile menu visibility
  const handleClick = () => setNav(!nav);

  // JSX structure for the Navbar component
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
      {/* Desktop menu */}
      <div>
        <ul className='hidden md:flex'>
          <li >
           <Link to="home" smooth={true} duration={500}>
            Home
           </Link>
          </li>
          <li>
           <Link to="about" smooth={true} duration={500}>
            About
           </Link>
          </li>
          <li>
           <Link to="skills" smooth={true} duration={500}>
            Skills
           </Link>
          </li>
          <li>
           <Link to="work" smooth={true} duration={500}>
            Work
           </Link>
          </li>
          <li>
           <Link to="contact" smooth={true} duration={500}>
            Contact
           </Link>
          </li> 
        </ul>
      </div>

      {/* Hamburger icon for mobile menu */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {/* Toggle between FaBars and FaTimes based on the mobile menu state */}
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
      <li className='py-6 text-4xl'>
           <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
           </Link>
          </li>
          <li className='py-6 text-4xl'>
           <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
           </Link>
          </li>
          <li className='py-6 text-4xl'>
           <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Skills
           </Link>
          </li>
          <li className='py-6 text-4xl'>
           <Link onClick={handleClick} to="work" smooth={true} duration={500}>
            Work
           </Link>
          </li>
          <li className='py-6 text-4xl'>
           <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
           </Link>
          </li> 
      </ul>

      {/* Social icons (currently hidden, placeholder for future implementation) */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          {/* LinkedIn */}
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a className='flex justify-between items-center w-full text-gray-300' href='https://www.linkedin.com/in/siphumelele-dlamini-294b8022a'>
              Linkedin<FaLinkedin size={30}/>
            </a>
          </li>

          {/* GitHub */}
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a className='flex justify-between items-center w-full text-gray-300' href='https://github.com/Dlaminisiphi'>
              GitHub<FaGithub size={30}/>
            </a>
          </li>


          {/* Resume */}
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
            <a className='flex justify-between items-center w-full text-gray-300' href={Resume} target='_blank'>
              Resume<BsFillPersonLinesFill size={30}/>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
