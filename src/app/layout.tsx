import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Anil Bhandari | Personal Portfolio",
  description:
    "Anil Bhandari is a full stack developer and a passionate creator of innovative web solutions.",
  keywords: [
    "Anil Bhandari",
    "Full Stack Developer",
    "MERN Stack Developer",
    "Software Engineer",
    "Web Development",
    "JavaScript",
    "React",
    "Node.js",
    "MongoDB",
    "Portfolio",
  ],
  openGraph: {
    title: "Anil Bhandari | Personal Portfolio",
    description:
      "Anil Bhandari is a full stack developer and a passionate creator of innovative web solutions.",
    url: "https://www.anilbhandari.com.np/",
    siteName: "Anil Bhandari Portfolio",
    images: [
      {
        url: "/images/img1.jpg",
        width: 1200,
        height: 630,
        alt: "Anil Bhandari - Full Stack Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anil Bhandari | Personal Portfolio",
    description:
      "Anil Bhandari is a full stack developer and a passionate creator of innovative web solutions.",
    images: ["https://x.com/AnilBhanda78713/photo"],
  },
  alternates: {
    canonical: "https://www.anilbhandari.com.np/",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Anil Bhandari",
      url: "https://www.anilbhandari.com.np/",
      sameAs: [
        "https://www.linkedin.com/in/anilbhandari24/",
        "https://github.com/onealanil",
      ],
      jobTitle: "Full Stack Developer",
      description:
        "Passionate Full Stack Developer with expertise in JavaScript, React, Node.js, and MongoDB.",
      image: "https://x.com/AnilBhanda78713/photo",
    }),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
