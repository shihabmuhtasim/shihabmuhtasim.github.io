import React from 'react';
import { Activity, ExternalLink } from 'lucide-react';

const ExtraCurricular = () => {
  const activities = [
    {
      title: 'Executive and Semi-Finalist of Hult Prize',
      description: 'Contributed as an executive of content as an organizer and led my team to the semi-finals of the competition.',
      link: 'https://drive.google.com/file/d/1_LVTKOMEIob-dGjiv3-VKHP9vPlSFlXw/view?usp=drive_link'
    },
    {
      title: 'Project ORKO, BRAC',
      description: 'Prepared teaching modules for underprivileged kids.',
      link: 'https://www.linkedin.com/feed/update/urn:li:activity:6932553260654292992/'
    },
    {
      title: 'Environment Volunteer',
      description: 'Planted trees and cleaned rivers to promote a greener environment.',
      link: 'https://drive.google.com/file/d/1r5_3_Fl_88qtyfoCt8FBQ4iUwU6sP30M/view?usp=sharing'
    }
  ];

  const programmingExperiences = [
    'Brac University Debugging Competition 2024: 1st position in the first round.',
    'HackerRank: 4 Star Badge in Problem Solving & 3 Stars in SQL.',
    'Learnathon 3.0: Top 400 out of 30k participants in the first round.',
    'Brac University Intra University Junior Contest 2022: 32nd position out of 187 teams.'
  ];

  const communicationSkills = [
    'Led all academic projects and thesis (8 projects).',
    'Co-supervising a research team working on image segmentation.',
    'Led my teams in competitive programming contests.',
    'Mentored juniors at Brac University as a TA of the Data Structure course.'
  ];

  return (
    <section className="section bg-white rounded-lg shadow-md p-8 mb-8 transition-all duration-300 hover:shadow-lg animate-fadeIn">
      <h2 className="text-2xl font-bold mb-6 flex items-center">
        <Activity className="w-6 h-6 mr-2 text-blue-600" />
        Extra-Curricular Activities
      </h2>
      
      {/* Main activities */}
      <div className="space-y-6 mb-8">
        {activities.map((activity, index) => (
          <div key={index} className="bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
            <h3 className="font-semibold text-gray-800 mb-2">{activity.title}</h3>
            <p className="text-gray-700">{activity.description}</p>
            <a 
              href={activity.link} 
              className="inline-flex items-center mt-2 text-blue-600 hover:text-blue-800 transition-colors"
              target="_blank" 
              rel="noopener noreferrer"
            >
              View Details
              <ExternalLink className="w-4 h-4 ml-1" />
            </a>
          </div>
        ))}
      </div>
      
      {/* Programming Experience */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-3 text-gray-800 flex items-center">
          <Activity className="w-5 h-5 mr-2 text-blue-600" />
          Programming Experience
          <a 
            href="https://docs.google.com/document/d/1a6-5BSGHqp-yrHZ6jPd0TzqMp__G4pYvClmYTltrvn4/edit?tab=t.0" 
            className="ml-2 text-blue-600 text-sm hover:text-blue-800 transition-colors"
            target="_blank" 
            rel="noopener noreferrer"
          >
            <ExternalLink className="w-4 h-4" />
          </a>
        </h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          {programmingExperiences.map((exp, index) => (
            <li key={index} className="hover:text-blue-700 transition-colors">{exp}</li>
          ))}
        </ul>
      </div>
      
      {/* Communication Skills */}
      <div>
        <h3 className="text-xl font-semibold mb-3 text-gray-800 flex items-center">
          <Activity className="w-5 h-5 mr-2 text-blue-600" />
          Communication and Leadership Skills
        </h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          {communicationSkills.map((skill, index) => (
            <li key={index} className="hover:text-blue-700 transition-colors">{skill}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ExtraCurricular;