import { ArrowRight, EllipsisVertical } from "lucide-react";
import Image from "next/image";
import React from "react";

function Images() {
  const imageData = [
    {
      id: 1,
      source: "/images/img1.jpg",
      name: "Anil Bhandari",
      wName: "Facebook",
      logo: "/facebook.png",
    },
    {
      id: 2,
      source: "/images/img2.JPG",
      name: "Recieving scholarship",
      wName: "Scholarship",
      logo: "/scholar.png",
    },
    {
      id: 3,
      source: "/images/img3.JPG",
      name: "With my mother",
      wName: "Mother",
      logo: "/mother.png",
    },
    {
      id: 4,
      source: "/images/img4.jpeg",
      name: "Wininng Hackathon",
      wName: "Hackathon",
      logo: "/award.png",
    },
    {
      id: 5,
      source: "/images/img5.jpeg",
      name: "Giving presentation",
      wName: "Presentation",
      logo: "/speech.png",
    },
    {
      id: 6,
      source: "/images/img6.jpeg",
      name: "IoT project",
      wName: "IoT",
      logo: "/iot.png",
    },
  ];

  return (
    <React.Fragment>
      <div className="mt-7">
        <div className="flex items-center gap-x-4">
          <span className="text-[1.25rem]">Images</span>
          <EllipsisVertical size={15} />
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 my-4">
          {imageData?.map((image) => (
            <div key={image.id} className="flex flex-col gap-y-1 cursor-pointer">
              <div className="relative w-full aspect-square">
                <Image
                  src={image.source}
                  alt={image.name}
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                  priority
                  className="object-cover rounded-2xl"
                />
              </div>
              <span className="text-xs lg:text-sm">{image.name}</span>
              <div className="flex items-center justify-between">
                <div className="flex gap-x-2 items-center">
                  <div className="relative w-4 h-4">
                    <Image
                      src={image.logo}
                      alt={`${image.wName} logo`}
                      fill
                      sizes="16px"
                      className="rounded-full"
                    />
                  </div>
                  <span className="text-xs">{image.wName}</span>
                </div>
                <EllipsisVertical size={15} />
              </div>
            </div>
          ))}
        </div>
        <div className="my-4 flex items-center justify-center">
          <div className="w-full flex items-center">
            <div className="flex-grow h-px bg-gray-300"></div>
            <button className="gap-x-2 flex mx-4 px-14 lg:px-28 py-2 bg-gray-100 text-sm text-black rounded-full hover:bg-gray-300 transition-colors">
              All images
              <ArrowRight />
            </button>
            <div className="flex-grow h-px bg-gray-300"></div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Images;