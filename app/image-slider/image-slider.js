'use client'

import React, {useEffect, useState} from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export const ImageSlider = ({images}) =>{
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      handleNextImage();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handlePreviousImage = () => {
    setActiveImageIndex((prevIndex) => prevIndex === 0 ? images.length - 1 : prevIndex - 1);
  }

  const handleNextImage = () => {
    // setActiveImageIndex((prevIndex) => (prevIndex + 1) % images.length);

    setActiveImageIndex((prevIndex) => prevIndex === images.length - 1 ? 0 : prevIndex + 1);

  }

  return (
    <div className='flex justify-center m-2 items-center'>
      <ArrowBackIosIcon className="cursor-pointer w-[30px]" onClick={handlePreviousImage}/>
      <img className="w-[1200px] h-[500px]" src={images[activeImageIndex]} alt='Slider image'/>
      <ArrowForwardIosIcon className="cursor-pointer" onClick={handleNextImage} />
    </div>
  )
}