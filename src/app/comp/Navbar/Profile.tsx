import { logOut } from '@/appwrite/route'
import React, { useState } from 'react' // Import useState
import { BiUser } from 'react-icons/bi'

export default function Profile() {
  // Add a state variable to control the popup visibility
  const [isPopupVisible, setPopupVisible] = useState(false);

  // Function to toggle the popup visibility
  const togglePopup = () => {
    setPopupVisible(!isPopupVisible);
  };

  return (
    <div className='relative'>
      <div className="pl-1 text-center group text-xl" onMouseEnter={togglePopup} onMouseLeave={togglePopup}>
        <BiUser />
        {/* Use conditional rendering to show/hide the popup */}
        {isPopupVisible && (
          <div className="absolute right-0 mt-0 w-48 mr-3  bg-white border rounded-lg shadow-lg">
            <div className="py-2">
              <div className="px-4 py-2 hover:bg-gray-400 cursor-pointer">Profile</div>
              <div className="px-4 py-2 hover:bg-red-900 hover:text-white cursor-pointer" onClick={() => { logOut() }}>Log Out</div>
            </div>
          </div>
        )}
      </div>

      <span>Profile</span>
    </div>
  )
}
