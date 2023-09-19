import React from 'react'

export default function Item() {
  return (
    <div className="flex hover:shadow-2xl  w-item-height shadow-lg mb-10">
      <div className=" basis-1/3 bg-stone-300 rounded-md m-1">
        {/* product image */}
        <img
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvDkKA77NqgFgcwar8U-9zxQ9Ctom_ZlMZ3w&usqp=CAU'
          alt='image'
          width={300}
          height={200}
        />

      </div>
      <div className='w-full m-1'>
        <h1 className='text-xl p-2'>Toshiba </h1>
        <div className='text-sm p-2'>stars rating</div>
        <h1 className="text-2xl p-2">85,000</h1>
        <div className="text-sm p-2">Lorem ipsum dolor sit amet, consectetur adipisicing.</div>
      </div>
    </div>
  )
}
