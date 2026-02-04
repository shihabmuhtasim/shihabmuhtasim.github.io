import React from 'react';
import { ExternalLink, Code } from 'lucide-react';

interface Project {
  category: string;
  title: string;
  description: string;
  imageUrl: string;
  githubUrl: string;
}

const Projects = () => {
  const projects: Project[] = [
    {
      category: 'Machine Learning • Predictive Maintenance',
      title: 'Prediction of APS Failure in Scania Trucks',
      description:
        'A predictive maintenance project that trains machine learning models to detect imminent Air Pressure System (APS) failures in Scania heavy-duty trucks using operational sensor data—focusing on early detection to reduce downtime and maintenance cost.',
      imageUrl: '/aps-scania-cover.jpg',
      githubUrl: 'https://github.com/shihabmuhtasim/Prediction-of-APS-Failure-in-Scania-Trucks',
    },
    {
      category: 'Computer Vision • Image Processing',
      title: 'Bingo Detection — Image Processing Model',
      description:
        'A MATLAB image-processing pipeline that analyzes Bingo card photos by correcting rotation, digitizing the grid, detecting stamped cells, and validating Bingo patterns using frequency-domain analysis and shape-based detection.',
      imageUrl: '/bingo-detection-cover.jpg',
      githubUrl: 'https://github.com/shihabmuhtasim/Bingo-Detection-Image-Processing-Model',
    },
    {
      category: 'Software Engineering • Design Patterns',
      title: 'PatternCraft — Design Patterns Portfolio',
      description:
        'A curated portfolio of clean, modular implementations of GoF (Gang of Four) design patterns, built as course work and structured around real-world inspired problems with extensible, maintainable solutions.',
      imageUrl: '/patterncraft-cover.jpg',
      githubUrl: 'https://github.com/shihabmuhtasim/Pattern-Craft---Design-Patterns',
    },
    {
      category: 'Biomedical Signal Processing • ML',
      title: 'Gait Analysis under Dual-Task Conditions',
      description:
        'An end-to-end BSP pipeline that processes smartphone accelerometer & gyroscope data to distinguish normal walking vs. cognitive dual-task walking. Includes filtering/resampling, feature engineering (time/frequency/biomarkers), and multiple ML classifiers.',
      imageUrl: '/gait-dualtask-cover.jpg',
      githubUrl: 'https://github.com/shihabmuhtasim/Gait-Analysis-under-Dual-Task-Conditions',
    },
    {
      category: 'Computer Vision • Segmentation & Detection',
      title: 'Drone Imagery — Texture Segmentation & Car Detection',
      description:
        'A computer vision project on aerial/drone imagery focusing on texture-based segmentation and vehicle detection, exploring classical and/or ML approaches for separating terrain regions and identifying cars from overhead views.',
      imageUrl: '/drone-seg-car-cover.jpg',
      githubUrl: 'https://github.com/shihabmuhtasim/Drone-Image-texture-segmentation-and-car-detection',
    },
    {
      category: 'Software Engineering',
      title: 'Rent Koro - Car rental website in Laravel',
      description: 'Rent Koro is a car rental website built in Laravel catering to different user roles: admin, vendor, general, and guest. Our platform facilitates the renting and listing of cars, providing a seamless rental experience.',
      imageUrl: '/rentkoro.png',  // Updated
      githubUrl: 'https://github.com/shihabmuhtasim/RentCar-A-car-rental-website-in-Laravel'
    },
    {
      category: 'System Analysis and Design',
      title: 'Wearwise - Clothing rental website in Laravel',
      description: 'Specialized in Admin Panel and Vendor Management, leveraging expertise in SQL, Laravel, PHP, HTML, and session management to ensure secure login/logout and create an intuitive admin & vendor interface.',
      imageUrl: '/wearwise.png',  // Updated
      githubUrl: 'https://github.com/shihabmuhtasim/wearwise'
    },
    {
      category: 'Microprocessors',
      title: 'Password Strength Checker',
      description: 'An Assembly language project utilizing the emu8086 processor to assess password strength based on length, character types, and sequences. Categorizes passwords as Very Strong, Strong, Weak, or Very Weak.',
      imageUrl: '/mp.png',  // Updated
      githubUrl: 'https://github.com/shihabmuhtasim/Emu8086-Assembly-Password-Strength-Checker'
    },
    {
      category: 'Computer Graphics',
      title: '2D Games Using OpenGL in Python',
      description: 'This project contains multiple games built with OpenGL in Python, showcasing various graphical and interactive elements through OpenGL primitives. Includes games like spaceship shooter, diamond catcher, and more.',
      imageUrl: '/2dgames.png',  // Updated
      githubUrl: 'https://github.com/shihabmuhtasim/2D-Games-using-OpenGL-in-Python'
    },
    {
      category: 'Natural Language Processing II',
      title: 'NLP Movie Review Classifier',
      description: 'This project delves into Natural Language Processing (NLP) to create a sentiment analysis algorithm for movie reviews.',
      imageUrl: '/imdb.png',  // Updated
      githubUrl: 'https://github.com/shihabmuhtasim/NLP-Movie-Review-Classification'
    },
    {
      category: 'Artificial Intelligence',
      title: 'Weather Prediction Machine Learning Model',
      description: 'Conducted effective dataset preprocessing, model analysis, model selection and comparison, emphasizing precision and recall metrics and developed four machine learning models in Python.',
      imageUrl: '/weatherml.png',  // Updated
      githubUrl: 'https://github.com/shihabmuhtasim/Machinearning-Model-Weather-Prediction-Rain-Snow-'
    },
    {
      category: 'Database Systems',
      title: 'Green Closet - Ecommerce Website',
      description: 'An ecommerce platform built using HTML, CSS, PHP, and MySQL, aimed at providing a hassle-free shopping experience for customers looking to buy clothes online.',
      imageUrl: '/greencloset.png',  // Updated
      githubUrl: 'https://github.com/shihabmuhtasim/Online-Clothing-Store-Website'
    },
    {
      category: 'Game Development',
      title: 'Photo Jump - Personalized Endless Runner',
      description: 'An endless runner game using JavaScript and HTML where users can customize characters with their own photos and jump over obstacles.',
      imageUrl: '/photojump.png',  // Updated
      githubUrl: 'https://github.com/shihabmuhtasim/Photo-Jump---A-Personalized-Endless-Runner-Game'
    },
    {
      category: 'Software',
      title: 'Software Opener',
      description: 'A Python-based GUI application that enables users to run multiple applications at once. Users can select and add applications, view the list, and launch them with one click.',
      imageUrl: '/softopener.png',  // Updated
      githubUrl: 'https://github.com/shihabmuhtasim/Software-Opener-'
    },
    {
      category: 'Robotics',
      title: 'Smart Scape - Safe Smart Home',
      description: 'Smart scape is a smart home robotics model made using Arduino and other components that merges the convenience and safety of users.',
      imageUrl: '/smart_scape.jpg',  // Updated
      githubUrl: 'https://github.com/shihabmuhtasim/Smart-Scape'
    },
    {
      category: 'Data Science',
      title: 'Traffic Fatalities Analysis',
      description: 'A data science and machine learning project analyzing traffic accident data to uncover patterns, cluster states, and predict factors influencing fatality rates.',
      imageUrl: '/Traffic_ml.jpg',  // Updated
      githubUrl: 'https://github.com/shihabmuhtasim/Analyzing-Traffic-Fatalities-Through-Data-Science-and-ML'
    }
  ];

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105"
            >
              <div className="relative">
                <img 
                  src={project.imageUrl} 
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                                              </div>
              {/* <div className="flex justify-center mt-4 mb-4">
                <span className="inline-block bg-black text-white text-[0.65rem] px-2 py-0.5 rounded-md">
                  {project.category}
                </span>
              </div> */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <a 
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                >
                  <Code className="w-4 h-4 mr-2" />
                  View Project
                  <ExternalLink className="w-4 h-4 ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;