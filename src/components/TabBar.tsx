import React, { useState } from "react";
import { EllipsisVertical } from "lucide-react";
import { tabs } from "./Tabs";

function TabBar({ activeTab, setActiveTab }: any) {
  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <>
      <style>
        {`
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }

          .hide-scrollbar {
            -ms-overflow-style: none;  /* Internet Explorer 10+ */
            scrollbar-width: none;  /* Firefox */
          }
        `}
      </style>
      <section className="lg:mt-24 flex justify-center lg:justify-normal">
        <div className="lg:w-full w-[90%] flex border-b-[0.25px] overflow-x-scroll border-gray-300 hide-scrollbar">
          <div className="lg:w-[13%] w-[0%]"></div>
          {tabs.map((tab) => (
            <div
              key={tab}
              className={`py-2 px-3 cursor-pointer ${
                activeTab === tab ? "border-b-[4px] border-black" : ""
              }`}
              onClick={() => handleTabClick(tab)}
            >
              <span
                className={`text-sm ${
                  activeTab === tab ? "text-black" : "text-gray-600"
                }`}
              >
                {tab}
              </span>
            </div>
          ))}
          <div className="flex items-center justify-center gap-x-1 ml-4">
            <EllipsisVertical size={15} />
            <span className="text-sm text-gray-600">More</span>
          </div>
          <div className="py-2 px-3 ml-28">
            <span className="text-sm text-gray-600">Tools</span>
          </div>
        </div>
      </section>
    </>
  );
}

export default TabBar;
