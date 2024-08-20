import React from "react";
import { Briefcase, Calendar, ChevronRight } from "lucide-react";

interface ExperienceItem {
  company: string;
  location: string;
  period: string;
  position: string;
  responsibilities: string[];
}

const experiences: ExperienceItem[] = [
  {
    company: "Part-Time Freelancer",
    location: "Remote",
    period: "2023 - Present",
    position: "Freelancer (Full Stack Developer)",
    responsibilities: [
      "Designed and developed custom websites, andriod app using React.js, React native, creating modern and responsive designs.",
      "Assisted other developers in completing their projects, providing expertise in both frontend and backend development.",
    ],
  },
  {
    company: "PL Multimedia Services Pvt.Ltd",
    location: "Chitwan -(Remote)",
    period: "June 2023 - Sep 2023",
    position: "Backend Developer Intern",
    responsibilities: [
      "Led backend development, focusing on creating secure APIs and strong security protocols.",
      "Worked with frontend developers to use Redux Toolkit for better data flow and state management.",
      "Utilized Express.js, Node.js, MongoDB, Redux Toolkit, and React.js to create full-stack solutions.",
    ],
  },
  {
    company: "Spiral Tech",
    location: "Itahari",
    period: "Nov 2023 - Jan 2024",
    position: "Project Helper (Full Stack Developer)",
    responsibilities: [
      "Built user-friendly frontend components to improve user experience.",
      "Developed backend systems using Node.js and Express.js to boost server performance.",
      "Used React.js, Express.js, TailwindCSS, and Zustand to create efficient web applications.",
    ],
  },
];

const ExperienceCard: React.FC<{ experience: ExperienceItem }> = ({
  experience,
}) => (
  <div className="bg-white rounded-lg shadow-md p-6 mb-6 transition-all duration-300 hover:shadow-lg">
    <div className="flex justify-between items-start mb-4">
      <div>
        <h3 className="text-xl font-semibold text-gray-800">
          {experience.company}
        </h3>
        <p className="text-gray-600">{experience.location}</p>
      </div>
      <span className="text-sm text-gray-500 flex items-center">
        <Calendar size={14} className="mr-1" />
        {experience.period}
      </span>
    </div>
    <h4 className="text-lg font-medium text-blue-600 mb-3">
      {experience.position}
    </h4>
    <ul className="space-y-2">
      {experience.responsibilities.map((resp, index) => (
        <li key={index} className="flex items-start">
          <ChevronRight
            size={18}
            className="mr-2 text-green-500 flex-shrink-0 mt-1"
          />
          <span className="text-gray-700">{resp}</span>
        </li>
      ))}
    </ul>
  </div>
);

const Experience: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 overflow-y-scroll">
      <h2 className="text-xl lg:text-3xl font-bold mb-8 text-center flex items-center justify-center text-gray-800">
        <Briefcase size={32} className="mr-2 text-blue-600" />
        Work Experience
      </h2>
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <ExperienceCard key={index} experience={exp} />
        ))}
      </div>
    </div>
  );
};

export default Experience;
