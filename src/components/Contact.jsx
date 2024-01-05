import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
        <form method='POST' action="https://formspree.io/f/xjvnvpnw" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-blue-600 text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'> Submit the form below or send me  an email - Dlaminisiphi3@gmail.com</p>
            </div>
            <input className='bg-[#ccd6f6] p-2 rounded-3xl' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6] rounded-3xl ' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#ccd6f6] p-2 rounded-lg' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-white border-2 rounded-lg hover:bg-blue-600 hover:border-blue-600 px-4 py-3 my-8 mx-auto flex items-center'>Submit</button>
        </form>
    </div>
  )
}

export default Contact