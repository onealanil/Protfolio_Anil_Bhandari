import React, { useState } from "react";
import { EllipsisVertical } from "lucide-react";

const tabs = ["All", "Images", "Videos", "News", "Maps", "Books", "Web"];

function TabBar() {
  const [activeTab, setActiveTab] = useState("All");

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <section className="mt-24">
      <div className="w-full flex border-b-[0.25px] border-gray-300">
        <div className="w-[13%]"></div>
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
  );
}

export default TabBar;
