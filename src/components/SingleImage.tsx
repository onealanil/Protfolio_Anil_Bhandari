import React from "react";
import {
  X,
  ChevronLeft,
  ChevronRight,
  MoreVertical,
  Share,
  Bookmark,
} from "lucide-react";
import Image from "next/image";

const SingleImage = ({ imageData, setViewSingleImage }: any) => {
  return (
    <div className="lg:max-w-lg lg:mx-auto bg-transparent backdrop-blur-[0.75px] bg-opacity-20 lg:bg-white shadow-lg rounded-lg overflow-hidden fixed inset-0 lg:relative lg:inset-auto z-50 lg:z-auto">
      <div className="min-h-screen lg:min-h-0 flex items-center justify-center p-4 lg:p-0">
        <div className="w-full max-w-lg bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="flex items-center justify-between p-4 bg-gray-100">
            <div className="flex items-center space-x-2">
              <Image
                src={imageData?.logo}
                alt="IoT Logo"
                width={30}
                height={30}
                className="rounded-full bg-gray-200 px-1 py-1"
              />
              <span className="font-medium">{imageData?.wName}</span>
            </div>
            <div className="flex items-center space-x-2">
              <button className="p-1 hover:bg-gray-200 rounded-full">
                <ChevronLeft size={20} />
              </button>
              <button className="p-1 hover:bg-gray-200 rounded-full">
                <ChevronRight size={20} />
              </button>
              <button className="p-1 hover:bg-gray-200 rounded-full">
                <MoreVertical size={20} />
              </button>
              <button 
                className="p-1 hover:bg-gray-200 rounded-full"
                onClick={() => setViewSingleImage(false)}
              >
                <X size={20} />
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-w-1 aspect-h-1 bg-gray-200">
              <Image
                src={imageData?.source}
                alt="Placeholder"
                className="object-cover w-full h-full"
                width={400}
                height={400}
              />
            </div>
            <button className="absolute bottom-4 left-4 bg-white rounded-full p-2 shadow-md">
              <Share size={20} />
            </button>
          </div>

          <div className="p-4">
            <div className="flex gap-x-4 items-center ">
              <p className="text-sm text-gray-600 mb-4 w-[80%]">
                {imageData?.name}
              </p>
              <button className="px-6 py-2 flex justify-center items-center gap-x-1 bg-blue-500 text-white text-sm rounded-full hover:bg-blue-600">
                Visit
                <ChevronRight className="text-sm" size={18} />
              </button>
            </div>
            <div className="flex justify-between">
              <div className="flex space-x-2">
                <button className="p-2 hover:bg-gray-100 rounded-full">
                  <Share size={20} />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-full">
                  <Bookmark size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleImage;