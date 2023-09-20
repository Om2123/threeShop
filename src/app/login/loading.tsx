import React from 'react'

export default function loading() {
  return (

    <div role="status" className=" space-y-8 animate-pulse md:space-y-0 md:space-x-8 md:flex md:items-center">
    <div className=" md:basis-1/2 relative md:mx-10 md:mt-20 rounded-xl flex items-center justify-center w-full h-96 bg-gray-300 sm:w-96 dark:bg-gray-700">
      
    </div>
    <div className=" md:basis-1/2 w-full">
      {/* <div className=" h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div> */}
      <div className=" h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5"></div>
      <div className=" h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5"></div>
      <div className=" h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5"></div>
      <div className=" h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5"></div>
      <div className=" h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5"></div>
      <div className=" h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5"></div>
      <div className=" h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5"></div>
      <div className=" h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-4"></div>
        <div className="h-4 bg-gray-200 rounded-full p-5 ml-24 max-w-[300px] mb-2 dark:bg-gray-700"></div>
        <div className="h-4 bg-gray-200 rounded-full p-5 ml-24 max-w-[300px]  mb-2 dark:bg-gray-700"></div>
    </div>
  </div>

  )
}
