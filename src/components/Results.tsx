import { EllipsisVertical } from "lucide-react";
import React from "react";
import GoogleStyle from "./GoogleStyle";
import Numbering from "./Numbering";
// https://www.linkedin.com/in/anilbhandari24/

function Results() {
  const resultsData = [
    {
      id: 1,
      photo: "/linkedin.png",
      name: "LinkedIn - Anil Bhandari",
      link: "300+ followers",
      title: "Anil Bhandari - Software Engineer",
      body: "As a passionate and dedicated Full-Stack MERN Developer, I thrive on building scalable web applications and innovative solutions. With a robust background in Java, Python, and JavaScript, I excel in creating seamless, user-friendly experiences. My expertise spans across various technologies and tools including Node.js, Express.js, MongoDB, React",
    },
    {
      id: 2,
      photo: "/github.png",
      name: "GitHub",
      link: "https://github.com > onealanil",
      title: "Anil Bhandari onealanil",
      body: "NepalKamma is an Android app designed to address the unemployment issue in Nepal by connecting job seekers with short-term or gig-based employment opportunities",
    },
    {
      id: 3,
      photo: "/research.png",
      name: "Anil Bhandari",
      link: "https://www.downloadcv.com > Anil Bhandari",
      title: "(PDF) CURRICULUM VITAE (CV)",
      body: "Download Anil Bhandari's CV in PDF format. Click here to download the PDF file. You can find my education, work experience, and projects in this CV.",
    },
    {
      id: 4,
      photo: "/skills.png",
      name: "Anil Bhandari - Skills",
      link: "https://www.skills.com/in/anilbhandari",
      title: "Check out Anil Bhandari's Skills",
      body: "I have a wide range of skills in software development, including web development, mobile app development, and more. Check out my skills and see how I can help you with your next project.",
    },
    {
      id: 5,
      photo: "/education.png",
      name: "Itahari International Collage - Anil Bhandari",
      link: "https://www.education.com/in/anil-bhandari-1a",
      title: "(Education) of Anil Bhandari",
      body: "I have a Bachelor's degree in Bsc(Hons) Computing from the University of London met (Itahari International Collage). I have also completed a number of online courses in software development and programming languages.",
    },
    {
      id: 6,
      photo: "/experience.png",
      name: "Experience",
      link: "https://www.experience.com/software/anilbhandari/",
      title: "View Anil Bhandari's Experience",
      body: "I have worked as a software engineer for over 3 years. I have experience in web development, mobile app development, and more. Check out my experience and see how I can help you with your next project.",
    },
    {
      id: 7,
      photo: "/projects.png",
      name: "Projects",
      link: "https://www.projects.com/in/anilbhandari/",
      title: "Anil Bhandari - Projects",
      body: "I have worked on a number of projects in software development. Check out my projects and see how I can help you with your next project.",
    },
  ];

  return (
    <React.Fragment>
      <div>
        {resultsData?.map((result) => (
          <div className="flex flex-col gap-y-1 my-9">
            {/* top */}
            <div className="flex gap-x-3">
              {/* image  */}
              <div className="w-10 h-10 border-gray-300 flex items-center justify-center border rounded-full">
                <img
                  className="w-8 h-8 rounded-full"
                  src={result.photo}
                  alt="profile"
                />
              </div>
              {/* some thing  */}
              <div className="flex flex-col">
                <span className="text-sm">{result.name}</span>
                <span className="text-xs text-gray-600">{result.link}</span>
              </div>
              <EllipsisVertical size={15} />
            </div>
            <div className="flex flex-col">
              <span className="text-blue-800 text-[1.25rem] font-medium">
                {result.title}
              </span>
              <span className="text-sm text-gray-600">{result.body}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full flex items-center gap-y-2 justify-center py-7 flex-col mb-10">
      <GoogleStyle/>
      <Numbering/>
      </div>
    </React.Fragment>
  );
}

export default Results;
