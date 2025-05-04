import React from 'react';
import { FileText } from 'lucide-react';

const CV = () => {
  return (
    <section className="section bg-white rounded-lg shadow-md p-8 mb-8 transition-all duration-300 hover:shadow-lg text-center animate-fadeIn">
      <h2 className="text-2xl font-bold mb-6 flex items-center justify-center">
        <FileText className="w-6 h-6 mr-2 text-blue-600" />
        My CV
      </h2>
      <a 
        href="/CV.pdf" 
        className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-md transition-colors duration-300 transform hover:scale-105"
        download="Resume Shihab Muhtasim.pdf"
      >
        VIEW CV
      </a>
    </section>
  );
};

export default CV;