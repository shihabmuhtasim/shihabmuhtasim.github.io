import React from 'react';
import { Newspaper } from 'lucide-react';

const updates = [
  {
    title: 'Graduation Day 🎓',
    date: '25 February 2024',
    description:
      'One of the proudest moments of my academic life—walking the stage at my university convocation. I was honored as the valedictorian and awarded the Chancellor’s Gold Medal, representing a graduating class of over 5000 students. A day of recognition, joy, and gratitude.',
    imageUrl: '/convocation.jpg',
  },
  {
    title: 'Featured in Newspaper 📰',
    description:
      'Being featured in several national newspapers was a surreal experience. It captured my journey as the valedictorian of BRAC University and highlighted the values and perseverance that led me there. Grateful for the recognition and the opportunity to share my story.',
    imageUrl: '/newspaper.jpg',
  },
  {
    title: 'Project Orko | BRAC University 🧑‍🏫',
    date: '2022',
    description:
      'BRAC University selected seven students from the entire batch to stay at the residential campus and develop teaching modules for underprivileged students in the surrounding areas. I was one of the selected students responsible for creating educational content to tutor and empower these communities.',
    imageUrl: '/orko.jpg',
    imageUrl2: '/orko 2.jpg',
  },
  {
    title: 'Hult Prize | BRAC University 💡',
    date: '2023',
    description:
      'As an executive in the Hult Prize event\s content department, I was in charge of curating and overseeing all audio content used throughout the event. I also participated in the business case competition and reached the semifinals with an innovative idea focused on a clothing rental service.',
    imageUrl: '/hult.jpg',
  },
];

const LifeUpdates = () => {
  return (
    <section className="section bg-white rounded-lg shadow-md p-8 mb-8 transition-all duration-300 hover:shadow-lg animate-fadeIn">
      <h2 className="text-2xl font-bold mb-6 flex items-center">
        <Newspaper className="w-6 h-6 mr-2 text-red-600" />
        Life Updates
      </h2>

      <div className="mt-4 mb-10">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          BRAC University Convocation 2025 | Speech of the Valedictorian
        </h3>
        <p className="mt-4 text-gray-700">
        Chancellor’s Gold Medalist and Valedictorian, Mr. Shihab Muhtasim, delivers his speech at the graduation ceremony.
        He earned his Bachelor’s degree from the School of Data and Sciences with a CGPA of 4.00 in the Department of Computer Science and Engineering.
        His speech highlighted the power of perseverance, community, and staying curious in the ever-evolving world of technology.
      </p>
      <div className="h-8"></div>
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            className="w-full h-96 rounded-lg shadow-lg"
            src="https://www.youtube.com/embed/YoLNCLtIU-c"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      

      <div className="space-y-10">
        {updates.map((item, index) => (
          <div
            key={index}
            className="flex flex-col bg-gray-50 p-4 rounded-lg shadow-sm"
          >
            <div>
              <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
              {item.date && (
                <p className="text-sm text-gray-500 mb-2">{item.date}</p>
              )}
              <p className="text-gray-700">{item.description}</p>
            </div>
            <div className="h-4"></div>
            {item.imageUrl && !item.imageUrl2 && (
              <div className="flex justify-center">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full md:max-w-2xl h-auto object-contain rounded-lg mb-4"
                />
              </div>
            )}
            {item.imageUrl2 && (
              <div className="flex justify-center gap-4">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full md:max-w-md h-72 object-cover rounded-lg mb-4"
                />
                <img
                  src={item.imageUrl2}
                  alt={item.title + ' second'}
                  className="w-full md:max-w-md h-72 object-cover rounded-lg mb-4"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default LifeUpdates;