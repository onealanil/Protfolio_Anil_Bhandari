import React, { useState, useEffect } from "react";
import Image from "next/image";
import SearchBar from "./SearchBar";
import { Grip } from "lucide-react";

export default function Header() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsSticky(offset > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isSticky ? "bg-white shadow-md py-2" : "bg-white py-3"
      }`}
    >
      <div className="flex items-center justify-between w-full px-6">
        <div className="flex items-center gap-x-5">
          <div
            className={`relative ${
              isSticky ? "w-[10.5rem] h-[4.5rem]" : "w-[10.5rem] h-[4.5rem]"
            } ml-5 transition-all duration-300`}
          >
            <Image
              src="/google.png"
              alt="Google"
              layout="fill"
              objectFit="contain"
              priority
            />
          </div>
          <SearchBar />
        </div>
        <div className="flex items-center space-x-2">
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <Grip className="h-6 w-6 text-gray-600" />
          </button>
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
      </div>
    </header>
  );
}
