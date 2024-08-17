import React from "react";

function Footer({ activeTab }: any) {
  return (
    <div>
      {activeTab !== "Images" && (
        <div className="w-full bg-gray-100 flex flex-col lg:flex-row border-b-[0.25px]  border-gray-300 mb-3 pt-2">
          <div className="lg:w-[20%] w-[100%] border-gray-300 border-r-[0.25px] flex items-center justify-center lg:justify-end pr-5 py-3">
            <span className="text-gray-600 lg:text-sm text-base">Nepal</span>
          </div>
          <div className="flex items-center justify-start ml-5 gap-x-2">
            {/* make circle  */}
            <div className="w-3 h-3 bg-black rounded-full mx-auto"></div>
            <span className="font-semibold text-sm">Salakpur</span>
            <span className="text-sm text-blue-900 ml-4 lg:ml-0">
              - The brand logos used on this website are purely for creative and
              portfolio purposes. They are not intended for commercial use.
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

export default Footer;
