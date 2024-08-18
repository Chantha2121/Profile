import React from 'react'
import img from '../Img/no_back_pic.png'
import { AiFillLinkedin,AiFillGithub,AiFillInstagram, AiFillFacebook } from 'react-icons/ai';
import { TypeAnimation } from 'react-type-animation';
function Hero() {
  return (
      <div className="my-7 sm:my-0 max-w-[1200px] h-[110vh] mx-auto flex flex-col-reverse sm:flex-row justify-center align-center" id='home'>
        <div className=" flex-col my-auto mx-auto">
          <h1 className=' md:text-7xl sm:text-5xl text-4xl font-bold md:py-6 sm:mt-20 mt-6'>
            <TypeAnimation
            sequence={[
              "Mr. Chantha",
              1000,
              "Frontend Dev",
              1000,
              "Backend Dev",
              1000,
            ]}
            wrapper='span'
            speed={50}
            repeat={Infinity}
            />
          </h1>
          <div className="flex justify-center items-center">
            <p className='md:text-2xl sm:w-80 sm:text-1xl text-md font-bold text-[#49dbd4e7] animate-pulse'>Hello. I am IT student.
                Welcome to my web page for detail 
                information for me. and check my projects and
                skills.
            </p>
          </div>
          <div className=" text-5xl flex justify-start gap-8 my-7 text-purple-700">
              <AiFillLinkedin/>
              <AiFillInstagram/>
              <AiFillFacebook/>
              <AiFillGithub/>
            </div>
          <div className=" relative inline-flex group my-3">
            <div className=" absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r
             from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100
              group-hover:-inset-1 group-hover:duration-200 animate-tilt">
              </div>
              <a href="https://drive.google.com/file/d/144b0kmai2w1Vc4X4Zd7MtcE8I8m_dfAL/view?usp=sharing" title='Download CV' role='button'
              className='w-[190px] h-[60px] relative inline-flex items-center justify-center px-8 py-4 text-lg
               font-bold text-white transition-all duration-200 bg-primary-color font-pj rounded-xl
               focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900'>Download CV</a>
          </div>
        </div>
        <div className=" my-auto mt-36 sm:mt-16">
            <img src={img} alt="profile pic" className='w-[300px] sm:w-[500px] mt-8 mx-auto h-auto rounded-md animate-zoom-in-out' />
        </div>
      </div>
  )
}

export default Hero;
