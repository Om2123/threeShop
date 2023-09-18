"use client";
import React from 'react'
export default function page() {
// setUser("XXXX");
async function fetchAnimeImage(animeId:number) {
  const response = await fetch(`https://api.jikan.moe/v4/anime`);
  console.log(response);
  
}
fetchAnimeImage(13)
  return (
    <div>
  {/* {user}     */}
      
    </div>
  )
}
