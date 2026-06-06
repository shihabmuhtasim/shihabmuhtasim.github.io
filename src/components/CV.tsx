import React from 'react';
import { FileText, Download } from 'lucide-react';

const CV = () => {
  const handleViewCV = () => {
    window.open('/Cv_JUN_26.pdf', '_blank');
  };

  return (
    <section className="section bg-white rounded-lg shadow-md p-8 mb-8 transition-all duration-300 hover:shadow-lg text-center animate-fadeIn">
      <h2 className="text-2xl font-bold mb-6 flex items-center justify-center">
        <FileText className="w-6 h-6 mr-2 text-blue-600" />
        My CV
      </h2>
      <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
        <button
          onClick={handleViewCV}
          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-md transition-colors duration-300 transform hover:scale-105"
        >
          <FileText className="w-4 h-4" />
          View CV — June 2026
        </button>
        <a
          href="/Cv_JUN_26.pdf"
          download="Resume_Shihab_Muhtasim_2026.pdf"
          className="inline-flex items-center gap-2 bg-transparent border-2 border-blue-600 hover:bg-blue-50 text-blue-600 font-bold py-3 px-6 rounded-md transition-colors duration-300 transform hover:scale-105"
        >
          <Download className="w-4 h-4" />
          Download
        </a>
      </div>
    </section>
  );
};

export default CV;
