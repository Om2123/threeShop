import Link from "next/link";
import React from "react";
import logo from "./../../../public/logo.jpg";
import { AiOutlineHeart, AiOutlineSearch } from "react-icons/ai";
import { BsBag } from "react-icons/bs";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav
      className="bg-white 
      top-0  left-0 right-0 fixed z-50 p-3 flex 
      justify-between items-center drop-shadow-md"
    >
      {/* Logo */}

      <div className="flex ">
        <Image src={logo} alt="logo" height={40} width={50} />
        <div className="px-1 self-center">
          <Link href="/">3Shop</Link>
        </div>
      </div>

      {/* Search Bar and Cart */}

      <div className="flex items-center max-sm:hidden space-x-8">
        {/* search bar */}
        <div className="flex">
          <div className="bg-slate-100 text-center pt-2 pl-2 text-lg text-stone-600 ">
            <AiOutlineSearch />
          </div>
          <input
            className="px-4 py-2 bg-slate-100  focus:outline-none w-80 text-sm focus:border-gray-400"
            type="text"
            placeholder="Search for products,brands and more"
          />
          {/* product from seach parameter */}
        </div>

        {/* profile  */}
        <div className="text-center -- pl-2 text-xl ">
          {/* <Profile /> */}
        </div>
        {/* wishlist */}
        <a href="#" className="text-xs ">
          <div className="text-center -- pl-2 text-xl ">
            <AiOutlineHeart />
          </div>
          <span>WishList</span>
        </a>
        {/* Bag */}
        <Link href="/bag" className="text-xs">
          <div className="text-center  text-xl ">
            <BsBag />
          </div>
          <span>Bag</span>
        </Link>
      </div>
      {/* Mobile Menu */}
      <div className="hidden max-sm:block">
        <div className="space-y-2">
          <div className="w-8 h-0.5 bg-gray-600"></div>
          <div className="w-8 h-0.5 bg-gray-600"></div>
          <div className="w-8 h-0.5 bg-gray-600"></div>
        </div>
      </div>
    </nav>
  );
}
