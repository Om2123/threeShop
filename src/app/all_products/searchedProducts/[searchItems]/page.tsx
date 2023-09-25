"use client";
import { useParams } from 'next/navigation'
import React from 'react'


export default function Page() {
    const para = useParams();
    // const query = para.searchItems.replace(/%20/g, " ");

    
  return (
    <div>Page</div>
  )
}
