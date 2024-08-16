import React, { useState, useEffect } from "react";
import Image from "next/image";
import SearchBar from "./SearchBar";

function MobHeader() {
  return (
    <header
      className={` ${"bg-white py-3"}`}
    >
      <div className="flex flex-col items-center justify-between w-full px-6">
        <div className="w-full flex justify-between items-center mb-3">
          <div className="w-10"></div> {/* Spacer */}
          <div
            className={`relative ${"w-[10.5rem] h-[4.5rem]"} transition-all duration-300`}
          >
            <Image
              src="/google.png"
              alt="Google"
              layout="fill"
              objectFit="contain"
              priority
            />
          </div>
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <Image
              src="https://res.cloudinary.com/dcnm2ql9y/image/upload/v1718208300/z3exzrbgzbiknafr6l5f.jpg"
              alt="User"
              width={40}
              height={40}
              className="rounded-full"
            />
          </button>
        </div>
        <SearchBar />
      </div>
    </header>
  );
}

export default MobHeader;
