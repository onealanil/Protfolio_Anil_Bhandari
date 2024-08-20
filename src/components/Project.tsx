import React from 'react';
import { Code, Briefcase, MessageCircle} from 'lucide-react';

interface Project {
  id: number;
  name: string;
  year: string;
  description: string;
  technologies: string[];
  icon: React.ReactNode;
}

const projects: Project[] = [
  {
    id: 1,
    name: "NepaliLang (.NEP)",
    year: "2024",
    description: "An innovative toy programming language that brings Nepali syntax to the coding world. NepaliLang allows coding in Nepali, powered by TypeScript and inspired by Bhailang.",
    technologies: ["TypeScript", "Nepali Syntax", "Online Playground"],
    icon: <Code className="w-6 h-6 text-purple-600" />,
  },
  {
    id: 2,
    name: "NepalKamma",
    year: "2024",
    description: "An Android app connecting skilled workers with short-term jobs in Nepal. Features include secure payment, job recommendations, and location-based listings.",
    technologies: ["React Native (CLI)", "TypeScript", "Node.js", "MongoDB"],
    icon: <Briefcase className="w-6 h-6 text-blue-600" />,
  },
  {
    id: 3,
    name: "Emotional Outlets",
    year: "2023",
    description: "A web app for lyricists, poets, and mental health support. Features real-time communication with SocketIO.",
    technologies: ["React.js", "Node.js", "MongoDB", "SocketIO"],
    icon: <MessageCircle className="w-6 h-6 text-green-600" />,
  },
  {
    id: 4,
    name: "Facebook Messenger Automation",
    year: "2022",
    description: "An automated messaging system for Facebook Messenger using AI. Developed a chatbot with ChatterBot.",
    technologies: ["Python", "Selenium", "ChatterBot", "Tkinter"],
    icon: <MessageCircle className="w-6 h-6 text-red-600" />,
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
  </div>
);

const ProjectsShowcase: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-xl lg:text-3xl font-bold mb-8 text-center">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsShowcase;