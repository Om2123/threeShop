"use client";
import { account, logOut } from '@/appwrite/appwrite'
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'
export default function page() {
    const [noUser, setNoUser] = React.useState<boolean>();
    const router=useRouter();
    const [user, setUser] = React.useState<any>(null);
    useEffect(() => {
        account.get().then(res => {
            setUser(res);
        }).catch(er => setNoUser(true)
        )
    })
    return (

        // <div className="max-w-4xl flex items-center h-auto lg:h-screen flex-wrap mx-auto my-32 lg:my-0 shadow-xl">


        <div id="profile" className="w-full mt-32  lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-75 mx-6 lg:mx-0">

            {
                noUser ?
                    <div className="p-4 md:p-12 text-center lg:text-left">
                        {/* <!-- Image for mobile view--> */}
                        <div className="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center"
                            style={{ backgroundImage: 'url(https://randomuser.me/api/portraits/lego/0.jpg)' }}></div>


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
                        <p className="pt-8 text-sm">Inspire and Develop the Builders of Tomorrow</p>

                        <div className="pt-12 pb-8" onClick={() => logOut()}>
                            <button className="hover:bg-red-100 bg-red-800 hover:text-white text-white font-bold py-2 px-4 rounded-full">
                                Log out
                            </button>
                        </div>


                    </div>
                    :
                    <div className="p-4 md:p-12 text-center lg:text-left">
                        Please sign in first !
                        <div className="pt-12 pb-8" onClick={()=> router.push("login")}>
                            <button className="hover:bg-red-100 bg-red-800 hover:text-white text-white font-bold py-2 px-4 rounded-full">
                                Log in here
                            </button>
                        </div>
                    </div>
            }

        </div>




    )
}
