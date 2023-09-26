"use client";
import { account, database, logOut } from '@/appwrite/route';
import { Query } from 'appwrite';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

export default function Page() {
    const [noUser, setNoUser] = useState<boolean>(false);
    const [order, setOrder] = useState<Array<{ [key: string]: any }>>([]);
    const router = useRouter();
    const [user, setUser] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(true); // Add loading state

    useEffect(() => {
        const getUser = async () => {
            try {
                const res = await account.get();
                setUser(res);
                setNoUser(false);
            } catch (err) {
                setNoUser(true);
            } finally {
                setLoading(false); // Set loading to false when request is done
            }
        };

        getUser();
    }, []);

    const getOrder = () => {
        try {
            database
                .listDocuments(
                    String(process.env.DATABASE_ID_ORDERS),
                    String(process.env.COLLECTION_ID_ORDERS),
                    [Query.equal("email", user?.email)]
                )
                .then((res: any) => {
                    setOrder(res.documents);
                });
        } catch (error: any) {
            console.log(error.message);
        }
    };

    return (
        <div id="profile" className="w-full mt-32  lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-75 mx-6 lg:mx-0">
            {!noUser ? (
                <div className="p-4 md:p-12 text-center lg:text-left">
                    {/* Your JSX content here */}
                    {loading ? (
                        <p>Loading...</p>
                    ) : (
                        // Your user profile and order list rendering here

                        <div className="p-4 md:p-12 text-center lg:text-left">
                            {/* <!-- Image for mobile view--> */}
                            <div className="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center"
                                style={{ backgroundImage: 'url(https://randomuser.me/api/portraits/lego/0.jpg)' }}>

                            </div>


                            <h1 className="text-3xl font-bold pt-8 lg:pt-0">{user?.name}</h1>

                            <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-teal-500 opacity-25">

                            </div>
                            <p className="pt-4 text-base font-bold flex items-center justify-center lg:justify-start">

                                {/* <img className="mr-3" src="https://img.icons8.com/dusk/30/000000/new-job.png" /> */}
                                {user?.email}
                            </p>
                            <p className="pt-2 text-gray-600 text-xs lg:text-sm flex items-center justify-center lg:justify-start">
                                {/* <img className="mr-3" src="https://img.icons8.com/officel/30/000000/worldwide-location.png" /> */}
                                {user?.phone}
                            </p>
                            <p
                                className="pt-2 text-gray-600 text-xs lg:text-sm flex items-center justify-center lg:justify-start">
                                {/* <img className="mr-3" src="https://img.icons8.com/officel/30/000000/worldwide-location.png" /> */}
                                phoneVerification:   {user?.phoneVerification ? "true" : "false"}
                            </p>

                            {/*  */}

                            <div className="accordion  mt-4 text-center">
                                <div className="w-1/2" onClick={getOrder}>
                                    <input type="checkbox" name="panel" id="panel-3" className="hidden" />
                                    <label htmlFor="panel-3" id='panel-3-label' className="relative block bg-black text-white
                after:absolute after:right-4 after:text-white p-4 shadow border-b border-grey hover:bg-gray-700 cursor-pointer">
                                        My Orders
                                    </label>
                                    <div className="accordion__content overflow-scroll px-4">
                                        {order ? (
                                            order.map((item: any) => (
                                                <div className="border border-gray-300 rounded p-2 my-2" key={item.$id}>
                                                <p className="text-sm text-blue-500">Order ID: {item.product_id}</p>
                                                <p className="text-sm text-green-500">Ordered by this email: {item.email}</p>
                                                <p className="text-sm text-purple-500">Order Status: {item.order_status}</p>
                                                <p className="text-sm text-red-500">Order Date: {item.data_of_order}</p>
                                                <p className="text-sm text-yellow-500">Order Items: {item.no_of_orders}</p>
                                                <p className="text-sm text-indigo-500">Order Address: {item.address}</p>
                                                <p className="text-sm text-orange-500">Order City: {item.city}</p>
                                                <p className="text-sm text-pink-500">Order State: {item.state}</p>
                                            </div>
                                            
                                            ))
                                        ) : (
                                            <p className='text-xl'>Either you have not ordered anything or data is loading ...</p>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/*  */}
                            <p className="pt-8 text-sm">Inspire and Develop the Builders of Tomorrow</p>
                            <div className="pt-12 pb-8" onClick={() => logOut()}>
                                <button className="hover:bg-red-100 bg-red-800 hover:text-white text-white font-bold py-2 px-4 rounded-full">
                                    Log out
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            ) : (
                <div className="p-4 md:p-12 text-center lg:text-left">
                    Please sign in first!
                    <div className="pt-12 pb-8" onClick={() => router.push("login")}>
                        <button className="hover:bg-red-100 bg-red-800 hover:text-white text-white font-bold py-2 px-4 rounded-full">
                            Log in here
                        </button>
                    </div>
                </div>
            )}
        </div>

    )
}
