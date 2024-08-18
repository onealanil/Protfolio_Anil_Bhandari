import Image from "next/image";
import React from "react";

interface Skill {
  id: number;
  name: string;
  icon: string;
}

interface SkillSectionProps {
  title: string;
  skills: Skill[];
}

const SkillSection: React.FC<SkillSectionProps> = ({ title, skills }) => (
  <div className="mt-5">
    <h2 className="text-xl font-semibold mb-4">{title}</h2>
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
      {skills.map((skill) => (
        <div key={skill.id} className="flex flex-col items-center">
          <div className="w-12 h-12 md:w-16 md:h-16 relative">
            <Image
              src={skill.icon}
              alt={skill.name}
              layout="fill"
              objectFit="contain"
            />
          </div>
          <span className="text-xs md:text-sm mt-2 text-center">{skill.name}</span>
        </div>
      ))}
    </div>
  </div>
);

const Skills: React.FC = () => {
  const skills: Skill[] = [
    { id: 1, name: "JavaScript", icon: "/images/skills/js.png" },
    { id: 2, name: "TypeScript", icon: "/images/skills/ts.png" },
    { id: 3, name: "React", icon: "/images/skills/reactjs.png" },
    { id: 4, name: "Next.js", icon: "/images/skills/next.png" },
    { id: 5, name: "Node.js", icon: "/images/skills/node.png" },
    { id: 6, name: "MongoDB", icon: "/images/skills/mongo.png" },
    { id: 7, name: "React Native", icon: "/images/skills/reactnative.png" },
    { id: 8, name: "Web Development", icon: "/images/skills/webdev.png" },
    { id: 9, name: "SQL", icon: "/images/skills/sql.png" },
  ];

  const canWork: Skill[] = [
    { id: 1, name: "Python", icon: "/images/skills/python.png" },
    { id: 2, name: "Java", icon: "/images/skills/java.png" },
    { id: 3, name: ".NET API", icon: "/images/skills/dotnet.png" },
    { id: 4, name: "PostgreSQL", icon: "/images/skills/postgre.png" },
  ];

  return (
    <div className="bg-gray-50 py-10 overflow-y-scroll">
      <div className="container mx-auto px-4 max-w-3xl">
        {/* <h1 className="text-2xl md:text-3xl font-bold text-center mb-8">Skills</h1> */}
        <SkillSection title="Proficient In" skills={skills} />
        <SkillSection title="Comfortable With" skills={canWork} />
      </div>
    </div>
  );
};

export default Skills;