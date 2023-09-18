"use client"
import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Image from "next/image";
export default function Categories() {
  
  const [slidesToShow,setSlidesToShow] = useState(4);
  const [slidesToScroll,setSlidesToScroll] = useState(1);

  useEffect(() => {
    const updateWindowDimensions = () => {
      setSlidesToShow(window.innerWidth < 768 ? 4 : 5)
       setSlidesToScroll(window.innerWidth < 768 ? 1 : 1)
      
      // Use the slidesToShow and slidesToScroll values as needed
      // (e.g., update state or any other logic)
    };

    // Call the function initially
    updateWindowDimensions();

    // Attach the function to the "resize" event to update on window size changes
    window.addEventListener('resize', updateWindowDimensions);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', updateWindowDimensions);
    };
  }, []);
  const settings = {
    dots: true,
  
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: slidesToScroll
  };
  return (
    <div>
      
      <div className=" indent-1 max-sm:w-11/12 ">
      
      <h1 className="uppercase text-zinc-700
       mt-12 ml-3	sm:mt-16 sm:ml-7 
       sm:text-3xl text-xl mb-10 tracking-widest  font-bold ">
      RAKSHABANNDHAN GIFTS THIS WAY
      </h1>

      <Slider   className="max-sm:ml-3"
      {...settings} autoplay={true}
      >
        {/* <Image  objectFit="contain" src={r1} alt="d"/>
        <Image src={r2} alt="d" objectFit="contain" />
        <Image src={r3} alt="d" objectFit="contain" />
        <Image src={r4} alt="d" objectFit="contain" />
        {/* <Image src={r5} alt="d"/> 
        <Image src={r6} alt="d" objectFit="contain" /> */}
          
        </Slider>
    </div>
    </div>
  )
}
