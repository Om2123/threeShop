import Image from "next/image";
import React from "react";
import { BiSolidQuoteAltLeft } from "react-icons/bi";

export default function Testimonals() {
  return (
    <section className="text-neutral-700 mt-20 dark:text-neutral-300 md:mx-10">
      <div className="mx-auto text-center md:max-w-xl lg:max-w-3xl">
        <h3 className="mb-6 text-3xl text-neutral-900 font-bold">
          Testimonials
        </h3>
        <p className="mb-6 pb-2 md:mb-12 text-neutral-900 md:pb-0">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error
          amet numquam iure provident voluptate esse quasi, veritatis totam
          voluptas nostrum quisquam eum porro a pariatur veniam.
        </p>
      </div>

      {/* <!--First Testimonial--> */}
      <div className="grid gap-6 text-center md:grid-cols-3">
        <div className="flex justify-center">
          <div className="block max-sm:w-96 rounded-lg bg-white shadow-lg dark:bg-neutral-700 dark:shadow-black/30">
            <div className="h-28 overflow-hidden rounded-t-lg bg-gray-400"></div>
            <div className="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-white bg-white dark:border-neutral-800 dark:bg-neutral-800">
              <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
               

              </div>{" "}
            </div>
            <div className="p-6">
              <h4 className="mb-4 text-2xl font-semibold">sanday</h4>
              <hr />
              <p className="mt-4">
                <BiSolidQuoteAltLeft/>
                Lorem ipsum dolor sit amet eos adipisci, consectetur adipisicing
                elit.
              </p>
            </div>
          </div>
        </div>

        {/* <!--Second Testimonial--> */}
        <div className="flex justify-center">
          <div className="block max-sm:w-96 rounded-lg bg-white shadow-lg dark:bg-neutral-700 dark:shadow-black/30">
            <div className="h-28 overflow-hidden rounded-t-lg bg-gray-400"></div>
            <div className="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-white bg-white dark:border-neutral-800 dark:bg-neutral-800">
              <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
               
               {/* user pic */}
              </div>{" "}
            </div>
            <div className="p-6">
              <h4 className="mb-4 text-2xl font-semibold">monday</h4>
              <hr />
              <p className="mt-4">
                
                  <BiSolidQuoteAltLeft/>
                Neque cupiditate assumenda in maiores repudi mollitia
                architecto.
              </p>
            </div>
          </div>
        </div>

        {/* <!--Third Testimonial--> */}
        <div className="flex justify-center">
          <div className="block rounded-lg max-sm:w-96 bg-white shadow-lg dark:bg-neutral-700 dark:shadow-black/30">
            <div className="h-28 overflow-hidden rounded-t-lg bg-gray-400"></div>
            <div className="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-white bg-white dark:border-neutral-800 dark:bg-neutral-800">
              <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
               
               {/* user pic */}
              </div>{" "}
            </div>
            <div className="p-6">
              <h4 className="mb-4 text-2xl font-semibold">tuesday</h4>
              <hr />
              <p className="mt-4">
               <BiSolidQuoteAltLeft/>
                Delectus impedit saepe officiis ab aliquam repellat rem unde
                ducimus.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
