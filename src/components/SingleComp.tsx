import React from "react";
import { X, MoreVertical } from "lucide-react";
import Image from "next/image";
import Project from "./Project";
import Experience from "./Experience";
import Collage from "./Collage";
import Skills from "./Skills";
import CV from "./CV";

const SingleComp = ({ onClose, singleData }: any) => {
  const openInNewTab = (url: string) => {
    window.open(url, "_blank", "noreferrer");
  };

  return (
    <div
      className={`${
        singleData?.name === "GitHub" ||
        singleData?.name === "LinkedIn - Anil Bhandari"
          ? "h-auto max-h-[90vh] lg:max-h-[80vh]"
          : "h-[30rem] lg:h-[40rem]"
      } lg:max-w-lg lg:mx-auto w-[100%] bg-white shadow-lg rounded-lg overflow-hidden flex flex-col`}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 bg-gray-100">
        <div className="flex items-center space-x-4">
          <Image
            src={singleData?.photo}
            alt="IoT Logo"
            width={30}
            height={30}
            className="rounded-full bg-gray-200 px-1 py-1"
          />
          <span className="font-medium">{singleData?.name}</span>
        </div>
        <div className="flex items-center space-x-4">
          <button className="p-1 hover:bg-gray-200 rounded-full ml-4">
            <MoreVertical size={20} />
          </button>
          <button
            className="p-1 hover:bg-gray-200 rounded-full"
            onClick={onClose}
          >
            <X size={20} />
          </button>
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="flex-grow overflow-y-auto p-5">
        {(singleData?.name === "LinkedIn - Anil Bhandari" ||
          singleData?.name === "GitHub") && (
          <div
            className="mb-5"
            role="link"
            onClick={() =>
              openInNewTab(
                `${
                  singleData?.name !== "GitHub"
                    ? "https://www.linkedin.com/in/anilbhandari24/"
                    : singleData?.link
                }`
              )
            }
          >
            <span className="flex items-center justify-center bg-gray-200 cursor-pointer hover:bg-gray-300 rounded-full p-3">
              {singleData?.name === "GitHub"
                ? "Open in Github"
                : "Open in LinkedIn"}
              <Image
                src={singleData?.photo}
                alt="IoT Logo"
                width={40}
                height={40}
                className="rounded-full px-1 py-1"
              />
            </span>
          </div>
        )}
        {singleData?.name === "Projects" && <Project />}
        {singleData?.name === "Experience" && <Experience />}
        {singleData?.name ===
          "Itahari International Collage - Anil Bhandari" && <Collage />}
        {singleData?.name === "Anil Bhandari - Skills" && <Skills />}
        {/* {singleData?.name === "Anil Bhandari" && <CV />} */}
      </div>
    </div>
  );
};

export default SingleComp;
