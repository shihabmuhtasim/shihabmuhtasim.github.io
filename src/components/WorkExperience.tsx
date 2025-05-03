import React from 'react';
import { Briefcase } from 'lucide-react';

const WorkExperience = () => {
  const experiences = [
    {
      title: 'Adjunct Lecturer',
      company: 'Department of Computer Science Engineering, BRAC University',
      period: 'Feb. 2023 – Present',
      description: 'Teaching advanced and core courses such as Data Structures, OOP, OS, Microprocessors, and AI; taking 21 hours of lab each week and providing 6 hours of consultation; checking assignments; conducting exams; taking vivas; and invigilating exams.'
    },
    {
      title: 'Teaching Assistant',
      company: 'Department of Computer Science Engineering, BRAC University',
      period: 'Sep. 2023 – Sep. 2024',
      description: 'Provided 12 hours of weekly consultation sessions to a class of 35 students, assisted with 3 hours of lab sessions each week for the Data Structures course, graded assignments, evaluated student progress, conducted viva assessments, and conducted final lab exams.',
      link: 'https://drive.google.com/file/d/1uaaux4i7AVnBjYPQUtIvWhVnqR3Rd7mr/view?usp=sharing'
    },
    {
      title: 'Head of Web Development',
      company: 'Institute of Young Talents (IYT)',
      period: 'Sep. 2023 – Oct. 2024',
      description: 'Led the web development team, guided several projects, recruited new members, and developed websites.',
      link: 'https://drive.google.com/file/d/1eHc4XYQyxhYFn33Dh1wAjq4xDZdLJKuX/view?usp=drive_link'
    },
    
    // {
    //   title: 'Project ORKO, BRAC University',
    //   company: 'Committee Member & Tutor',
    //   period: '2022',
    //   description: 'Selected as one of seven individuals from 1000 students to participate in the pilot program at BRAC University\'s Project ORKO. Involved in designing, developing, and contributing to training modules for the program.'
    // },
    // {
    //   title: 'Hult Prize (2022-23), BRAC University',
    //   company: 'Executive of Content Planning',
    //   period: '2022-2023',
    //   description: 'Produced the official theme song for Hult Prize, featured at official events. Managed audio content for Hult\'s marketing initiatives, overseeing mixing and mastering. Actively participated in the competition, advancing to the semi-finals.'
    // }
  ];

  return (
    <section className="section bg-white rounded-lg shadow-md p-8 mb-8 transition-all duration-300 hover:shadow-lg animate-fadeIn">
      <h2 className="text-2xl font-bold mb-6 flex items-center">
        <Briefcase className="w-6 h-6 mr-2 text-blue-600" />
        Work Experience
      </h2>
      <div className="space-y-6">
        {experiences.map((experience, index) => (
          <div key={index} className="relative pl-8 pb-6 border-l-2 border-gray-300 last:border-l-0 last:pb-0">
            <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-[9px] top-0"></div>
            <div className="bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
              <h3 className="font-bold text-gray-800">{experience.title}</h3>
              <div className="flex flex-col sm:flex-row sm:justify-between mt-1">
                <p className="text-gray-600 font-medium">{experience.company}</p>
                <p className="text-gray-500 italic mt-1 sm:mt-0">{experience.period}</p>
              </div>
              <p className="mt-3 text-gray-700">{experience.description}</p>
              {experience.link && (
                <a 
                  href={experience.link} 
                  className="inline-block mt-2 text-blue-600 hover:text-blue-800 transition-colors"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  View Certificate
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;