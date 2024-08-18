import React from 'react'
import mail from '../Img/mail.png'
const Contact = () => {
  return (
    <div className=' flex justify-center my-5 h-full sm:*:h-[60vh] items-center mt-20' id='contact' >
      <div className=" max-w-[1200px] mx-auto" >
        <div className="grid grid-cols-1 md:grid-cols-2">
            <div className=" p-6 mr-2 bg-gray-800 rounded-xl flex flex-col justify-around lg:h-80 lg:w-96">
                <h1 className=' text-4xl sm:text-5xl text-white'>
                    Contact <span>Me</span>
                </h1>
                <p className=' text-normal text-lg font-medium text-gray-400 mt-2'>
                    Les't contact on LinkedIn <br /> or send me an Email
                </p>
                <div className=" flex items-center mt-2 text-gray-400">
                    <img src={mail} className=' w-6 h-4' alt="" />
                    <div className=" ml-4 text-md tracking-wide w-40">
                        <p>Choeurn Chantha</p>
                    </div>
                </div>
            </div>
            <form action="https://getform.io/f/lbjkpgma" method='post' className=' p-6 flex flex-col justify-center max-w[700px]'>
                <div className=" flex flex-col">
                    <input type="name" name='email' placeholder='Full Name' className=' w-100 mt-2 py-3 px-3 rounded-lg bg-gray-800 border border-gray-700 text-white' />
                </div>
                <div className=" flex flex-col mt-2">
                    <input type="email" name='email' placeholder='Email' className=' w-100 mt-2 py-3 px-3 rounded-lg bg-gray-800 border border-gray-700 text-white' />
                </div>
                <div className=" flex flex-col mt-2">
                    <input type="message" name='email' placeholder='Your Message' className=' w-100 mt-2 py-3 px-3 rounded-lg bg-gray-800 border border-gray-700 text-white' />
                </div>
                <button type='submit' className=' bg-primary-color text-white py-3 px-6 rounded-lg mt-5'>
                    Submit
                </button>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
