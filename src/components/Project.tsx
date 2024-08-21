import React from 'react';
import { Code, Briefcase, MessageCircle} from 'lucide-react';

interface Project {
  id: number;
  name: string;
  year: string;
  description: string;
  technologies: string[];
  icon: React.ReactNode;
  link?: string | any;
  code?: string;
  embbed?: React.ReactNode;
}

const projects: Project[] = [
  {
    id: 1,
    name: "NepaliLang (.NEP)",
    year: "2024",
    description: "An innovative toy programming language that brings Nepali syntax to the coding world. NepaliLang allows coding in Nepali, powered by TypeScript and inspired by Bhailang.",
    technologies: ["TypeScript", "Nepali Syntax", "Online Playground"],
    icon: <Code className="w-6 h-6 text-purple-600" />,
    link: "https://nepalilang.vercel.app/",
    code: "https://github.com/onealanil/Dotnep-nepali-compiler",
  },
  {
    id: 2,
    name: "NepalKamma",
    year: "2024",
    description: "An Android app connecting skilled workers with short-term jobs in Nepal. Features include secure payment, job recommendations, and location-based listings.",
    technologies: ["React Native (CLI)", "TypeScript", "Node.js", "MongoDB"],
    icon: <Briefcase className="w-6 h-6 text-blue-600" />,
    link: "https://www.linkedin.com/posts/anilbhandari24_personas-example-key-activity-7199986494076301312-1b4Z?utm_source=share&utm_medium=member_desktop",
    code: "https://github.com/onealanil/NepalKammaApp",
  },
  {
    id: 3,
    name: "Emotional Outlets",
    year: "2023",
    description: "A web app for lyricists, poets, and mental health support. Features real-time communication with SocketIO.",
    technologies: ["React.js", "Node.js", "MongoDB", "SocketIO"],
    icon: <MessageCircle className="w-6 h-6 text-green-600" />,
    embbed: <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7072859074324787200" height="1067" width="404"  title="Embedded post"></iframe>,
    code: "https://github.com/onealanil/emotionaloutlets",
  },
  {
    id: 4,
    name: "Facebook Messenger Automation",
    year: "2022",
    description: "An automated messaging system for Facebook Messenger using AI. Developed a chatbot with ChatterBot.",
    technologies: ["Python", "Selenium", "ChatterBot", "Tkinter"],
    icon: <MessageCircle className="w-6 h-6 text-red-600" />,
    embbed: <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7101211578192076800" height="836" width="404"  title="Embedded post"></iframe>,
    code: "https://github.com/onealanil/Facebook_messenger_automation"
  },
];

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
  <div className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg">
    <div className="flex items-center mb-4">
      {project.icon}
      <h3 className="text-xl font-semibold ml-2">{project.name}</h3>
    </div>
    <p className="text-sm text-gray-600 mb-2">{project.year}</p>
    <p className="text-gray-700 mb-4">{project.description}</p>
    <div className="flex flex-wrap gap-2">
      {project.technologies.map((tech, index) => (
        <span key={index} className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-xs">
          {tech}
        </span>
      ))}
    </div>
    <div className="flex items-center mt-8 justify-between">
      {project.link && (
        <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 transition-colors">
          View Demo
        </a>
      )}
      {
        project.embbed && (
          <div className="flex items-center">
            {project.embbed}
          </div>
        )
      }
      {project.code && project.link && (
        <a href={project.code} target="_blank" rel="noopener noreferrer" className="flex items-center">
          <svg className="w-6 h-6 text-gray-600 hover:text-gray-800 transition-colors" viewBox="0 0 24 24" fill="black" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
          </svg>
          <span className="ml-2 text-gray-600 hover:text-gray-800 transition-colors">Code</span>
        </a>
      )}
    </div>
  </div>
);

const ProjectsShowcase: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h4 className='font-semibold'>Some of my Projects:</h4>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsShowcase;