"use client";
import React, { useEffect } from "react";
import { createDocument, database } from "@/appwrite/appwrite";
import dynamic from "next/dynamic";

function Page() {
  const [items, setItems] = React.useState<Array<{
    productName: string,
    imageUrl: string,
    price: number,
    rating: number,
    anime: string,
  }>>();

  const [product, setProduct] = React.useState({
    name: "",
    price: "",
    anime: "",
    rating: "",
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();

    createDocument({ productName: product.name, price: product.price, rating: product.rating, anime: product.anime });
  };
  useEffect(() => {

    try {

      const data = database.listDocuments(String(process.env.DATABASE_ID), String(process.env.COLLECTION_ID));

      data.then(function (response: any) {
        setItems(response.documents);
      }, function (error) {
        console.log(error); // Failure
      });
    } catch (error: any) {
      console.log(error.message);

    }
  }, []);


  const deleteDocument = (DOCUMENT_ID: string) => {
    const promise = database.deleteDocument(String(process.env.DATABASE_ID), String(process.env.COLLECTION_ID), DOCUMENT_ID);

    promise.then(function (response) {
      console.log(response); // Success
    }, function (error) {
      console.log(error); // Failure
    });
  }



  return (
    <div className="max-w-7xl mx-auto mt-36" >
      <form
        name="addItem"
        onSubmit={handleSubmit}
        className="flex justify-center mb-10"
      >
        <input
          type="text"
          name=""
          placeholder="Enter product name"
          className="border p-2 w-2/3 rounded-md"
          value={product.name}
          onChange={(e) => { setProduct({ ...product, name: e.target.value }) }}
        />

        <input
          type="number"
          name=""
          placeholder="Enter price"
          className="border p-2 w-2/3 rounded-md"
          value={product.price}
          onChange={(e) => { setProduct({ ...product, price: e.target.value }) }}
        />
        <input
          type="text"
          name=""
          placeholder="Enter anime name"
          className="border p-2 w-2/3 rounded-md"
          value={product.anime}
          onChange={(e) => { setProduct({ ...product, anime: e.target.value }) }}
        />
        <input
          type="text"
          name=""
          placeholder="Enter rating"
          className="border p-2 w-2/3 rounded-md"
          value={product.rating}
          onChange={(e) => { setProduct({ ...product, rating: e.target.value }) }}
        />
        <button
          className="bg-purple-500 p-2 text-white ml-2 rounded-md"
          type="submit"
        >
          Add Product
        </button>
      </form>
      <h1 className="text-2xl font-bold">Listed Products</h1>
      <div className="flex shrink border-2 border-red-600 overflow-scroll h-72">
        {
          items?.map((item: any) => (
            <div key={item.$id}
              className="border-gray-800 m-3 p-3 border-2 text-center" >
              <h1>{item.productName}</h1>
              <h1>{item.price}</h1>
              <h1>{item.anime}</h1>
              <h1>{item.rating}</h1>
              <hr />
              <button className="bg-red-500 p-2 text-white ml-2 rounded-md" type="button" onClick={() => deleteDocument(item.$id)}>delete</button>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default dynamic(() => Promise.resolve(Page), { ssr: false })

