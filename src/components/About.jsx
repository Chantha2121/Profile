import React from 'react'
import about from '../Img/about.jpg';
import image1 from '../Img/font.png';
import image2 from '../Img/back.png';
import image3 from '../Img/db.png';
const About = () => {
  return (
    <div className=' py-10 bg-[#232325] text-white h-auto' id='about'>
        <div className=" flex lg:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
            <div>
                <div className=' w-[400px] h-full'>
                <img src={about} alt="" 
                className=' object-cover rounded-xl h-[300px] filter'/>
                </div>
            </div>
            <div className=' p-2'>
                <div className=" text-gray-300 my-3">
                    <h3 className=' text-4xl font-semibold mb-5 text-center  lg:text-left lg:mx-8'>About<span className=' primary-text'> Me</span></h3>
                    <p className=' text-justify leading-7 w-11/12 mx-auto md:text-lg font-light'>Hello all dear. My name is Choeurn Chantha. I am 18 years old. and I from Kompong Spea province. The current I am study at Royal University of Phnom Penh. My major is Information Technology Engineering in the second years. Also the future I want to be a Software Engineering.</p>
                </div>
                <div className="flex">
                    <div className='rounded-xl w-20 bg-[#333333] mx-5 mt-6 flex items-center gap-7'>
                    <h3 className=' md:text-4xl text-2xl font-semibold text-white mx-2'>11
                        <span className=' primary-text'>+</span>
                        <p><span className=' md:text-base text-xs mx-2'> Project</span></p>
                    </h3>
                    </div>
                    <div className='rounded-xl w-30 bg-[#333333] mx-3 xl:mx-14 mt-6 flex items-center gap-7'>
                    <h3 className=' md:text-4xl text-2xl font-semibold text-white mx-2' style={{textAlign:'center'}}>3
                        <span className=' primary-text'>+</span>
                        <p><span className=' md:text-base text-xs mx-2'> Experience</span></p>
                    </h3>
                    </div>
                    <div className='rounded-xl w-30 bg-[#333333] mx-4 mt-6 flex items-center gap-7'>
                    <h3 className=' md:text-4xl text-2xl font-semibold text-white mx-2'>8
                        <span className=' primary-text'>+</span>
                        <p><span className=' md:text-base text-xs mx-2'> My works</span></p>
                    </h3>
                    </div>
                </div>
            </div>
        </div>
        <h3 className=' md:text-4xl text-2xl primary-color mx-2 font-bold mt-8 mb-6' style={{textAlign:'center'}}>My Skills</h3>
        <div className='flex lg:flex-row flex-col-reverse items-center gap-12 px-10 align-middle lg:mx-30 xl:mx-56'>
        <div className=''>
                <div className=' mx-2 lg:w-[250px] md:w-[450px] h-full'>
                <img src={image1} alt="" 
                className=' object-cover rounded-xl sm:h-[400px] w-[300px] lg:w-[230px] lg:h-[330px] filter md:w-[570px] md:h-[600px] animate-zoom-in-out'/>
                </div>
            </div>
            <div>
                <div className=' lg:w-[250px] md:w-[450px] h-full'>
                <img src={image2} alt="" 
                className=' object-cover rounded-xl sm:h-[400px] w-[300px] lg:w-[230px] lg:h-[330px] filter md:w-[570px] md:h-[600px] animate-zoom-in-out'/>
                </div>
            </div>
            <div>
                <div className=' lg:w-[250px] md:w-[450px] h-full'>
                <img src={image3} alt="" 
                className=' object-cover rounded-xl sm:h-[400px] w-[300px] lg:w-[230px] lg:h-[330px] filter md:w-[570px] md:h-[600px] animate-zoom-in-out'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About
