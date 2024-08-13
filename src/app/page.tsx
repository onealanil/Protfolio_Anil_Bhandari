"use client";

import React from "react";
import Image from "next/image";
import Header from "../components/Header";
import TabBar from "@/components/TabBar";
import Suggestion from "@/components/Suggestion";
import Images from "@/components/Images";

export default function Home() {
  return (
    <main className="min-h-screen items-center bg-white">
      <Header />
      <TabBar />
      <div className="w-full flex">
        {/* gap */}
        <div className="w-[13%]"></div>
        <div className="w-[35%]">
          <Suggestion />
          <Images/>
        </div>
      </div>
    </main>
  );
}
