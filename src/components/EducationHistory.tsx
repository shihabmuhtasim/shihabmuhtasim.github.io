import React from 'react';
import { GraduationCap, PenTool } from 'lucide-react';

const EducationHistory = () => {
  const educationHistory = [
    {
      institution: 'Security Printing Corporation High School',
      degree: 'SSC (O level equivalent) | Science',
      year: '2018',
      grade: 'GPA: 5.00'
    },
    {
      institution: 'Dhaka City College',
      degree: 'HSC (A-level equivalent) | Science',
      year: '2020',
      grade: 'GPA: 5.00'
    }
  ];

  return (
    <section className="section bg-white rounded-lg shadow-md p-8 mb-8 transition-all duration-300 hover:shadow-lg animate-fadeIn">
      <h2 className="text-2xl font-bold mb-6 flex items-center">
        <PenTool className="w-6 h-6 mr-2 text-blue-600" />
        Education History
      </h2>
      <div className="space-y-4">
        {educationHistory.map((edu, index) => (
          <div 
            key={index} 
            className="p-4 bg-gray-50 rounded-lg border-l-4 border-blue-600 hover:shadow-md transition-all duration-300"
          >
            <div className="flex items-start">
              <GraduationCap className="w-5 h-5 mr-2 text-blue-600 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-800">{edu.institution}</h3>
                <p className="text-gray-700">{edu.degree} | {edu.year}</p>
                <p className="text-gray-700 font-medium">{edu.grade}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EducationHistory;