"use client";
import React, { useEffect, useState } from 'react'
import { database, loadProduct } from '@/appwrite/appwrite';
import Image from 'next/image';
import Filters from './compo/Filters';
import Item from './compo/Item';
import { BiLeftArrow, BiRightArrow } from 'react-icons/bi';
import Footer from '../comp/Footer';
export default function page() {
  const [productList, setProduct] = useState<any>([]);
  useEffect(() => {

    database.listDocuments("650816cd8feee59dcadf", "6508174fd50e00f14748").then((res) => {
      setProduct(res.documents);

    }).catch((er) => console.log(er.message)
    )
  }, []);


  return (
    <div className='relative top-40'>

      <div className='flex '>
        {/* filters */}
        <Filters />
        {/* products */}
        <div className='md:basis-9/12 hover:shadow-2xl border-slate-100 border-2'>


          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />

        </div>
      </div>

      {/* pagination  */}
      <div className='flex justify-center m-3 pb-5'>

        <nav className=''>
          <ul className="flex items-center -space-x-px md:h-12  mt-2 text-base">
            {/* left arraow */}
            <li>
              <a href="#" className="flex items-center text-xl 
              justify-center md:px-12  px-5  h-14 ml-0 leading-tight
               text-gray-500 bg-white border border-gray-300 
               rounded-l-lg hover:bg-gray-100 hover:text-gray-700
               dark:bg-gray-800 dark:border-gray-700
               dark:text-gray-400 dark:hover:bg-gray-700
               dark:hover:text-white">
                <span className="sr-only">Previous</span>
                <BiLeftArrow />
              </a>
            </li>
            {/* page numbers */}
            <li>
              <a href="#" className="flex items-center justify-center px-5  md:px-10 h-12 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
            </li>
            <li>
              <a href="#" className="flex items-center justify-center px-5  md:px-10 h-12 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
            </li>
            <li>
              <a href="#" className="flex items-center justify-center px-5  md:px-10 h-12 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">3</a>
            </li>

            <li>
              <a href="#" className="flex items-center justify-center px-5  md:px-10 h-12 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">4</a>
            </li>
            <li>
              <a href="#" className="flex items-center justify-center px-5  md:px-10 h-12 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">5</a>
            </li>

            {/* right arrow */}
            <li>
              <a href="#" className="flex items-center text-xl
               justify-center px-5 md:px-12 h-14 leading-tight 
               text-gray-500 bg-white border border-gray-300 
               rounded-r-lg hover:bg-gray-100 hover:text-gray-700 
               dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400
                dark:hover:bg-gray-700 dark:hover:text-white">
                <span className="sr-only">Next</span>
                <BiRightArrow />
              </a>
            </li>
          </ul>
        </nav>

      </div>
      <Footer />

    </div>

  )
}
