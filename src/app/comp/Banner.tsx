"use client";
import Image from "next/image";
import banner from "@/../public/banner.jpeg";
import React, { useEffect, useState } from "react";

export default function Banner() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check the screen width to determine if it's a mobile device
    const screenWidth = window.innerWidth;
    setIsMobile(screenWidth < 768); // You can adjust the threshold as needed
  }, []);
  return (
    <div className="w-full">
      {!isMobile ? (
        
        <Image src={"https://e0.pxfuel.com/wallpapers/1022/228/desktop-wallpaper-ps4-banners-anime-girl.jpg"}
            alt="banner" height={600} width={1400}/>
      ) : (
        <Image src={banner} alt="banner" />
      )}
    </div>
  );
}
