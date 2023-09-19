"use client";

import { getUser } from '@/appwrite/appwrite';
import MyContext from '@/myContext/MyContext';
import React, { useContext, useEffect } from 'react'

export default function page() {
  const { user, setUser } = useContext(MyContext);
  useEffect(() => {
    try {
      
      const d = getUser()
      d.then(res => {
        setUser(res);
      }).catch((err)=>{
        console.log(err);
        
      })
    } catch (error) {
      console.log(error);
      
    }

  }, [])




  return (
    <div className='pt-72 '>
      <h1 className='text-3xl text-center text-black bg-blue-500'>

        {
          user?.name
        }
      </h1>
    </div>
  )
}
