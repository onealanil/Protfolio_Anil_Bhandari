import React from "react";
import Image from "next/image";
import SearchBar from "./SearchBar";
import { Grip, User } from "lucide-react";

function Header() {
  return (
    <div className="flex items-center justify-between w-full px-6 py-3 mt-1">
      <div className="flex items-center gap-x-5">
        <div className="relative w-[10.5rem] h-[4.5rem] ml-5">
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
  );
}

export default Header;
