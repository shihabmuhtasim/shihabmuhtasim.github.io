import React from 'react';
import { BookOpenCheck } from 'lucide-react';

const ResearchObjective = () => {
  return (
    <section className="section bg-white rounded-lg shadow-md p-8 mb-8 transition-all duration-300 hover:shadow-lg animate-fadeIn">
      <h2 className="text-2xl font-bold mb-4 flex items-center">
        <BookOpenCheck className="w-6 h-6 mr-2 text-blue-600" />
        Research Objective
      </h2>
      <p className="text-lg text-gray-700 leading-relaxed">
        My future research intrests are in Computer Vision, Image & Signal processing as well as sections of Visual AI. My research experiences are in Natural Language Processing (NLP), Machine Learning (ML), Network Science, and Data Science. I am also eager to explore diverse research fields, leveraging my strong foundation in computer science and engineering.
      </p>
    </section>
  );
};

export default ResearchObjective;