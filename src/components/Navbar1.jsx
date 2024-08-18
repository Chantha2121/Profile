import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import logo from '../Img/logo.png'

const Navbar1 = () => {
  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }

  const handleLinkClick = () => {
    setNav(false)
  }

  return (
    <div className="z-20 fixed w-full top-0">
      <div className="z-10 md:w-5/5 flex justify-between items-center max-w-[1240px] mx-auto h-20">
        <div className='flex'>
          <img src={logo} style={{ width: '40px', height: '42px', borderRadius: '5px' }} className='mt-1 ml-0' alt="" />
          <h1 className='w-full text-3xl font-bold primary-color ml-2 mt-2'>Chantha coding</h1>
        </div>
        <div className='hidden lg:flex bg-[#2b1a5d] text-[#20FFD0] h-16 text-lg rounded-xl mt-3:'>
          <ul className='hidden md:flex items-center'>
            <li className='ml-12 mx-auto p-2 hover:text-blue-700'><a href="#home">Home</a></li>
            <li className='mx-5 p-2 hover:text-blue-700'><a href="#about">About</a></li>
            <li className='mx-5 p-2 hover:text-blue-700'><a href="#work">Projects</a></li>
            <li className='mx-5 p-2 hover:text-blue-700'><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div onClick={handleNav} className="block md:hidden text-red-600 w-10">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        <ul className={nav ? 'z-10 bg-black text-gray-200 fixed h-full left-0 top-0 w-[70%] border-r border-r-gray-900 ease-in-out duration-200' : 'fixed left-[100%]'}>
          <div className='flex'>
            <img src={logo} style={{ width: '40px', height: '38px', borderRadius: '5px' }} className='m-4' alt="" />
            <h1 className='text-xl w-full font-bold primary-color m-4'>Chantha coding</h1>
          </div>
          <li className='mx-5 mt-5 p-2 text-xl hover:text-[#af38ff]'><a href="#home" onClick={handleLinkClick}>Home</a></li>
          <li className='mx-5 mt-2 p-2 text-xl hover:text-[#af38ff]'><a href="#about" onClick={handleLinkClick}>About</a></li>
          <li className='mx-5 mt-2 p-2 text-xl hover:text-[#af38ff]'><a href="#work" onClick={handleLinkClick}>Projects</a></li>
          <li className='mx-5 mt-2 p-2 text-xl hover:text-[#af38ff]'><a href="#contact" onClick={handleLinkClick}>Contact</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar1
