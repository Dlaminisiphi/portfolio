import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
      {/* Container for content */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        {/* Introduction text */}
        <p className='text-blue-600'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Siphumelele Dlamini</h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>An Aspiring Full-stack Developer </h2>
        {/* Description text */}
        <p className='text-[#8892b0] py-4 max-w-[700px]'>
          A versatile full-stack developer with a strong foundation in web technologies, including JavaScript, HTML, and CSS. I specialize in creating dynamic and responsive web applications, leveraging my proficiency in Flask for robust backend development. Currently, I'm actively learning the React framework with the goal of creating modern and interactive user interfaces.
          {/* Button to view work */}
          <div>
            <Link to="work" smooth={true} duration={500}>
              <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-blue-600'>
                View Work
                <span className='group-hover:rotate-90 duration-300'>
                  <HiArrowNarrowRight className='ml-3' />
                </span>
              </button>
            </Link>
          </div>
        </p>
      </div>
    </div>
  );
};

export default Home;
