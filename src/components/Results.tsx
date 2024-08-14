import { EllipsisVertical } from "lucide-react";
import React from "react";
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
      id: 1,
      photo: "/linkedin.png",
      name: "LinkedIn - Anil Bhandari",
      link: "https://www.linkedin.com/in/anil-bhandari-1a",
      title: "Anil Bhandari - Software Engineer",
      body: "I am a software engineer with 5 years of experience in the field. I have worked on a variety of projects, ranging from web development to mobile app development. I am passionate about technology and always looking to learn new things. I am currently looking for new opportunities to grow and expand my skill set.",
    },
    {
      id: 1,
      photo: "/linkedin.png",
      name: "LinkedIn - Anil Bhandari",
      link: "https://www.linkedin.com/in/anil-bhandari-1a",
      title: "Anil Bhandari - Software Engineer",
      body: "I am a software engineer with 5 years of experience in the field. I have worked on a variety of projects, ranging from web development to mobile app development. I am passionate about technology and always looking to learn new things. I am currently looking for new opportunities to grow and expand my skill set.",
    },
    {
      id: 1,
      photo: "/linkedin.png",
      name: "LinkedIn - Anil Bhandari",
      link: "https://www.linkedin.com/in/anil-bhandari-1a",
      title: "Anil Bhandari - Software Engineer",
      body: "I am a software engineer with 5 years of experience in the field. I have worked on a variety of projects, ranging from web development to mobile app development. I am passionate about technology and always looking to learn new things. I am currently looking for new opportunities to grow and expand my skill set.",
    },
    {
      id: 1,
      photo: "/linkedin.png",
      name: "LinkedIn - Anil Bhandari",
      link: "https://www.linkedin.com/in/anil-bhandari-1a",
      title: "Anil Bhandari - Software Engineer",
      body: "I am a software engineer with 5 years of experience in the field. I have worked on a variety of projects, ranging from web development to mobile app development. I am passionate about technology and always looking to learn new things. I am currently looking for new opportunities to grow and expand my skill set.",
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
              <EllipsisVertical size={15} />,
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
    </React.Fragment>
  );
}

export default Results;
