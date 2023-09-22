"use client"
import React, { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { database, orderNowDataBase } from '@/appwrite/appwrite'
export default function Page() {
  const [order, setOrder] = useState<{
    email: string;
    name: string;
    address: string;
    city: string;
    state: string;
    phone: string;
    Quantity: number;
  }>({
    email: "",
    name: "",
    address: "",
    city: "",
    state: "",
    phone: "+91",
    Quantity: 1
  });

  const [doc, setDoc] = useState<{
    productName: string;
    imageUrl: string;
    price: number;
    rating: number;
    anime: string;
  } | null>(null);

  const { product_id } = useParams();
  console.log(product_id);

  useEffect(() => {
    database.getDocument("650816cd8feee59dcadf", "6508174fd50e00f14748", product_id.toString().replace(/%20%20/g, '')).then((res: any) => {
      setDoc(res);
    }).catch(er => console.log(er.message)
    )

  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => setIsModalOpen(!isModalOpen)

  const orderNow = () => {
    const date = new Date();

    orderNowDataBase({
      email: order.email,
      productid: product_id,
      name: order.name,
      addres: order.address,
      city: order.city,
      state: order.state,
      phone: order.phone,
      quantity: order.Quantity,
      today_date: date,
    })

  }
  return (
    <div className='container mx-auto min-h-[600px] mt-32'>
      {
        doc ? <>
          <div className='text-2xl font-semibold items-center justify-between gap-x-2 flex'>
            {doc?.productName}
            <div className=' text-sm font-normal sm:flex sm:items-center hidden'>
              <div>


                <span className='capitalize bg-green-500 rounded-full text-white px-3 py-2 ml-2 inline-block'>
                  shoeF</span>


              </div>
              <div className='bg-rose-500 rounded-full text-white px-3 py-2 ml-1 inline-block'>
                Available: {doc?.rating}
              </div>
              <div className='text-2xl font-semibold text-rose-600 ml-10'>
                {doc?.price}
              </div>
            </div>
            <div className='text-2xl font-semibold text-rose-600 inline-block sm:hidden'>
              {doc?.price}
            </div>
          </div>
          <div className='text-sm font-normal flex sm:hidden items-center mt-1'>
            {/* <div>
              <span className='capitalize bg-green-500 rounded-full text-white px-3 py-2 ml-2 inline-block' >
                category</span>
          </div> */}
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
              <div className='flex items-center justify-between gap-x-4 mb-8'>

                <div className='flex'>
                  <div className='w-10 h-10 p-1 border border-gray-300  bg-black rounded-full'>
                    {/* <img src={"/3shop-2.jpeg"} className='rounded-full ' alt='' /> */}
                  </div>

                  <div>
                    <div className='font-bold text-lg '>
                      {doc?.productName}
                    </div>
                    <div className='text-rose-700 ml-3 text-sm'>
                      Order Now
                    </div>
                  </div>
                </div>

                <div className="">
                  Quantity:
                  <input type="number" defaultValue={1} className='w-20 border-black  focus:border-black  text-center border-2 rounded-lg' name="d" id="d" />
                </div>
              </div>

              {/* information input */}
              <form className='flex flex-col gap-y-4'
              // onSubmit={(e) => e.preventDefault()}
              >
                <input
                  className='border border-gray-300  focus:border-black rounded w-full px-4 h-14 text-sm outline-none'
                  type='text'
                  value={order.name}
                  onChange={(e) => setOrder({ ...order, name: e.target.value })}
                  placeholder='Name*'
                  required
                />
                <input
                  className='border border-gray-300  focus:border-black rounded w-full px-4 h-14 text-sm outline-none'
                  type='text'
                  placeholder='Email*'
                  value={order.email}
                  onChange={(e) => setOrder({ ...order, email: e.target.value })}
                  required
                />
                <input
                  className='border border-gray-300  focus:border-black  rounded w-full px-4 h-14 text-sm outline-none'
                  type='text'
                  placeholder='City*'
                  value={order.city}
                  onChange={(e) => setOrder({ ...order, city: e.target.value })}
                  required
                />
                <input
                  className='border border-gray-300  focus:border-black  rounded w-full px-4 h-14 text-sm outline-none'
                  type='text'
                  placeholder='State*'
                  value={order.state}
                  onChange={(e) => setOrder({ ...order, state: e.target.value })}
                  required
                />
                <input
                  className='border border-gray-300 focus:border-black rounded w-full px-4 h-14 text-sm outline-none'
                  type='text'
                  placeholder='Phone*'
                  value={order.phone}
                  onChange={(e) => setOrder({ ...order, phone: e.target.value })}
                  required
                />


                <textarea
                  className='border border-gray-300  focus:border-black  rounded w-full p-4 h-[5.5rem] text-sm text-gray-400 outline-none resize-none'
                  placeholder='Address*'
                  value={order.address}
                  onChange={(e) => setOrder({ ...order, address: e.target.value })}
                  required
                />
              </form>

              {/* buttons */}
              <div className='flex gap-x-2 mt-4 '>
                <button className="relative w-2/4 inline-flex items-center justify-center px-10 py-4 overflow-hidden 
              font-mono font-medium tracking-tighter text-white w=full transition bg-gray-800 rounded-lg group"
                  onClick={toggleModal}>
                  <span className="absolute w-0 h-0 transition-all duration-200 ease-out bg-gray-100 rounded-full group-hover:w-64 group-hover:h-64"></span>
                  <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
                  <span className="relative group-hover:text-black">Order Now </span>
                </button>


                {/* confirm whether order or now  */}
                <div className={`fixed z-10 overflow-y-auto top-0 w-full left-0 ${isModalOpen ? '' : 'hidden'}`} id="modal">
                  <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                    <div className="fixed inset-0 transition-opacity">
                      <div className="absolute inset-0 bg-gray-900 opacity-75" />
                    </div>
                    <span className="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>
                    <div className="inline-block align-center bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
                      <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                        Are You Sure You Want To Order This Product ?
                      </div>
                      <div className="bg-gray-200 px-4 py-3 text-right">
                        <button type="button" className="py-2 px-4 bg-gray-500 text-white rounded hover:bg-gray-700 mr-2" onClick={toggleModal}><i className="fas fa-times"></i> Cancel</button>
                        <button type="button" className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-700 mr-2" onClick={() => { orderNow(); toggleModal() }}><i className="fas fa-plus"></i> Yes , Order Now</button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* confirm whether order or now ends */}


                <button className="relative w-2/4 px-5 py-3 overflow-hidden font-medium text-gray-600 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group">
                  <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
                  <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
                  <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                  <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                  <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
                  <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">Add to cart</span>
                </button>

              </div>
            </div>
          </div>

        </>
          :
          <>
            <div className='text-2xl animate-pulse font-semibold items-center justify-between gap-x-2 flex'>
              <div className="h-2.5 bg-gray-700 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
              <div className=' text-sm font-normal sm:flex sm:items-center hidden'>
                <div>


                  <span className='capitalize bg-green-500 rounded-full text-white px-3 py-2 ml-2 inline-block'>
                    <div className="h-2.5 bg-gray-700 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                  </span>


                </div>
                <div className='bg-rose-500 rounded-full text-white px-3 py-2 ml-1 inline-block'>
                  <div className="h-2.5 bg-gray-700 rounded-full dark:bg-gray-700 w-48 mb-4"></div>

                </div>
                <div className='text-2xl font-semibold text-rose-600 ml-10'>
                  <div className="h-2.5 bg-gray-700 rounded-full dark:bg-gray-700 w-48 mb-4"></div>

                </div>
              </div>
              <div className='text-2xl font-semibold text-rose-600 inline-block sm:hidden'>
                <div className="h-2.5 bg-gray-700 rounded-full dark:bg-gray-700 w-48 mb-4"></div>

              </div>
            </div>
            <div className='text-sm  animate-pulse font-normal flex sm:hidden items-center mt-1'>

              <div className='bg-rose-500 rounded-full text-white px-3 py-2 ml-1 inline-block'>
                <div className="h-2.5 bg-gray-700 rounded-full dark:bg-gray-700 w-48 mb-4"></div>

              </div>
            </div>
            <div className='flex flex-col gap-10  animate-pulse items-center justify-center text-center md:min-h-[640px] md:flex-row'>
              <div className='basis-1/3 flex-1 '>
                {/* <img className='m-auto rounded-lg md:min-w-[400px] lg:min-w-[600px]  xl:min-w-[680px] xl:max-w-[720px] xl:min-h-[520px] xl:max-h-[520px] object-cover bg-white' src={"/login-alt.jpeg"} alt='' /> */}
                <h3 className='text-lg text-justify mb-4 py-2 px-4 rounded-md bg-gray-100 w-full'>
                  <div className="h-2.5 bg-gray-700 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                </h3>
              </div>

              <div className='basis-1/3 flex-1 w-full mb-8 bg-white border border-gray-300 rounded-lg px-6 py-8'>
                <div className='flex items-center justify-between gap-x-4 mb-8'>

                  <div className='flex'>
                    <div className='w-10 h-10 p-1 border border-gray-300  bg-black rounded-full'>
                    </div>

                    <div>
                      <div className='font-bold text-lg '>
                        <div className="h-2.5 bg-gray-700 rounded-full dark:bg-gray-700 w-48 mb-4"></div>

                      </div>
                      <div className='text-rose-700 ml-3 text-sm'>
                        <div className="h-2.5 bg-gray-700 rounded-full dark:bg-gray-700 w-48 mb-4"></div>

                      </div>
                    </div>
                  </div>

                  <div className="">
                    <div className="h-2.5 bg-gray-700 rounded-full dark:bg-gray-700 w-48 mb-4"></div>

                  </div>
                </div>

                {/* information input */}
                <form className='flex flex-col gap-y-4'
                // onSubmit={(e) => e.preventDefault()}
                >

                  <div className="h-2.5 bg-gray-700 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                  <div className="h-2.5 bg-gray-700 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                  <div className="h-2.5 bg-gray-700 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                  <div className="h-2.5 bg-gray-700 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                  <div className="h-2.5 bg-gray-700 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                  <div className="h-2.5 bg-gray-700 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                  <div className="h-2.5 bg-gray-700 rounded-full dark:bg-gray-700 w-48 mb-4"></div>

                </form>

                {/* buttons */}
                <div className='flex gap-x-2 mt-4 '>
                  <div className="h-2.5 bg-gray-700 rounded-full dark:bg-gray-700 w-48 mb-4"></div>






                  <div className="h-2.5 bg-gray-700 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                  <div className="h-2.5 bg-gray-700 rounded-full dark:bg-gray-700 w-48 mb-4"></div>

                </div>
              </div>
            </div>
          </>
      }

    </div >
  )
}
