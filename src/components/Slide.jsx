import React from 'react'
import Slidepic from './Slidepic'
import image1 from '../Img/font.png';
import image2 from '../Img/back.png';
import image3 from '../Img/db.png';

const slide_pic = [
    image1,
    image2,
    image3
];
const Slide = () => {
  return (
    <main className='App'>
        <div className=" max-w-md">
          <Slidepic>
            {slide_pic.map((s)=>(
              <img src={s} alt="" className=' mx-16'/>
            ))}
          </Slidepic>
        </div>
    </main>
  )
}

export default Slide
