"use client";
import Image from "next/image";
import React from "react";
export default function ShopByAnime() {
  const urls = {
    naruto: "https://otakukulture.in/wp-content/uploads/2023/01/Naruto-180x180.png",
    deathNote:"https://otakukulture.in/wp-content/uploads/2023/01/Death-note-180x180.png",
    dragonBallZ:"https://otakukulture.in/wp-content/uploads/2023/01/Dragon-ball-180x180.png",
    chainSawMan:"https://otakukulture.in/wp-content/uploads/2023/01/Chainsaw-man-180x180.png",
    hunterXHunter:"https://otakukulture.in/wp-content/uploads/2023/01/HunterxHunter-180x180.png",
    haikyu:"https://otakukulture.in/wp-content/uploads/2023/01/Haikyuu-180x180.png",
    aot:"https://otakukulture.in/wp-content/uploads/2023/01/Attack-on-Titan--180x180.png",
    jojo:"https://otakukulture.in/wp-content/uploads/2023/01/Jo-Jos-bizarre-adventure--180x180.png",
    Mha:"https://otakukulture.in/wp-content/uploads/2023/01/My-hero-academia-180x180.png"
    ,blackCover:"https://otakukulture.in/wp-content/uploads/2023/01/Black-clover-180x180.png",

  }
  return (
    <div className="md:mx-32" >
      <div className="text-center w-full text-4xl my-3"> Shop By Anime</div>
      <div className="grid md:grid-rows-2 ">
        <div className="flex  mt-3 shrink">
            <div className="text-center p-1 ml-3 hover:scale-110 ease-in transform transition-transform duration-300">
              <Image src={urls.deathNote} alt="death note" width={170} className="m-2" height={100} />
              <h3 className="font-semibold">Death Note</h3>
            </div>
            <div className="text-center p-2 ml-3  hover:scale-110 ease-in transform transition-transform duration-300">
              <Image src={urls.naruto} alt="death note" width={170} className="m-2" height={100} />
              <h3 className="font-semibold">Naruto</h3>
            </div>
            <div className="text-center p-2 ml-3  hover:scale-110 ease-in transform transition-transform duration-300">
              <Image src={urls.dragonBallZ} alt="death note" width={170} className="m-2" height={100} />
              <h3 className="font-semibold">Dragon Ball Z</h3>
            </div>
            <div className="text-center p-2 ml-3 max-sm:hidden  hover:scale-110 ease-in transform transition-transform duration-300">
              <Image src={urls.chainSawMan} alt="death note" width={170} className="m-2" height={100} />
              <h3 className="font-semibold">Chain Saw Man</h3>
            </div>
            <div className="text-center p-2 ml-3 max-sm:hidden  hover:scale-110 ease-in transform transition-transform duration-300">
              <Image src={urls.hunterXHunter} alt="death note" width={170} className="m-2" height={100} />
              <h3 className="font-semibold">Hunter X Hunter</h3>
            </div>
        </div>
        <div className="flex  mt-3">
        <div className="text-center p-2 ml-3  hover:scale-110 ease-in transform transition-transform duration-300">
              <Image src={urls.Mha} alt="death note" width={170} className="m-2" height={100} />
              <h3 className="font-semibold">My hero academia</h3>
            </div>
        <div className="text-center p-2 ml-3  hover:scale-110 ease-in transform transition-transform duration-300">
              <Image src={urls.aot} alt="death note" width={170} className="m-2" height={100} />
              <h3 className="font-semibold">Attack on tian</h3>
            </div>
        <div className="text-center p-2 ml-3  hover:scale-110 ease-in transform transition-transform duration-300">
              <Image src={urls.jojo} alt="death note" width={170} className="m-2" height={100} />
              <h3 className="font-semibold">Jojo&apos;s bizarre adventure</h3>
            </div>
        <div className="text-center p-2 ml-3  hover:scale-110 ease-in transform transition-transform duration-300 max-sm:hidden">
              <Image src={urls.haikyu} alt="death note" width={170} className="m-2" height={100} />
              <h3 className="font-semibold">Haikyuu</h3>
            </div>
        <div className="text-center p-2 ml-3 max-sm:hidden  hover:scale-110 ease-in transform transition-transform duration-300">
              <Image src={urls.blackCover} alt="death note" width={170} className="m-2" height={100} />
              <h3 className="font-semibold">Black Cover</h3>
            </div>
        </div>
      </div>
    </div>
  );
}
