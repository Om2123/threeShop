"use client"
import Image from 'next/image'
import React from 'react'
import se from "@/../public/login-alt.jpeg"
import Link from 'next/link'

export default function page() {
  return (
    <div className='container mx-auto min-h-[600px] mt-32'>

      <div className='text-2xl font-semibold items-center justify-between gap-x-2 flex'>
        singleShoeData?.title
        <div className=' text-sm font-normal sm:flex sm:items-center hidden'>
          <div>
            {/* {singleShoeData?.shoeFor?.map((shoeF, index) => { */}
            {/* return ( */}
            <span className='capitalize bg-green-500 rounded-full text-white px-3 py-2 ml-2 inline-block'>
              shoeF</span>
            {/* ); */}
            {/* } */}
            {/* ).splice(0, 1)} */}
          </div>
          <div className='bg-rose-500 rounded-full text-white px-3 py-2 ml-1 inline-block'>
            Available: singleShoeData?.quantity
          </div>
          <div className='text-2xl font-semibold text-rose-600 ml-10'>
            Rs.500
          </div>
        </div>
        <div className='text-2xl font-semibold text-rose-600 inline-block sm:hidden'>
          Rs.5000
        </div>
      </div>
      <div className='text-sm font-normal flex sm:hidden items-center mt-1'>
        <div>
          {/* {singleShoeData?.category?.map((category, index) => {
          return (
            <span className='capitalize bg-green-500 rounded-full text-white px-3 py-2 ml-2 inline-block' key={index}>
              {category}</span>
          );
        }
        ).splice(0, 1)} */}
        </div>
        <div className='bg-rose-500 rounded-full text-white px-3 py-2 ml-1 inline-block'>
          Available: singleShoeData?.quantity
        </div>
      </div>
      <div className='flex flex-col gap-10 items-center justify-center text-center md:min-h-[640px] md:flex-row'>
        <div className='basis-1/3 flex-1 '>
          {/* <img className='m-auto rounded-lg md:min-w-[400px] lg:min-w-[600px]  xl:min-w-[680px] xl:max-w-[720px] xl:min-h-[520px] xl:max-h-[520px] object-cover bg-white' src={"/login-alt.jpeg"} alt='' /> */}
          <h3 className='text-lg text-justify mb-4 py-2 px-4 rounded-md bg-gray-100 w-full'>singleShoeData?.description</h3>
        </div>
        <div className='basis-1/3 flex-1 w-full mb-8 bg-white border border-gray-300 rounded-lg px-6 py-8'>
          <div className='flex items-center gap-x-4 mb-8'>
            <div className='w-10 h-10 p-1 border border-gray-300  bg-black rounded-full'>
              {/* <img src={"/3shop-2.jpeg"} className='rounded-full ' alt='' /> */}
            </div>
            <div>
              <div className='font-bold text-lg '>
                singleShoeData?.title
              </div>
              <Link href={"/"} className='text-rose-700 text-sm'>
                Order Now
              </Link>
            </div>
          </div>
          <form className='flex flex-col gap-y-4'
          // onSubmit={(e) => e.preventDefault()}
          >
            <input
              className='border border-gray-300 focus:border-rose-700 rounded w-full px-4 h-14 text-sm outline-none'
              type='text'
              // defaultValue={decodeData?.name || ''}
              placeholder='Name*'
            />
            <input
              className='border border-gray-300 focus:border-rose-700 rounded w-full px-4 h-14 text-sm outline-none'
              type='text'
              placeholder='Email*'
            // defaultValue={decodeData?.email || ''}
            />
            <input
              className='border border-gray-300 focus:border-rose-700 rounded w-full px-4 h-14 text-sm outline-none'
              type='text'
              placeholder='Phone*'
            // defaultValue={decodeData?.number || ''}
            />
            <textarea
              className='border border-gray-300 focus:border-rose-700 rounded w-full p-4 h-[5.5rem] text-sm text-gray-400 outline-none resize-none'
              // type='text'
              placeholder='Message*'
              defaultValue='Hello, I am interested to buy this product. Please contact me.'
            />
          </form>
          <div className='flex gap-x-2 mt-4 '>
            {/* <button
              className='bg-rose-700 hover:bg-rose-800 text-white rounded p-4 text-sm w-full transition'
            // onClick={() => CheckoutBtn(singleShoeData)}
            >
              Order Now
            </button> */}
            <button className="relative w-2/4 inline-flex items-center justify-center px-10 py-4 overflow-hidden 
            font-mono font-medium tracking-tighter text-white w=full transition bg-gray-800 rounded-lg group">
              <span className="absolute w-0 h-0 transition-all duration-200 ease-out bg-gray-100 rounded-full group-hover:w-64 group-hover:h-64"></span>
              <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
              <span className="relative group-hover:text-black">Order Now </span>
            </button>
            
            <button className="relative w-2/4 px-5 py-3 overflow-hidden font-medium text-gray-600 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group">
              <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
              <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
              <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
              <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
              <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
              <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">Add to cart</span>
            </button>
            {/* <button className='border border-rose-700 text-rose-700 hover:border-rose-900 hover:text-rose-900 rounded p-4 text-sm w-full transition'
            //  onClick={() => addToCart(
            // { product: singleShoeData, shoeId: id }
            // )}>
            >
              Add to Cart
            </button> */}

          </div>
        </div>
      </div>
    </div >
  )
}
