import React from 'react';
import { Award, ExternalLink } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: 'Neural Networks and Deep Learning',
      provider: 'Coursera',
      link: 'https://www.coursera.org/account/accomplishments/verify/MBWBM4EHF4YC'
    },
    {
      title: 'Website Development Completion',
      provider: 'Institute of Young Talents (IYT)',
      link: 'https://drive.google.com/file/d/1VZ_Tm7d_nGCiByODgj7Yhz6cSqfcl9YN/view?usp=sharing'
    },
    {
      title: 'Introduction to LLMs in Python',
      provider: 'DataCamp',
      link: 'https://drive.google.com/file/d/1VXWqd8BE6VwItbCq-HKxIvy5E5Iy_jvb/view?usp=sharing'
    },
    {
      title: 'Image Processing in Python',
      provider: 'DataCamp',
      link: 'https://drive.google.com/file/d/1VXeG3KA9ezq6rjgxRflmEBE5P88N0Ksi/view?usp=sharing'
    },
    {
      title: 'Image Modeling with Keras',
      provider: 'DataCamp',
      link: 'https://drive.google.com/file/d/1VWg1w1QVTGZylaKuEvTD-SJ7OA0lRcBL/view?usp=sharing'
    },
    {
      title: 'Biomedical Image Analysis in Python',
      provider: 'DataCamp',
      link: 'https://drive.google.com/file/d/1VWG_7TTU98EaGzhXvcsWX8N3xc6mkyXO/view?usp=sharing'
    }
  ];

  return (
    <section className="section bg-white rounded-lg shadow-md p-8 mb-8 transition-all duration-300 hover:shadow-lg animate-fadeIn">
      <h2 className="text-2xl font-bold mb-6 flex items-center">
        <Award className="w-6 h-6 mr-2 text-blue-600" />
        Certifications
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {certifications.map((cert, index) => (
          <a 
            key={index} 
            href={cert.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="group p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-300 flex items-start"
          >
            <Award className="w-5 h-5 text-blue-600 mr-3 mt-1" />
            <div>
              <h3 className="font-semibold text-gray-800 group-hover:text-blue-700 transition-colors flex items-center">
                {cert.title}
                <ExternalLink className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
              </h3>
              <p className="text-gray-600">{cert.provider}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Certifications;