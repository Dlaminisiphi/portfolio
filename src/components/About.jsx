import React from 'react';

// About functional component
const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <div className='sm:text-right text-4xl font-bold'>
            <p className='border-b-4 border-blue-600 inline-block'>
              About
            </p>
          </div>
          <div>
          </div>
        </div>

        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>
                Hi, I'm Siphumelele Dlamini. Please take a look around.
              </p>
            </div>
            <div>
            <p>
               Driven by a passion for crafting exceptional software that positively impacts lives, my expertise lies in developing tailored solutions for clients.
               I thrive on transforming ideas into functional and user-friendly applications, ensuring a seamless digital experience for every user.
            </p>
  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;
