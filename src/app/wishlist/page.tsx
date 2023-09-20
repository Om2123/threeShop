"use client";

import { getUser } from '@/appwrite/appwrite';
import MyContext from '@/myContext/MyContext';
import React, { useContext, useEffect, useState } from 'react'

export default function Page() {
  // const { setUser } = useContext(MyContext);
  // useEffect(() => {
  //   try {

  //     const d = getUser()
  //     d.then(res => {
  //       setUser(res);
  //     }).catch((err) => {
  //       console.log(err);

  //     })
  //   } catch (error) {
  //     console.log(error);

  //   }

  // })


  const [visible, setVisible] = useState(false)


  return (
    <div className='pt-72 '>


    </div>
  )
}

