"use client"
import { database } from "@/appwrite/route";
import { Query } from "appwrite";
import { error } from "console";
import { useEffect, useState } from "react";
const Page = () => {
  // Initialize cart state with sample data
  const [cartItems, setCartItems] = useState<Array<{
    $id:number,
    productName: string,
    imageUrl: string,
    price: number,
    rating: number,
    anime: string,
  }>>();

  useEffect(() => {
    const getCartItems = database.listDocuments(
      String(process.env.DATABASE_ID),
      String(process.env.COLLECTION_ID),
      [Query.equal("inCart", true)]
      );
      getCartItems.then((response:any) => {
        setCartItems(response.documents);
        console.log(response);
      
      })
      .catch((error) => {
        alert(error.message);
      })
  }, []);
  // Function to remove an item from the cart
  const removeFromCart = (id: any) => {
     database.updateDocument(
      String(process.env.DATABASE_ID),
      String(process.env.COLLECTION_ID),
      String(id),
      {
        inCart: false,
      }
    ).then(() => {
      window.location.reload();
    }).catch((error)=>{
      console.log(error.message);
      
    });
  };

  // Calculate total price
  // const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div className="container mx-auto mt-32 p-4">
    <h1 className="text-2xl font-semibold mb-4">Your Cart</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {cartItems?.map((item:any) => (
        <div
          key={item.$id}
          className="bg-white  rounded-lg p-4 shadow-md flex flex-col"
        >
          <h2 className="text-lg font-semibold">{item.productName}</h2>
          <p className="text-gray-600">${item.price}</p>
          <button
            onClick={() => removeFromCart(item.$id)}
            className="mt-2 bg-red-500 text-white hover:bg-red-600 py-2 px-4 rounded-md"
          >
            Remove
          </button>
        </div>
      ))}
    </div>
    <div className="mt-4   ">
      {/* <p className="text-xl font-semibold">Total: ${totalPrice}</p> */}
      <button   className="mt-4 bg-yellow-500 text-white hover:bg-yellow-600  py-3 px-6 rounded-md">
        Proceed to Checkout
      </button>
    </div>
  </div>
  );
};

export default Page;
