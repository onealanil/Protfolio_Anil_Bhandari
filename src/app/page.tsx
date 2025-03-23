"use client";

import React from "react";
import Header from "../components/Header";
import TabBar from "@/components/TabBar";
import Suggestion from "@/components/Suggestion";
import Images from "@/components/Images";
import Results from "@/components/Results";
import Footer from "@/components/Footer";
import MobHeader from "@/components/MobHeader";
import SingleImage from "@/components/SingleImage";
import Head from "next/head";

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
  const [activeTab, setActiveTab] = React.useState("All");

  return (
    <>
      <Head>
        <title>Anil Bhandari - Full-Stack MERN Developer</title>
        <meta
          name="description"
          content="Anil Bhandari is a passionate Full-Stack MERN Developer with expertise in Java, Python, JavaScript, Node.js, Express.js, MongoDB, and React. Explore my portfolio and projects."
        />
        <meta
          name="keywords"
          content="Anil Bhandari, Full-Stack Developer, MERN Developer, Software Engineer, Portfolio, Web Development, JavaScript, React, Node.js, MongoDB"
        />
        <meta
          property="og:title"
          content="Anil Bhandari - Full-Stack MERN Developer"
        />
        <meta
          property="og:description"
          content="Anil Bhandari is a passionate Full-Stack MERN Developer with expertise in Java, Python, JavaScript, Node.js, Express.js, MongoDB, and React. Explore my portfolio and projects."
        />
        <meta property="og:image" content="/images/img1.jpg" />
        <meta property="og:url" content="https://www.anilbhandari.com.np/" />
        <meta name="twitter:card" content="/images/img1.jpg" />
        <meta
          name="twitter:title"
          content="Anil Bhandari - Full-Stack MERN Developer"
        />
        <meta
          name="twitter:description"
          content="Anil Bhandari is a passionate Full-Stack MERN Developer with expertise in Java, Python, JavaScript, Node.js, Express.js, MongoDB, and React. Explore my portfolio and projects."
        />
        <meta
          name="twitter:image"
          content="https://x.com/AnilBhanda78713/photo"
        />
        <link rel="canonical" href="https://x.com/AnilBhanda78713" />

        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Anil Bhandari",
      "url": "https://www.anilbhandari.com.np/",
      "sameAs": [
        "https://www.linkedin.com/in/anilbhandari24/",
        "https://github.com/onealanil"
      ],
      "jobTitle": "Full-Stack MERN Developer",
      "description": "Passionate Full-Stack MERN Developer with expertise in Java, Python, JavaScript, Node.js, Express.js, MongoDB, and React.",
      "image": "https://x.com/AnilBhanda78713/photo"
    }
  `}
        </script>
      </Head>

      {/* code started  */}
      <main className="min-h-screen items-center bg-white">
        <div className="hidden lg:block">
          <Header />
        </div>
        <div className="lg:hidden block">
          <MobHeader />
        </div>
        <TabBar activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className="w-full flex justify-center lg:justify-normal">
          {/* gap */}
          <div className="w-[13%] hidden lg:block"></div>
          <div className="w-[90%] lg:w-[35%]">
            {activeTab === "Images" ? (
              <Images
                activeTab={activeTab}
                setViewSingleImage={setViewSingleImage}
                setImageData={setImageData}
              />
            ) : (
              <>
                <Suggestion />
                <Images
                  setViewSingleImage={setViewSingleImage}
                  setImageData={setImageData}
                />
                <Results />
              </>
            )}
          </div>
          <div className="lg:ml-8 lg:mt-9">
            {viewSingleImage && imageData && (
              <SingleImage
                imageData={imageData}
                setViewSingleImage={setViewSingleImage}
              />
            )}
          </div>
        </div>
        <Footer activeTab={activeTab} />
      </main>
    </>
  );
}
