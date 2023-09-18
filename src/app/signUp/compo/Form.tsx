"use client";
import Link from "next/link";
import React, { useState } from "react";
import account from "@/appwrite/appwrite";
import { ID } from "appwrite";
import { useRouter } from "next/navigation";


export default function Form() {
    const [email, setEmail] = useState("");
    const [name,setName] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();
// 
  const handleSubmit = async (e:any) => {
    e.preventDefault();
    try {
      await account.create(ID.unique(), email, password ,name).then((res:any) => {
        router.push("/");
      })
    } catch (error:any) {
      console.log(error);
      if (
        "Invalid password: Password must be at least 8 characters" ===
        error.message
        ) {
          alert("Invalid password: Password must be at least 8 characters");
        }
        else{
          alert(error.message);
        }
      }
  };
  return (
    <div className="space-y-4 md:space-y-6" >
      {/* email */}
      <div>
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Your email
        </label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          id="email"
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="name@company.com"
          required
        />
      </div>
      {/* username */}
      <div>
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Your Name
        </label>
        <input
          type="email"
          name="email"
          value={name}
          onChange={(e)=>setName(e.target.value)}
          id="email"
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Light yagami"
          required
        />
      </div>
      {/* password */}
      <div>
        <label
          htmlFor="password"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Password
        </label>
        <input
          type="password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          name="password"
          id="password"
          placeholder="••••••••"
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
        />
      </div>
      {/* confirm password  */}
      <div>
        <label
          htmlFor="confirm-password"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Confirm password
        </label>
        <input
          type="confirm-password"
          name="confirm-password"
          id="confirm-password"
          placeholder="••••••••"
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
        />
      </div>
      {/* accept the terms and conditions */}
     
      {/* submit button  */}
      <button
        type="submit"
        onClick={handleSubmit}
        className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
      >
        Create an account
      </button>
      <div className="text-sm font-light flex text-gray-500 dark:text-gray-400">
        Already have an account?
          <div className="font-medium pl- text-gray-200 text-primary-600 hover:underline dark:text-primary-500">
        <Link href={"/signin"}>
            Login here
        </Link>
          </div>
      </div>
    </div>
  );
}



