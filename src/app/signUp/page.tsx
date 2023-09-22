"use client";
import s3alt from "@/../public/3shop-2.jpeg";
import Image from 'next/image';
import Link from 'next/link';
import { account,  logIn } from "@/appwrite/appwrite"
import React, {  useState } from 'react'
import { AiFillCloseCircle,  AiOutlineGoogle, AiOutlineTwitter } from 'react-icons/ai';
import { ID } from "appwrite";

export default function Page() {
  const [isErrros, setIsError] = useState({
    isError: false,
    message: ""
  })
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (document.getElementById("password")?.innerText != document.getElementById("password2")?.innerText) {
      alert("password not match !!")
      return;
    }

      try {
        await account.create(ID.unique(), email, password, name).then((res: any) => {
          logIn({email,password});
          alert("user created successfully")
          
          
        }).catch(err => {
          setIsError({
            isError: true,
            message: err.message
          })
          console.log(err.message);
          return
        });

      } catch (error: any) {
        
        
      }

  };
  return (
    <section className="h-screen  ">
      <div className="container h-full py-24">
        <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between ">
          {/* <!-- Left column container with background--> */}
          <div className="mb-12 md:mb-0 md:w-8/12 lg:w-6/12   ">

            <Image
              priority
              src={s3alt}
              className="w-full md:h-[500px] md:ml-10  rounded-xl"

              alt="log in image"
            ></Image>


          </div>

          {/* <!-- Right column container with form --> */}
          <div className="md:w-8/12 lg:ml-6 lg:w-5/12">
             {/* error message to user */}
             {
              isErrros.isError ?
                <div
                  className="mb-3 inline-flex w-full items-center rounded-lg bg-red-200 px-6 py-5 text-base text-red-700"
                  role="alert">
                  <span className="mr-2 text-2xl" onClick={()=> {setIsError({isError: false, message: ""})}}>
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
                <div className="max-sm:mx-2.5">

                  <label
                    htmlFor="website-admin"
                    className="block mb-2 max-sm:ml-4 text-sm font-medium text-gray-900 "
                  >
                    Enter Email
                  </label>
                  <div className="flex">

                    <input
                      type="email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      id="email"
                      className="bg-gray-50 border max-sm:p-5   border-gray-300 text-gray-900 text-sm rounded-lg
                    focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600
                    dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="name@company.com"
                      required
                    />
                  </div>
                </div>
              </div>
              {/* enter name */}
              <div className="relative mb-6" data-te-input-wrapper-init>
                <div className="max-sm:mx-2.5">

                  <label
                    htmlFor="website-admin"
                    className="block mb-2 max-sm:ml-4 text-sm font-medium text-gray-900 "
                  >
                    Enter Name
                  </label>
                  <div className="flex">

                    <input
                      type="email"
                      name="email"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      id="emailsign"
                      className="bg-gray-50 border max-sm:p-5   border-gray-300 text-gray-900 text-sm rounded-lg
                   focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600
                    dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Name --"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* <!-- Password input --> */}
              <div className="relative mb-6" data-te-input-wrapper-init>
                <div className="mb-6 max-sm:mx-2">
                  <label
                    htmlFor="password"
                    className="block mb-2 max-sm:pl-2 text-sm font-medium text-gray-900 "
                  >
                    Enter Password
                  </label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border max-sm:p-5   border-gray-300 text-gray-900 text-sm rounded-lg
                   focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600
                    dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                </div>
              </div>
              {/* double check password */}
              <div className="relative mb-6" data-te-input-wrapper-init>
                <div className="mb-6 max-sm:mx-2">
                  <label
                    htmlFor="password"
                    className="block mb-2 max-sm:pl-2 text-sm font-medium text-gray-900 "
                  >
                    Enter Password Again !
                  </label>
                  <input
                    type="password"
                    name="password2"
                    id="password2"
                    placeholder="••••••••"
                    className="bg-gray-50 border max-sm:p-5   border-gray-300 text-gray-900 text-sm rounded-lg
                    focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600
                     dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                </div>
              </div>

              <div className="mb-6 items-center flex max-sm:mx-2">
                Already have an account  ?
                <Link href={"/login"} className="underline animate-pulse">
                  Login here
                </Link>
              </div>

              {/* <!-- Submit button --> */}
              <div className="max-sm:mx-2">

                <button
                  type="button"
                  onClick={handleSubmit}
                  className="text-white w-full  bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200
               hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-lg
               max-sm:py-4  px-5 py-2.5 text-center mr-2 mb-2"
                >
                  Create an Account Now !
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
                  Sign up with Twitter
                </button>
                <button
                  type="button"
                  className="text-white  basis-1/2 bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2"
                >
                  <div className="m-1 text-xl">

                    <AiOutlineGoogle />
                  </div>
                  Sign up with Google
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
  )
}
