import { ArrowRight, EllipsisVertical } from "lucide-react";
import React from "react";

function Images() {
  const imageData = [
    {
      id: 1,
      source: "/images/img1.jpg",
      name: "Anil Bhandari",
      wName: "Facebook",
      logo: <EllipsisVertical size={15} />,
    },
    {
      id: 2,
      source: "/images/img1.jpg",
      name: "Anil Bhandari",
      wName: "Facebook",
      logo: <EllipsisVertical size={15} />,
    },
    {
      id: 3,
      source: "/images/img1.jpg",
      name: "Anil Bhandari",
      wName: "Facebook",
      logo: <EllipsisVertical size={15} />,
    },
    {
      id: 4,
      source: "/images/img1.jpg",
      name: "Anil Bhandari",
      wName: "Facebook",
      logo: <EllipsisVertical size={15} />,
    },
    {
      id: 5,
      source: "/images/img1.jpg",
      name: "Anil Bhandari",
      wName: "Facebook",
      logo: <EllipsisVertical size={15} />,
    },
    {
      id: 6,
      source: "/images/img1.jpg",
      name: "Anil Bhandari",
      wName: "Facebook",
      logo: <EllipsisVertical size={15} />,
    },
  ];

  return (
    <React.Fragment>
      <div className="mt-7">
        <div className="flex items-center  gap-x-4">
          <span className="text-[1.25rem]">Images</span>
          <EllipsisVertical size={15} />
        </div>
        <div className="grid grid-cols-3 gap-5 my-4">
          {imageData?.map((image) => (
            <div className="flex flex-col gap-y-1">
              <img
                key={image.id}
                src={image.source}
                alt="image"
                className="w-[100%]  rounded-2xl"
              />
              <span className="text-sm">{image.name}</span>
              <div className="flex items-center justify-between">
                <div className="flex gap-x-2">
                  {image.logo}
                  <span className="text-xs">{image.wName}</span>
                </div>
                <EllipsisVertical size={15} />
              </div>
            </div>
          ))}
          <div className="col-span-3 my-4 flex items-center justify-center">
            <div className="w-full flex items-center">
              <div className="flex-grow h-px bg-gray-300"></div>
              <button className="gap-x-2 flex mx-4 px-28 py-2 bg-gray-100 text-sm text-black rounded-full hover:bg-gray-300 transition-colors">
                All images
                <ArrowRight />
              </button>
              <div className="flex-grow h-px bg-gray-300"></div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Images;
