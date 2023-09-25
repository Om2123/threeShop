"use client";
import React, {  useState } from "react";
import {useRouter} from "next/navigation"

export default function Banner() {
  const [searchText, setSearchText] = useState("");
  const router = useRouter();

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {if (e.key === "Enter") {router.push(`/all_products/searchedProducts/${searchText}` )}};

  return (
    <div
      className=" bg-cover w-full h-[550px] max-sm:h-80 bg-no-repeat "
      style={{
        backgroundImage: `url(https://images8.alphacoders.com/546/546902.jpg)`,
      }}
      id="banner"
    >
      <div className=" max-sm:hidden flex justify-center items-center  relative top-96 stroke-neutral-950">
        <div className="relative mb-3" data-te-input-wrapper-init>
          <input
            type="search"
            className="peer block min-h-[auto] bg-zinc-700 text-white w-full rounded border-0 bg-transparent
             px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear
              focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none
                [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <label
            htmlFor="exampleSearch2"
            className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] font-black transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none text-white dark:peer-focus:text-primary"
          >
            Search
          </label>
        </div>
      </div>
    </div>
  );
}
