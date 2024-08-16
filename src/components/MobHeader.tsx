import React from "react";
import Image from "next/image";
import SearchBar from "./SearchBar";
import { FlaskConical } from "lucide-react";

function MobHeader() {
  return (
    <header className="bg-white py-3">
      <div className="flex flex-col items-center justify-between w-full px-6">
        <div className="w-full flex justify-between items-center mb-3">
          <div className="flex items-center justify-center w-10">
            <FlaskConical size={28} className="text-gray-500" />
          </div>
          <div className="flex-grow flex justify-center">
            <div className="relative w-[10.5rem] h-[4.5rem]">
              <Image
                src="/google.png"
                alt="Google"
                layout="fill"
                objectFit="contain"
                priority
              />
            </div>
          </div>
          <button className="w-10 h-10 p-1 hover:bg-gray-100 rounded-full overflow-hidden">
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
