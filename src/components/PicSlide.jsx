import React, { useState } from 'react';

const pictures = [
  '../Img/about.jpg',
  '../Img/about.jpg',
  '../Img/about.jpg'
];

const PicSlide = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextClick = () => {
    setCurrentIndex((currentIndex + 1) % pictures.length);
  };

  return (
    <div className="flex flex-col items-center">
      <img src={pictures[currentIndex]} alt={`Slide ${currentIndex}`} className="mb-4" />
      <button
        onClick={handleNextClick}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
      >
        Next
      </button>
    </div>
  );
};

export default PicSlide;
