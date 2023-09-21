import React from 'react'
import { BiLeftArrow, BiRightArrow } from 'react-icons/bi'

export default function Pagination() {
  return (
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
  )
}
