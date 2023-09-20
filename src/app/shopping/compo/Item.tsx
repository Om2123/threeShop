import Link from 'next/link'
import React from 'react'
import { AiFillStar } from 'react-icons/ai'

export default function Item() {

  return (
    // <div className="flex hover:shadow-2xl  w-item-height shadow-lg mb-10">
    <Link href={`/shopping/sdkfjdofijkcj`} className='flex hover:shadow-2xl w-item-height shadow-lg mb-10'>
      <div className=" basis-1/3 bg-stone-300 rounded-md m-1">
        {/* product image */}
        {/* <img
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvDkKA77NqgFgcwar8U-9zxQ9Ctom_ZlMZ3w&usqp=CAU'
          alt='image'
          width={300}
          height={200}
        /> */}

      </div>
      <div className='w-full m-1'>
        <h1 className='text-xl p-2'>
          {/* {prop.item.productName} */}thoshib
        </h1>
        <div className='text-sm p-2'>
          {/* {prop.item.rating} */}
              <ul
                className="my-1 flex list-none gap-1 p-0"
                data-te-rating-init
                data-te-readonly="true"
                data-te-value="3">
                
                <li className='text-orange-500 text-2xl'>
                 <AiFillStar/>
                </li>
                <li className='text-orange-500 text-2xl'>
                 <AiFillStar/>
                </li>
                <li className='text-orange-500 text-2xl'>
                 <AiFillStar/>
                </li>
                <li className='text-orange-500 text-2xl'>
                 <AiFillStar/>
                </li>
                <li className='text-orange-500 text-2xl'>
                 <AiFillStar/>
                </li>
                
              </ul>
        </div>
        <h1 className="text-2xl p-2">
          {/* {prop.item.price} */}374893
        </h1>
        <div className="text-sm p-2">
          {/* {prop.imageUrl} */}
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident, id aspernatur minima eaque, iusto a dolorem ab quam at, reiciendis similique nam modi?
        </div>
      </div>
    </Link>
    // </div>
  )
}
