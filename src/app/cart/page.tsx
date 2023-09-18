"use client";
import { useMyContext } from '@/redux/MyContext';
import React from 'react'
export default function page() {
  const {user, setUser} = useMyContext();
// setUser("XXXX");

  return (
    <div>
  {/* {user}     */}
      
    </div>
  )
}
