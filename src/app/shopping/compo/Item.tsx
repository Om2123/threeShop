import { setCookie } from 'cookies-next';
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { AiFillStar } from 'react-icons/ai'

export default function Item(prop: any) {
  function deleteCookie(cookieName: string) {
    document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
  }

  const setProductDetailCookie = (productDetails: string, name: string) => {
    const cookieValue = JSON.stringify(productDetails);
    if (cookieValue) {
      setCookie(name, cookieValue);
    }

  };
  return (
    // <div className="flex hover:shadow-2xl  w-item-height shadow-lg mb-10">

    <div className='flex hover:shadow-2xl w-item-height shadow-lg mb-10'>

      <Link href={`/shopping/${prop.item.$id}`} >
        <div className=" md:basis-1/3  bg-stone-300 rounded-md m-1">
          {/* product image */}
          <Image
            src='/3shop-4.jpeg'
            className='h-full object-cover'
            alt='image'
            width={300}
            height={200}
          />

        </div>
      </Link>
      <div className='w-full m-1 ml-6'>
        <Link href={`/shopping/${prop.item.$id}`} className='text-2xl p-2'>
          {prop.item.productName}
        </Link>
        <br />
        <Link href={`/shopping/${prop.item.$id}`} className="text-xl p-2">
          Rs.{prop.item.price}
        </Link>
        <Link href={`/shopping/${prop.item.$id}`} className='text-sm p-2'>
          {/* {prop.item.rating} */}
          {ratingStars(prop.item.rating)}
        </Link>

        {/* buttons */}

        <div className="text-sm p-2 ">
          <button
            type="button"
            onClick={() => setProductDetailCookie(prop.item.$id, prop.item.productName)}

            className="inline-block rounded bg-neutral-200 mx-2 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal
             text-neutral-800 shadow-[0_4px_9px_-4px_#cbcbcb] transition duration-150 ease-in-out
              hover:bg-neutral-100 hover:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)]
               focus:bg-neutral-100 focus:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] 
               focus:outline-none focus:ring-0
                active:bg-neutral-200 active:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] 
                dark:shadow-[0_4px_9px_-4px_rgba(251,251,251,0.3)]
                 dark:hover:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] 
                 dark:focus:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] 
                 dark:active:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)]">
            Add to Cart
          </button>

          <Link href={`/shopping/${prop.item.$id}`} className='text-sm p-2'>
            <button
              type="button"
              className="inline-block rounded bg-neutral-800 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal
             text-neutral-50 shadow-[0_4px_9px_-4px_rgba(51,45,45,0.7)] transition duration-150 ease-in-out hover:bg-neutral-800
             hover:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] focus:bg-neutral-800
             focus:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] focus:outline-none focus:ring-0
            active:bg-neutral-900 active:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)]
            dark:bg-neutral-900 dark:shadow-[0_4px_9px_-4px_#030202] dark:hover:bg-neutral-900 
            dark:hover:shadow-[0_8px_9px_-4px_rgba(3,2,2,0.3),0_4px_18px_0_rgba(3,2,2,0.2)]
            dark:focus:bg-neutral-900 dark:focus:shadow-[0_8px_9px_-4px_rgba(3,2,2,0.3),0_4px_18px_0_rgba(3,2,2,0.2)]
            dark:active:bg-neutral-900 dark:active:shadow-[0_8px_9px_-4px_rgba(3,2,2,0.3),0_4px_18px_0_rgba(3,2,2,0.2)]">
              Buy Now
            </button>
          </Link>

        </div>
      </div>
    </div >

  )
}





function ratingStars(rating: number) {
  return (
    <ul className="my-1 flex list-none gap-1 p-0">
      {Array.from({ length: rating }).map((_, i) => (
        <li key={i} className="text-orange-500 text-2xl">
          <AiFillStar />
        </li>
      ))}
    </ul>
  );
}