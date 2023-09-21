"use client";
import React, { useEffect, useState } from 'react';
import { database } from '@/appwrite/appwrite';
import Filters from './compo/Filters';
import Item from './compo/Item';
import Footer from '../comp/Footer';
import Pagination from './compo/Pagination';
import { getCookies } from 'cookies-next';

export default function Page() {
  // State to store the list of products
  const [productList, setProduct] = useState<any>([]);

  useEffect(() => {
    // Fetching a list of documents from the database
    
    database.listDocuments(String(process.env.DATABASE_ID), String(process.env.COLLECTION_ID))
      .then((res) => {
        setProduct(res.documents);
      })
      .catch((er) => console.log(er.message));
  }, []);

  // Function to get product details from cookies
  
  const getProductDetailCookie = () => {
    const cookieValue = getCookies();
    if (cookieValue) {
      console.log(cookieValue);
    }
  };

  return (
    <div className='relative top-40 '>
      <div className='flex'>
        {/* Filters Component */}
        <div>
          <Filters />
        </div>
        {/* Products */}
        <div className='md:basis-9/12 hover:shadow-2xl border-slate-100 border-2'>
          {
            productList?.map((item: any) => (
              <div key={item.$id}>
                {/* Item Component */}
                <Item item={item} />
                {/* Button to show cookies */}
              </div>
            ))
          }
        </div>
      </div>
      {/* Pagination Component */}
      <div className='flex justify-center m-3 pb-5'>
        <Pagination />
      </div>
      {/* Footer Component */}
      <Footer />
    </div>
  )
}
