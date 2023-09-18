"use client";
import Link from "next/link";
import { useState } from "react";
import {  FaHeart, FaShoppingBag, FaUserAlt } from "react-icons/fa";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button
        className="fixed top-0 right-0  bg-primary px-6 py-2 text-xs 
        font-medium uppercase leading-tight text-black  
         ease-in-out hover:bg-primary-700  focus:bg-primary-700  mt-3 
         focus:outline-none focus:ring-0 active:bg-primary-800 "
        onClick={toggleSidebar}
      >
        <div className="w-6 h-6 flex flex-col justify-between ">
          <span className=" bg-gray-900 h-1  w-full rounded"></span>
          <span className=" bg-gray-900 h-1  w-4/5 rounded"></span>
          <span className=" bg-gray-900 h-1  w-2/3 rounded"></span>
        </div>
      </button>

      <nav
        id="sidenav-7"
        className={`fixed right-0 top-0  h-screen w-60 ${
          isOpen ? " hidden " : " "
        }
        overflow-hidden  bg-white shadow-[0_4px_12px_0_rgba(0,0,0,0.07),_0_2px_4px_rgba(0,0,0,0.05)] 
          data-[te-sidenav-hidden='false']:-translate-x-0 dark:bg-zinc-800`}
        data-te-sidenav-init
        data-te-sidenav-hidden="false"
        data-te-sidenav-right="true"
      >
        <button
          onClick={toggleSidebar}
          className="flex relative left-44 items-center justify-center p-2 bg-red-500 hover:bg-red-600 text-white rounded-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <ul
          className="relative m-0 list-none px-[0.2rem]"
          data-te-sidenav-menu-ref
        >
           <li className="relative">
            <Link href={"/signin"}>
              <div
                className="flex h-12 cursor-pointer items-center truncate rounded-[5px] px-6 py-4 text-[0.875rem] text-gray-600 outline-none transition duration-300 ease-linear hover:bg-slate-50 hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
                data-te-sidenav-link-ref
              >
                <span className="mr-4 [&>svg]:h-4 [&>svg]:w-4 [&>svg]:text-gray-400 dark:[&>svg]:text-gray-300">
                 <FaUserAlt/>
                </span>
                <span>My Profile</span>
              </div>
            </Link>
          </li>
           <li className="relative">
            <Link href={"/wishlist"}>
            <div
                className="flex h-12 cursor-pointer items-center truncate rounded-[5px] px-6 py-4 text-[0.875rem] text-gray-600 outline-none transition duration-300 ease-linear hover:bg-slate-50 hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
                data-te-sidenav-link-ref
              >
                <span className="mr-4 [&>svg]:h-4 [&>svg]:w-4 [&>svg]:text-gray-400 dark:[&>svg]:text-gray-300">
                 
                 <FaHeart/>
                </span>
                <span>Wish List</span>
              </div>
            </Link>
          </li> 
          <li className="relative">
            <Link href={"/cart"}>
            <div
                className="flex h-12 cursor-pointer items-center truncate rounded-[5px] px-6 py-4 text-[0.875rem] text-gray-600 outline-none transition duration-300 ease-linear hover:bg-slate-50 hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
                data-te-sidenav-link-ref
              >
                <span className="mr-4 [&>svg]:h-4 [&>svg]:w-4 [&>svg]:text-gray-400 dark:[&>svg]:text-gray-300">
                 
                 <FaShoppingBag/>
                </span>
                <span>Cart List</span>
              </div>
            </Link>
          </li>  
        </ul>
        {/* ... (rest of your sidebar content) */}
      </nav>
    </div>
  );
};

export default Sidebar;
