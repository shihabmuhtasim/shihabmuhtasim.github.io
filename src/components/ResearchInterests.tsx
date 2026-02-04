import React from 'react';
import { FlaskConical } from 'lucide-react';

const ResearchInterests = () => {
  const interests = [
    'Computer Vision',
    'Image and Video Processing',
    '3D Reconstruction',
    'Network Science',
    'Machine Learning (ML)',
    'Artificial Intelligence (AI)',
    'Natural Language Processing (NLP)',
    'Data Science',
    'System Design',
    'Deep Learning',
  ];

  return (
    <section className="section bg-white rounded-lg shadow-md p-8 mb-8 transition-all duration-300 hover:shadow-lg animate-fadeIn">
      <h2 className="text-2xl font-bold mb-4 flex items-center">
        <FlaskConical className="w-6 h-6 mr-2 text-blue-600" />
        Research Interests
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {interests.map((interest, index) => (
          <div 
            key={index} 
            className="bg-gray-100 p-3 rounded-md flex items-center transition-transform duration-300 hover:translate-x-2 hover:bg-blue-50"
          >
            <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
            <span className="text-gray-700">{interest}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ResearchInterests;