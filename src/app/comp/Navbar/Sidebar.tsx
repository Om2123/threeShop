"use client";
import { logOut } from "@/appwrite/appwrite";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {  useState } from "react";
import { AiFillAppstore, AiFillCloseCircle, AiFillProject } from "react-icons/ai";
import { FaHeart, FaShoppingBag, FaSignOutAlt, FaUserAlt } from "react-icons/fa";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const rounter = useRouter();
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button
        className="fixed top-0 right-3  bg-primary px-4 py-2  
        font-medium uppercase leading-tight text-stone-600 text-4xl
         ease-in-out hover:bg-primary-700  focus:bg-primary-700  mt-3 
         focus:outline-none focus:ring-0 active:bg-primary-800 "
        onClick={toggleSidebar}
      >
        {/* ham */}
        <AiFillAppstore />
      </button>

      <nav
        id="sidenav-7"
        className={`fixed right-0 top-0  h-screen w-60 ${isOpen ? " hidden " : " "
          }
        overflow-hidden  bg-white shadow-[0_4px_12px_0_rgba(0,0,0,0.07),_0_2px_4px_rgba(0,0,0,0.05)] 
          data-[te-sidenav-hidden='false']:-translate-x-0 dark:bg-zinc-800`}
        data-te-sidenav-init
        data-te-sidenav-hidden="false"
        data-te-sidenav-right="true"
      >
        <button
          onClick={toggleSidebar}
          className="flex relative left-44 items-center justify-center p-2 text-3xl bg-red-500 hover:bg-red-600 text-white rounded-full"
        >
          {/* X */}
          <AiFillCloseCircle />
        </button>
        <ul
          className="relative m-0 list-none px-[0.2rem]"
          data-te-sidenav-menu-ref
        >
          <li className="relative" onClick={() => setIsOpen(!open)}>
            <Link href={"/login"}>
              <div
                className="flex h-12 cursor-pointer items-center truncate rounded-[5px] px-6 py-4 text-[0.875rem] text-gray-600 outline-none transition duration-300 ease-linear hover:bg-slate-50 hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
                data-te-sidenav-link-ref
              >
                <span className="mr-4 [&>svg]:h-4 [&>svg]:w-4 [&>svg]:text-gray-400 dark:[&>svg]:text-gray-300">
                  <FaUserAlt />
                </span>
                <span>My Profile</span>
              </div>
            </Link>
          </li>
          <li className="relative" onClick={() => setIsOpen(!open)}>
            <Link href={"/wishlist"}>
              <div
                className="flex h-12 cursor-pointer items-center truncate rounded-[5px] px-6 py-4 text-[0.875rem] text-gray-600 outline-none transition duration-300 ease-linear hover:bg-slate-50 hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
                data-te-sidenav-link-ref
              >
                <span className="mr-4 [&>svg]:h-4 [&>svg]:w-4 [&>svg]:text-gray-400 dark:[&>svg]:text-gray-300">

                  <FaHeart />
                </span>
                <span>Wish List</span>
              </div>
            </Link>
          </li>
          <li className="relative" onClick={() => setIsOpen(!open)}>
            <Link href={"/shopping"}>
              <div
                className="flex h-12 cursor-pointer items-center truncate rounded-[5px] px-6 py-4 text-[0.875rem] text-gray-600 outline-none transition duration-300 ease-linear hover:bg-slate-50 hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
                data-te-sidenav-link-ref
              >
                <span className="mr-4 [&>svg]:h-4 [&>svg]:w-4 [&>svg]:text-gray-400 dark:[&>svg]:text-gray-300">
                  <AiFillProject />
                </span>
                <span>All Products</span>
              </div>
            </Link>
          </li>
          <li className="relative" onClick={() => setIsOpen(!open)}>
            <Link href={"/cart"}>
              <div
                className="flex h-12 cursor-pointer items-center truncate rounded-[5px] px-6 py-4 text-[0.875rem] text-gray-600 outline-none transition duration-300 ease-linear hover:bg-slate-50 hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
                data-te-sidenav-link-ref
              >
                <span className="mr-4 [&>svg]:h-4 [&>svg]:w-4 [&>svg]:text-gray-400 dark:[&>svg]:text-gray-300">

                  <FaShoppingBag />
                </span>
                <span>Cart List</span>
              </div>
            </Link>
          </li>
          <li className="relative" >
            {/* { */}
              {/* // islogged ? */}
            <div
              className="flex h-12 cursor-pointer items-center truncate rounded-[5px] px-6 py-4 text-[0.875rem] text-gray-600 outline-none transition duration-300 ease-linear hover:bg-slate-50 hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
              data-te-sidenav-link-ref
              onClick={() => {logOut() ;setIsOpen(!open)}}
            >
              <span className="mr-4 [&>svg]:h-4 [&>svg]:w-4 [&>svg]:text-gray-400 dark:[&>svg]:text-gray-300">
                <FaSignOutAlt />
              </span>
              <span>Sign out </span>
            </div>

              {/* :
              <div
              className="flex h-12 cursor-pointer items-center truncate rounded-[5px] px-6 py-4 text-[0.875rem] text-gray-600 outline-none transition duration-300 ease-linear hover:bg-slate-50 hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
              data-te-sidenav-link-ref
              onClick={()=> {rounter.push("/login") }}
            >
              <span className="mr-4 [&>svg]:h-4 [&>svg]:w-4 [&>svg]:text-gray-400 dark:[&>svg]:text-gray-300">
                <FaSignOutAlt />
              </span>
              <span>Sign IN </span>
            </div>
            } */}

          </li>
        </ul>
        {/* ... (rest of your sidebar content) */}
      </nav>
    </div>
  );
};

export default Sidebar;
