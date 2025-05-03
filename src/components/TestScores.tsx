import React from 'react';
import { BookOpenText } from 'lucide-react';

const TestScores = () => {
  const ieltsScores = {
    overall: '7.5',
    listening: '8.0',
    reading: '8.5',
    speaking: '7.0',
    writing: '7.0',
    date: '19 November 2024'
  };

  return (
    <section className="section bg-white rounded-lg shadow-md p-8 mb-8 transition-all duration-300 hover:shadow-lg animate-fadeIn">
      <h2 className="text-2xl font-bold mb-6 flex items-center">
        <BookOpenText className="w-6 h-6 mr-2 text-blue-600" />
        Test Scores
      </h2>
      
      <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-blue-600">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold text-gray-800">IELTS</h3>
          <span className="text-gray-600">{ieltsScores.date}</span>
        </div>
        
        <div className="flex items-center mb-6">
          <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold">
            {ieltsScores.overall}
          </div>
          <span className="ml-3 text-lg font-medium text-gray-700">Overall Band Score</span>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white p-3 rounded-md shadow-sm">
            <p className="text-sm text-gray-600">Listening</p>
            <p className="text-xl font-semibold text-gray-800">{ieltsScores.listening}</p>
          </div>
          <div className="bg-white p-3 rounded-md shadow-sm">
            <p className="text-sm text-gray-600">Reading</p>
            <p className="text-xl font-semibold text-gray-800">{ieltsScores.reading}</p>
          </div>
          <div className="bg-white p-3 rounded-md shadow-sm">
            <p className="text-sm text-gray-600">Speaking</p>
            <p className="text-xl font-semibold text-gray-800">{ieltsScores.speaking}</p>
          </div>
          <div className="bg-white p-3 rounded-md shadow-sm">
            <p className="text-sm text-gray-600">Writing</p>
            <p className="text-xl font-semibold text-gray-800">{ieltsScores.writing}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestScores;