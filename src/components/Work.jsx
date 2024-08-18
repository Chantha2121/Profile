import React from 'react'
import pic1 from '../Img/pro1.png'
import pic2 from '../Img/project2.png'
import pic3 from '../Img/project1.png'
import pic4 from '../Img/pro4.png'
const Work = () => {
  return (
    <div className=' py-6 max-w-[1200px] mx-auto' id='work'>
        <div className=" mx-auto px-4 md:px-8">
            <div className=" mb-4 flex items-center justify-between">
                <div className=" flex flex-col gap-4">
                    <h2 className=' text-2xl lg:text-3xl text-white'>
                        My <span>Project</span>
                    </h2>
                    <p className=' text-gray-500'>
                        These are my lastest projects for assignment at university.
                    </p>
                </div>
            </div>
            <div className=" grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
                <a href="/" className=' group h-48 overflow-hidden rounded-lg shadow-lg md:h-80'>
                    <img src={pic1} alt="" className=' h-full w-full object-cover object-center transition duration-200 group-hover:scale-110'/>
                </a>
                <a href="/" className=' group h-48 overflow-hidden rounded-lg shadow-lg md:col-span-2 md:h-80'>
                    <img src={pic4} alt="" className=' h-full w-full object-cover object-center transition duration-200 group-hover:scale-110'/>
                </a>
                <a href="/" className=' group h-48 overflow-hidden rounded-lg shadow-lg md:col-span-2 md:h-80'>
                    <img src={pic3} alt="" className=' h-full w-full object-cover object-center transition duration-200 group-hover:scale-110'/>
                </a>
                <a href="/" className=' group h-48 overflow-hidden rounded-lg shadow-lg md:h-80'>
                    <img src={pic2} alt="" className=' h-full w-full object-cover object-center transition duration-200 group-hover:scale-110'/>
                </a>
            </div>
        </div>
      
    </div>
  )
}

export default Work
