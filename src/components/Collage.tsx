import React from 'react';
import { GraduationCap, MapPin, ExternalLink } from 'lucide-react';

interface EducationItem {
  id: number;
  name: string;
  location: string;
  degree: string;
  faculty: string;
  link: string;
  status: string;
}

const EducationCard: React.FC<{ item: EducationItem }> = ({ item }) => (
  <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 mb-4 sm:mb-6 transition-all duration-300 hover:shadow-lg">
    <h3 className="text-lg sm:text-xl font-semibold mb-2">{item.name}</h3>
    <div className="flex items-center text-gray-600 mb-2 text-sm sm:text-base">
      <MapPin size={14} className="mr-1 sm:mr-2 flex-shrink-0" />
      <span>{item.location}</span>
    </div>
    <div className="mb-2 text-sm sm:text-base">
      <span className="font-medium">{item.degree}</span> - {item.faculty}
    </div>
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-3 sm:mt-4">
      <span className={`px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm mb-2 sm:mb-0 ${
        item.status === 'Completed' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
      }`}>
        {item.status}
      </span>
      <a
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:text-blue-800 transition-colors duration-300 flex items-center text-sm sm:text-base"
      >
        <ExternalLink size={14} className="mr-1" />
        {/* Visit Website */}
      </a>
    </div>
  </div>
);

const Collage: React.FC = () => {
  const education_data: EducationItem[] = [
    {
      id: 1,
      name: "Bright Future Higher Secondary School",
      location: "Salakpur, Morang",
      degree: "SLC or +2",
      faculty: "Science",
      link: "https://www.facebook.com/brightfuture2048/",
      status: "Completed"
    },
    {
      id: 2,
      name: "Itahari International College",
      location: "Itahari, Sunsari",
      degree: "Bachelor's",
      faculty: "BSc(Hons) Computing",
      link: "https://iic.edu.np/",
      status: "Studying"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-6 sm:py-8 overflow-y-scroll h-full">
      <h2 className="text-xl lg:text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center flex items-center justify-center">
        <GraduationCap size={24} className="mr-2 sm:mr-3" />
        My Education Journey
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        {education_data.map((item) => (
          <EducationCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Collage;