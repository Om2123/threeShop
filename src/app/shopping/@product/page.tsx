"use client"
import React, { useEffect, useState } from 'react'
import Item from '../compo/Item'
import { database } from '@/appwrite/appwrite';

export default function Page() {
  const [productList, setProduct] = useState<any>([]);
  useEffect(() => {
    // Fetching a list of documents from the database
    
    database.listDocuments(String(process.env.DATABASE_ID), String(process.env.COLLECTION_ID))
      .then((res) => {
        setProduct(res.documents);
      })
      .catch((er) => console.log(er.message));
  }, []);
  return (
    <div>{
      productList?.map((item: any) => (
        <div key={item.$id}>
          {/* Item Component */}
          <Item item={item} />
          {/* Button to show cookies */}
        </div>
      ))
    }</div>
  )
}
