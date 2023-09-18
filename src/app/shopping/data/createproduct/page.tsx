"use client";
import React, { useState } from "react";
import { createDocument } from "@/appwrite/appwrite";
export default function page() {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    anime: "",
    rating:"",
});

  const handleSubmit = (e: any) => {
    e.preventDefault();
     createDocument({productName:product.name ,price:product.price,animeName: product.anime, rating:product.rating});
  };
  return (
    <div className="max-w-7xl mx-auto mt-36">
      <form
        
        onSubmit={handleSubmit}
        className="flex justify-center mb-10"
      >
        <input
          type="text"
          name=""
          placeholder="Enter product name"
          className="border p-2 w-2/3 rounded-md"
          value={product.name}
          onChange={(e) => {setProduct({...product, name:e.target.value})}}
        />
        
        <input
          type="number"
          name=""
          placeholder="Enter price"
          className="border p-2 w-2/3 rounded-md"
          value={product.price}
          onChange={(e) => {setProduct({...product, price:e.target.value})}}
        />
        <input
          type="text"
          name=""
          placeholder="Enter anime name"
          className="border p-2 w-2/3 rounded-md"
          value={product.anime}
          onChange={(e) => {setProduct({...product, anime:e.target.value})}}
        />
        <input
          type="text"
          name=""
          placeholder="Enter rating"
          className="border p-2 w-2/3 rounded-md"
          value={product.rating}
          onChange={(e) => {setProduct({...product, rating:e.target.value}) }}
        />
        <button
          className="bg-purple-500 p-2 text-white ml-2 rounded-md"
          type="submit"
        >
          Add Product
        </button>
      </form>
    </div>
  );
}
