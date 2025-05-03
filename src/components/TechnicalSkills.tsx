import React from 'react';
import { Code, Globe, Database, GitBranch, Cpu, PenTool as Tool, Music } from 'lucide-react';

const TechnicalSkills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: 'Python, PHP, R, Assembly, C, C++, Java',
      icon: <Code className="w-5 h-5 text-blue-600" />
    },
    {
      title: 'Web Development',
      skills: 'HTML, CSS, JavaScript, Laravel, SQL, React',
      icon: <Globe className="w-5 h-5 text-blue-600" />
    },
    {
      title: 'ML & NLP Libraries',
      skills: 'NetworkX, TensorFlow, NLTK, Transformers, Keras, PyTorch, Pandas, Matplotlib, NumPy, Scikit-learn, Seaborn',
      icon: <Database className="w-5 h-5 text-blue-600" />
    },
    {
      title: 'Version Control',
      skills: 'Git, GitHub, GitLab',
      icon: <GitBranch className="w-5 h-5 text-blue-600" />
    },
    {
      title: 'Software Development',
      skills: 'OpenGL, Object-Oriented Programming, Tkinter, Latex',
      icon: <Cpu className="w-5 h-5 text-blue-600" />
    },
    {
      title: 'Technical Tools',
      skills: 'Anaconda, Proteus, LT Spice, MS Word, PowerPoint, Excel, Adobe Lightroom, Quartus, DHCL',
      icon: <Tool className="w-5 h-5 text-blue-600" />
    },
    {
      title: 'Music and Media',
      skills: 'FL Studio, Wondershare Filmora, Adobe Premiere Pro',
      icon: <Music className="w-5 h-5 text-blue-600" />
    }
  ];

  return (
    <section className="section bg-white rounded-lg shadow-md p-8 mb-8 transition-all duration-300 hover:shadow-lg animate-fadeIn">
      <h2 className="text-2xl font-bold mb-6 flex items-center">
        <Code className="w-6 h-6 mr-2 text-blue-600" />
        Technical Skills
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {skillCategories.map((category, index) => (
          <div 
            key={index} 
            className="p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-300"
          >
            <div className="flex items-center mb-2">
              {category.icon}
              <h3 className="font-semibold ml-2 text-gray-800">{category.title}:</h3>
            </div>
            <p className="text-gray-700 ml-7">{category.skills}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechnicalSkills;