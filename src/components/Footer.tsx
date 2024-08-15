import React from "react";

function Footer() {
  return (
    <div className="w-full bg-gray-100 flex border-b-[0.25px] border-gray-300 mb-3 pt-2">
      <div className="w-[20%] border-gray-300 border-r-[0.25px] flex items-center justify-end pr-5 py-3">
        <span className="text-gray-600 text-sm">Nepal</span>
      </div>
      <div className="flex items-center justify-start ml-5 gap-x-2">
        {/* make circle  */}
        <div className="w-3 h-3 bg-black rounded-full mx-auto"></div>
        <span className="font-semibold text-sm">Salakpur</span>
        <span className="text-sm text-blue-900">
          - The brand logos used on this website are purely for creative and
          portfolio purposes. They are not intended for commercial use.
        </span>
      </div>
    </div>
  );
}

export default Footer;
