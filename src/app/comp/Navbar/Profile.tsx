import { logOut } from '@/appwrite/appwrite'
import React from 'react'
import { BiUser } from 'react-icons/bi'

export default function Profile() {

  return (
    <div className=''>
      <div className="pl-1 text-center group text-xl">

        <BiUser />
        <div className="hidden hover:block group-hover:block absolute right-0 mt-2 w-48 mr-3 bg-white border rounded-lg shadow-lg">
          <div className="py-2">
            {/* <Link href={"/login"}> */}
              <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Profile</div>
            {/* </Link> */}
            <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={()=>{logOut() }}>Log Out</div>
          </div>
        </div>
      </div>

      <span>Profile</span>

    </div>
  )
}
