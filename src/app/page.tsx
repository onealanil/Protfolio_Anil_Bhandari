"use client";

import React from "react";
import Image from "next/image";
import Header from "../components/Header";
import TabBar from "@/components/TabBar";

export default function Home() {
  return (
    <main className="min-h-screen items-center bg-white">
      <Header />
      <TabBar/>
    </main>
  );
}
