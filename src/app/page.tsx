"use client";

import React from "react";
import Image from "next/image";
import Header from "../components/Header";
import TabBar from "@/components/TabBar";
import Suggestion from "@/components/Suggestion";
import Images from "@/components/Images";
import Results from "@/components/Results";
import Footer from "@/components/Footer";
import MobHeader from "@/components/MobHeader";
import SingleImage from "@/components/SingleImage";

export interface IimageData {
  id: number;
  source: string;
  name: string;
  wName: string;
  logo: string;
}

export default function Home() {
  const [imageData, setImageData] = React.useState<IimageData[]>([]);
  const [viewSingleImage, setViewSingleImage] = React.useState<boolean>(false);

  return (
    <main className="min-h-screen items-center bg-white">
      <div className="hidden lg:block">
        <Header />
      </div>
      <div className="lg:hidden block">
        <MobHeader />
      </div>
      <TabBar />
      <div className="w-full flex justify-center lg:justify-normal">
        {/* gap */}
        <div className="w-[13%] hidden lg:block"></div>
        <div className="w-[90%] lg:w-[35%]">
          <Suggestion />
          <Images setViewSingleImage={setViewSingleImage} setImageData={setImageData} />
          <Results />
        </div>
        <div className="lg:ml-8 lg:mt-9">{viewSingleImage && imageData && <SingleImage imageData={imageData} setViewSingleImage={setViewSingleImage} />}</div>
      </div>
      <Footer />
    </main>
  );
}
