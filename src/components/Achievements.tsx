import React from 'react';
import { Award, Medal, Star } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      title: 'Erasmus Mundus Scholar',
      description: 'Selected for five master\'s programs across Europe, all under a fully funded Erasmus Mundus Plus scholarships. One student from Bangladesh and fewer than 20 students worldwide were chosen for these awards. ',
      links: [
        { name: 'IPCVAI', url: 'https://ipcv.eu/' },
        { name: 'EMJM Imaging', url: 'https://www.emjm-imaging.eu/' },
        { name: 'CoDas', url: 'https://www.unite-codas-master.eu/' },
        
      ],
      icon: <Award className="w-6 h-6 text-yellow-500" />
    },
    {
      title: 'Chancellor\'s Gold Medalist',
      description: 'One student from all the undergraduate programs is chosen for this award. I was chosen as a chancellor\'s gold medalist out of 4600+ graduates in 2025.',
      links: [{ name: 'Link', url: 'https://drive.google.com/file/d/1ZjSJBW3p2VbVFH_HNrm5NrPG2Or7DwRx/view?usp=sharing' }],
      icon: <Medal className="w-6 h-6 text-yellow-500" />
    },
    {
      title: 'Valedictorian of 16th Convocation',
      description: 'I was chosen as the only one graduate out of the whole graduating class (~5000+) as the valedictorian to represent them.',
      links: [{ name: 'Link', url: 'https://youtu.be/YoLNCLtIU-c?si=62qK9HFAKc4yOhiC' }],
      icon: <Star className="w-6 h-6 text-yellow-500" />
    },
    {
      title: 'Vice Chancellor\'s List',
      description: 'For obtaining a GPA of 4.0 in all semesters at BRAC University, I was added in the VC\' list.',
      links: [],
      icon: <Star className="w-6 h-6 text-yellow-500" />
    },
    {
      title: 'PHD offer from Virginia Commonwealth University',
      description: 'I received a PhD offer from Virginia Commonwealth University, USA, with a full scholarship.',
      links: [],
      icon: <Star className="w-6 h-6 text-yellow-500" />
    },
    {
      title: 'Merit-Based Scholarship',
      description: 'Received 100% waiver on tuition fees at BRAC University since eligiblity period, for mainting a CGPA of 4.0 out of 4.0.',
      links: [],
      icon: <Award className="w-6 h-6 text-yellow-500" />
    },
    {
      title: 'Thesis Distinction',
      description: 'Achieved the highest grade of 99.56/100 for my undergraduate thesis.',
      links: [],
      icon: <Award className="w-6 h-6 text-yellow-500" />
    },
    {
      title: 'Completed undergrad in 3.4 years',
      description: 'Usually it takes 4 years or more to complete an undergraduate program, but I completed mine in 3.4 years by taking extra courses per semester.',
      links: [],
      icon: <Star className="w-6 h-6 text-yellow-500" />
    },
    {
      title: 'Maintained a 100% attendance rate',
      description: 'One of my personal achievements is maintaining a 100% attendance rate throughout my undergraduate program.',
      links: [],
      icon: <Star className="w-6 h-6 text-yellow-500" />
    },
    {
      title: 'Won RS-59 Cup Runners up 2022, BRAC University',
      description: '',
      links: [],
      icon: <Medal className="w-6 h-6 text-yellow-500" />
    },
    {
      title: 'Led my team to Semi-finals of Hult Prize 22-23, BRAC University',
      // description: 'Reached the semi-finals of the Hult Prize competition, which is a global competition for social entrepreneurship.',
      links: [{ name: 'Link', url: 'https://drive.google.com/file/d/1_LVTKOMEIob-dGjiv3-VKHP9vPlSFlXw/view?usp=drive_link' }],
      icon: <Award className="w-6 h-6 text-yellow-500" />
    }
  ];

  return (
    <section className="section bg-white rounded-lg shadow-md p-8 mb-8 transition-all duration-300 hover:shadow-lg animate-fadeIn">
      <h2 className="text-2xl font-bold mb-6 flex items-center">
        <Award className="w-6 h-6 mr-2 text-blue-600" />
        Achievements
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {achievements.map((achievement, index) => (
          <div key={index} className="bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border-l-4 border-blue-600">
            <div className="flex items-start">
              <div className="mr-3 mt-1">{achievement.icon}</div>
              <div>
                <h3 className="font-semibold text-gray-800">{achievement.title}</h3>
                {achievement.description && (
                  <p className="text-gray-600 mt-1 text-sm">{achievement.description}</p>
                )}
                {achievement.links.length > 0 && (
                  <div className="mt-2 flex flex-wrap gap-2">
                    {achievement.links.map((link, linkIndex) => (
                      <a 
                        key={linkIndex} 
                        href={link.url} 
                        className="text-blue-600 hover:text-blue-800 transition-colors text-sm inline-flex items-center"
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        {link.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;