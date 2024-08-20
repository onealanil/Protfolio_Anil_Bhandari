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
  <div className="bg-white rounded-lg shadow-md p-6 mb-6 transition-all duration-300 hover:shadow-lg">
    <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
    <div className="flex items-center text-gray-600 mb-2">
      <MapPin size={16} className="mr-2" />
      <span>{item.location}</span>
    </div>
    <div className="mb-2">
      <span className="font-medium">{item.degree}</span> - {item.faculty}
    </div>
    <div className="flex justify-between items-center mt-4">
      <span className={`px-3 py-1 rounded-full text-sm ${
        item.status === 'Completed' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
      }`}>
        {item.status}
      </span>
      <a
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:text-blue-800 transition-colors duration-300 flex items-center"
      >
        <ExternalLink size={16} className="mr-1" />
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
      status: "Currently Studying"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-8 text-center flex items-center justify-center">
        <GraduationCap size={32} className="mr-2" />
        My Education Journey
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {education_data.map((item) => (
          <EducationCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Collage;