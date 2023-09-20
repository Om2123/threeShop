"use client";
import Image from "next/image";
import s3_log from "@/../public/login-alt-2.jpeg";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { account, logIn } from "@/appwrite/appwrite";
import React, { useContext, useState } from "react";
import { AiFillCloseCircle,  AiOutlineGoogle, AiOutlineTwitter } from "react-icons/ai";
import MyContext from "@/myContext/MyContext";
import {  BiRightArrowAlt } from "react-icons/bi";

export default function Page() {
  const [isErrros, setIsError] = useState({
    isError: false,
    message: ""
  })
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  // const {setIslogged} = useContext(MyContext);
  const handleLogin = async () => {
    try {

      await account.createEmailSession(email, password);
    } catch (error: any) {
      setIsError({
        isError: true,
        message: error.message
      })

    }
  };

  return (
    // log in
    <section className="h-screen  ">
      <div className="container h-full py-24">
        <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
          {/* <!-- Left column container with background--> */}


          <div className="mb-12 md:mb-0 md:w-8/12 lg:w-6/12   ">

            <Image
              priority
              src={s3_log}
              className="w-full md:h-[500px] md:ml-10 rounded-xl"

              alt="log in image"
            ></Image>


          </div>

          {/* <!-- Right column container with form --> */}
          {/* error message */}
          <div className="md:w-8/12 lg:ml-6 lg:w-5/12">
            {/* error message to user */}
            {
              isErrros.isError ?
                <div
                  className="mb-3 inline-flex w-full text-base items-center rounded-lg bg-red-200 px-6 py-5  text-red-700"
                  role="alert">
                  <span className="mr-2 text-2xl" onClick={()=>{setIsError({isError: false, message: ""})}}>
                    <AiFillCloseCircle/>

                  </span>
                  {isErrros.message}
                </div>
                : 
                <>
                </>

            }
            <form>
              {/* <!-- Email input --> */}
              <div className="relative mb-6" data-te-input-wrapper-init>
                <label
                  htmlFor="website-admin"
                  className="block mb-2 max-sm:ml-4 text-sm font-medium text-gray-900 "
                >
                  Username
                </label>
                <div className="flex">
                  <span className="inline-flex items-center max-sm:px-4 max-sm:ml-2 px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                    <svg
                      className="w-4 h-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                    </svg>
                  </span>
                  <input
                    type="text"
                    id="website-admin"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="rounded-none rounded-r-lg bg-gray-50 border max-sm:mr-2 text-gray-900 focus:ring-blue-500
  focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5 max-sm:p-5  dark:bg-gray-700
   dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500
    dark:focus:border-blue-500"
                    placeholder="Username"
                  />
                </div>
              </div>

              {/* <!-- Password input --> */}
              <div className="relative mb-6" data-te-input-wrapper-init>
                <div className="mb-6 max-sm:mx-2">
                  <label
                    htmlFor="password"
                    className="block mb-2 max-sm:pl-2 text-sm font-medium text-gray-900 "
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    id="password"
                    className="bg-gray-50 border max-sm:p-5   border-gray-300 text-gray-900 text-sm rounded-lg
                   focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600
                    dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="•••••••••"
                    required
                  />
                </div>
              </div>

              {/* <!-- Remember me checkbox --> */}
              <div className="mb-6 flex items-center justify-between max-sm:mx-2">
                <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                  <input
                    className="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                    type="checkbox"
                    value=""
                    onChange={(e) => console.log(" ")}
                    id="exampleCheck3"
                    checked
                  />
                  <label
                    className="inline-block pl-[0.15rem] hover:cursor-pointer"
                    htmlFor="exampleCheck3"
                  >
                    Remember me
                  </label>
                </div>

                {/* <!-- Forgot password link --> */}
                <a
                  href="#!"
                  className="text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
                >
                  Forgot password?
                </a>
              </div>
              {/* navigate to sign up for new user */}
              <div className="mb-6 items-center flex max-sm:mx-2">
                Don &apos;t have an account?
                <Link href={"/signUp"}>

                  <p className="underline">Sign up</p>
                </Link>
              </div>

              {/* <!-- Submit button --> */}
              <div className="max-sm:mx-2">

                {/* <button
                  type="button"
                  onClick={handleLogin}
                  className="text-white w-full  bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200
               hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-lg
               max-sm:py-4  px-5 py-2.5 text-center mr-2 mb-2"
                >
                  Sign in
                </button> */}
                <button onClick={handleLogin} type="button"
                  className="relative w-full inline-flex items-center justify-center p-4 px-6 py-3
                 overflow-hidden font-medium bg-teal-500 transition duration-300 ease-out border-2 border-teal-500 rounded-2xl shadow-md group">
                  <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 
                -translate-x-full bg-teal-500 group-hover:translate-x-0 ease text-2xl">
                  <BiRightArrowAlt/>
                  </span>
                  <span className="absolute flex items-center justify-center w-full h-full text-white transition-all 
                duration-300 transform group-hover:translate-x-full ease">Sign up</span>
                  <span className="relative invisible">Sign up</span>
                </button>

              </div>
              {/* <!-- Divider --> */}
              <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                <p className="mx-4 mb-0 text-center font-semibold dark:text-neutral-200">
                  OR
                </p>
              </div>

              {/* <!-- Social login buttons --> */}
              <div className="flex flex-row">
                <button
                  type="button"
                  className="text-white basis-1/2 text-center bg-[#1da1f2] hover:bg-[#1da1f2]/90 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg text-sm px-5 py-2.5  inline-flex items-center dark:focus:ring-[#1da1f2]/55 mr-2 mb-2"
                >
                  <div className="m-1 text-xl">

                    <AiOutlineTwitter />
                  </div>
                  Sign in with Twitter
                </button>
                <button
                  type="button"
                  className="text-white  basis-1/2 bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2"
                >
                  <div className="m-1 text-xl">

                    <AiOutlineGoogle />
                  </div>
                  Sign in with Google
                </button>
              </div>
            </form>
          </div>

          {/* free space for mobile */}
          <div className="max-sm:p-40">

          </div>
        </div>
      </div>
    </section>
  );
}
// 