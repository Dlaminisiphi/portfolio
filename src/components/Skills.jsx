import React from 'react'
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/js.png';
import ReactImg from '../assets/react.png';
import FireBase from '../assets/firebase.png';
import GitHub from '../assets/GitHub.png';
import Python from '../assets/python.png';
import Flask from '../assets/flask.png';

const Skills = () => {
    return (
      <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>

        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            {/* Section title and description */}
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-blue-600'>
                    Skills
                </p>
                <p className='py-4'>
                    These are the technologies I've worked with
                </p>
            </div>


            {/* Grid for displaying technology icons and names */}
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
                    <p className='my-4'>

                        HTML

                    </p>
                </div>

                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={CSS} alt="Css icon" />
                    <p className='my-4'>

                        CSS

                    </p>
                </div>

                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={JavaScript} alt="Js icon" />
                    <p className='my-4'>

                      JAVASCRIPT

                    </p>
                </div>

                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={ReactImg} alt="React icon" />
                    <p className='my-4'>

                        REACT

                    </p>
                </div>

                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={GitHub} alt="Github icon" />
                    <p className='my-4'>

                        GITHUB

                    </p>
                </div>

                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Python} alt="Python icon" />
                    <p className='my-4'>
                        
                        Python
                    
                    </p>
                </div>

                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Flask} alt="Flask icon" />
                    <p className='my-4'>
                        
                        Flask
                        
                    </p>
                </div>
                
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={FireBase} alt="Firebase icon" />
                    <p className='my-4'>

                        FIREBASE
                        
                    </p>
                </div>
            </div>
        </div>
      </div>
    );
  };
  
  export default Skills;