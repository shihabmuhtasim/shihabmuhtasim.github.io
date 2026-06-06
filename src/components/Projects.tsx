import React, { useState } from 'react';
import { ExternalLink, Code } from 'lucide-react';

type CategoryKey = 'all' | 'cv' | 'ml' | 'se';

interface Project {
  categoryKey: CategoryKey;
  categoryLabel: string;
  title: string;
  description: string;
  imageUrl: string;
  githubUrl: string;
}

const projects: Project[] = [
  // ── Computer Vision & Image Processing ──
  {
    categoryKey: 'cv',
    categoryLabel: 'Computer Vision',
    title: 'Cross-Camera Re-Identification on Urban Elements',
    description:
      'Cross-camera retrieval system for urban objects across non-overlapping surveillance cameras using a Part-Aware Transformer with ensemble methods and camera-adversarial training. Achieved 0.15884 mAP@100 — a 54.7% relative improvement over baseline — and placed in the top 10 on the Kaggle UAM ReID Challenge 2026 leaderboard.',
    imageUrl: '/cross-camera-vit-cover.svg',
    githubUrl: 'https://github.com/shihabmuhtasim/CROSS-CAMERA-RE-IDENTIFICATION-ON-URBAN-ELEMENTS',
  },
  {
    categoryKey: 'cv',
    categoryLabel: 'Computer Vision',
    title: 'CLIP Spatial Reasoning — Explainability & Failure Analysis',
    description:
      'Investigated spatial reasoning failures in CLIP ViT-B/32 through seven structured experiments on the Visual Spatial Reasoning dataset. Used Grad-CAM attribution, layer-wise text embedding analysis, and comparative evaluation against BLIP to identify and taxonomize systematic failure modes.',
    imageUrl: '/flip-cover.svg',
    githubUrl: 'https://github.com/shihabmuhtasim/CLIP-Spatial-Reasoning-Explainability-and-Failure-Analysis',
  },
  {
    categoryKey: 'cv',
    categoryLabel: 'Computer Vision',
    title: 'MultiView 3D Reconstruction',
    description:
      'End-to-end MATLAB pipeline for Euclidean 3D scene reconstruction from uncalibrated images — implementing Zhang\'s camera calibration, SIFT feature matching, RANSAC-based homography and fundamental matrix estimation, multi-view DLT resection, projective bundle adjustment, and Essential matrix decomposition with chirality-based solution selection.',
    imageUrl: '/3d-recon-cover.svg',
    githubUrl: 'https://github.com/shihabmuhtasim/MultiView-3D-Reconstruction',
  },
  {
    categoryKey: 'cv',
    categoryLabel: 'Computer Vision',
    title: 'Bingo Detection — Image Processing Model',
    description:
      'A MATLAB image-processing pipeline that analyzes Bingo card photos by correcting rotation, digitizing the grid, detecting stamped cells, and validating Bingo patterns using frequency-domain analysis and shape-based detection.',
    imageUrl: '/bingo-detection-cover.jpg',
    githubUrl: 'https://github.com/shihabmuhtasim/Bingo-Detection-Image-Processing-Model',
  },
  {
    categoryKey: 'cv',
    categoryLabel: 'Computer Vision',
    title: 'Drone Imagery — Texture Segmentation & Car Detection',
    description:
      'A computer vision project on aerial/drone imagery focusing on texture-based segmentation and vehicle detection, exploring classical and ML approaches for separating terrain regions and identifying cars from overhead views.',
    imageUrl: '/drone-seg-car-cover.jpg',
    githubUrl: 'https://github.com/shihabmuhtasim/Drone-Image-texture-segmentation-and-car-detection',
  },

  // ── ML & Data Science ──
  {
    categoryKey: 'ml',
    categoryLabel: 'ML & Data Science',
    title: 'Prediction of APS Failure in Scania Trucks',
    description:
      'A predictive maintenance project that trains machine learning models to detect imminent Air Pressure System (APS) failures in Scania heavy-duty trucks using operational sensor data — focusing on early detection to reduce downtime and maintenance cost.',
    imageUrl: '/aps-scania-cover.jpg',
    githubUrl: 'https://github.com/shihabmuhtasim/Prediction-of-APS-Failure-in-Scania-Trucks',
  },
  {
    categoryKey: 'ml',
    categoryLabel: 'ML & Data Science',
    title: 'Gait Analysis under Dual-Task Conditions',
    description:
      'An end-to-end BSP pipeline that processes smartphone accelerometer & gyroscope data to distinguish normal walking vs. cognitive dual-task walking. Includes filtering/resampling, feature engineering, and multiple ML classifiers.',
    imageUrl: '/gait-dualtask-cover.jpg',
    githubUrl: 'https://github.com/shihabmuhtasim/Gait-Analysis-under-Dual-Task-Conditions',
  },
  {
    categoryKey: 'ml',
    categoryLabel: 'ML & Data Science',
    title: 'NLP Movie Review Classifier',
    description:
      'Sentiment analysis of movie reviews using Natural Language Processing techniques, experimenting with classical ML and deep learning approaches on the IMDB dataset.',
    imageUrl: '/imdb.png',
    githubUrl: 'https://github.com/shihabmuhtasim/NLP-Movie-Review-Classification',
  },
  {
    categoryKey: 'ml',
    categoryLabel: 'ML & Data Science',
    title: 'Weather Prediction Machine Learning Model',
    description:
      'Dataset preprocessing, model selection, and comparison of four ML models in Python to predict rain/snow events, with emphasis on precision and recall metrics.',
    imageUrl: '/weatherml.png',
    githubUrl: 'https://github.com/shihabmuhtasim/Machinearning-Model-Weather-Prediction-Rain-Snow-',
  },
  {
    categoryKey: 'ml',
    categoryLabel: 'ML & Data Science',
    title: 'Traffic Fatalities Analysis',
    description:
      'Data science and machine learning project analyzing traffic accident data to uncover patterns, cluster states, and predict factors influencing fatality rates using visualization, statistical analysis, and supervised ML.',
    imageUrl: '/Traffic_ml.jpg',
    githubUrl: 'https://github.com/shihabmuhtasim/Analyzing-Traffic-Fatalities-Through-Data-Science-and-ML',
  },

  // ── Software Engineering & Web Development ──
  {
    categoryKey: 'se',
    categoryLabel: 'Software Engineering',
    title: 'PatternCraft — Design Patterns Portfolio',
    description:
      'A curated portfolio of clean, modular implementations of GoF design patterns, built as coursework and structured around real-world inspired problems with extensible, maintainable solutions.',
    imageUrl: '/patterncraft-cover.jpg',
    githubUrl: 'https://github.com/shihabmuhtasim/Pattern-Craft---Design-Patterns',
  },
  {
    categoryKey: 'se',
    categoryLabel: 'Software Engineering',
    title: 'Rent Koro — Car Rental Website (Laravel)',
    description:
      'Full-stack car rental platform in Laravel with admin, vendor, general, and guest user roles — facilitating car listings, bookings, and management with a seamless rental experience.',
    imageUrl: '/rentkoro.png',
    githubUrl: 'https://github.com/shihabmuhtasim/RentCar-A-car-rental-website-in-Laravel',
  },
  {
    categoryKey: 'se',
    categoryLabel: 'Software Engineering',
    title: 'Wearwise — Clothing Rental Website',
    description:
      'Specialized in Admin Panel and Vendor Management using SQL, Laravel, PHP, HTML, and session management to deliver a secure and intuitive clothing rental interface.',
    imageUrl: '/wearwise.png',
    githubUrl: 'https://github.com/shihabmuhtasim/wearwise',
  },
  {
    categoryKey: 'se',
    categoryLabel: 'Software Engineering',
    title: 'Password Strength Checker',
    description:
      'Assembly language project using the emu8086 processor to assess password strength based on length, character types, and sequences — categorizing into Very Strong, Strong, Weak, or Very Weak.',
    imageUrl: '/mp.png',
    githubUrl: 'https://github.com/shihabmuhtasim/Emu8086-Assembly-Password-Strength-Checker',
  },
  {
    categoryKey: 'se',
    categoryLabel: 'Software Engineering',
    title: '2D Games Using OpenGL in Python',
    description:
      'Multiple games built with OpenGL in Python showcasing graphical and interactive elements through OpenGL primitives — includes a spaceship shooter, diamond catcher, and more.',
    imageUrl: '/2dgames.png',
    githubUrl: 'https://github.com/shihabmuhtasim/2D-Games-using-OpenGL-in-Python',
  },
  {
    categoryKey: 'se',
    categoryLabel: 'Software Engineering',
    title: 'Green Closet — Ecommerce Website',
    description:
      'Ecommerce platform built with HTML, CSS, PHP, and MySQL providing a seamless online shopping experience for clothing, including cart, user auth, and product management.',
    imageUrl: '/greencloset.png',
    githubUrl: 'https://github.com/shihabmuhtasim/Online-Clothing-Store-Website',
  },
  {
    categoryKey: 'se',
    categoryLabel: 'Software Engineering',
    title: 'Photo Jump — Personalized Endless Runner',
    description:
      'Browser-based endless runner in JavaScript and HTML where users customize their character with their own photo and jump over obstacles.',
    imageUrl: '/photojump.png',
    githubUrl: 'https://github.com/shihabmuhtasim/Photo-Jump---A-Personalized-Endless-Runner-Game',
  },
  {
    categoryKey: 'se',
    categoryLabel: 'Software Engineering',
    title: 'Software Opener',
    description:
      'Python GUI application that lets users select a set of applications and launch them all simultaneously with a single click.',
    imageUrl: '/softopener.png',
    githubUrl: 'https://github.com/shihabmuhtasim/Software-Opener-',
  },
  {
    categoryKey: 'se',
    categoryLabel: 'Software Engineering',
    title: 'Smart Scape — Safe Smart Home',
    description:
      'Smart home robotics model built with Arduino that merges convenience and safety through automated environmental sensing and control.',
    imageUrl: '/smart_scape.jpg',
    githubUrl: 'https://github.com/shihabmuhtasim/Smart-Scape',
  },
];

const TABS: { key: CategoryKey; label: string; dot: string }[] = [
  { key: 'all', label: 'All',                   dot: '' },
  { key: 'cv',  label: 'Computer Vision',        dot: 'bg-violet-500' },
  { key: 'ml',  label: 'ML & Data Science',      dot: 'bg-emerald-500' },
  { key: 'se',  label: 'Software Engineering',   dot: 'bg-blue-500' },
];

function getActiveTabClass(key: CategoryKey): string {
  switch (key) {
    case 'cv':  return 'bg-violet-600  text-white border-violet-600  shadow-lg shadow-violet-900/30';
    case 'ml':  return 'bg-emerald-600 text-white border-emerald-600 shadow-lg shadow-emerald-900/30';
    case 'se':  return 'bg-blue-600    text-white border-blue-600    shadow-lg shadow-blue-900/30';
    default:    return 'bg-slate-700   text-white border-slate-600   shadow-lg';
  }
}

function getTagClass(key: CategoryKey): string {
  switch (key) {
    case 'cv':  return 'bg-violet-100  text-violet-700  border border-violet-200';
    case 'ml':  return 'bg-emerald-100 text-emerald-700 border border-emerald-200';
    case 'se':  return 'bg-blue-100    text-blue-700    border border-blue-200';
    default:    return 'bg-gray-100    text-gray-600    border border-gray-200';
  }
}

function getLinkClass(key: CategoryKey): string {
  switch (key) {
    case 'cv':  return 'text-violet-600  hover:text-violet-800';
    case 'ml':  return 'text-emerald-600 hover:text-emerald-800';
    case 'se':  return 'text-blue-600    hover:text-blue-800';
    default:    return 'text-gray-500    hover:text-gray-800';
  }
}

function getCardAccentClass(key: CategoryKey): string {
  switch (key) {
    case 'cv':  return 'hover:border-violet-200  hover:shadow-violet-100/50';
    case 'ml':  return 'hover:border-emerald-200 hover:shadow-emerald-100/50';
    case 'se':  return 'hover:border-blue-200    hover:shadow-blue-100/50';
    default:    return 'hover:border-gray-300';
  }
}

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryKey>('all');
  const [animKey, setAnimKey] = useState(0);

  const handleCategoryChange = (key: CategoryKey) => {
    setActiveCategory(key);
    setAnimKey(k => k + 1);
  };

  const filtered = activeCategory === 'all'
    ? projects
    : projects.filter(p => p.categoryKey === activeCategory);

  return (
    <section className="bg-gray-100 py-14 min-h-screen">
      <div className="container mx-auto px-4 max-w-7xl">

        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-3">My Projects</h2>
          <p className="text-gray-500 text-sm tracking-wide">
            Computer Vision · Machine Learning · Software Engineering
          </p>
        </div>

        {/* Category filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {TABS.map(tab => {
            const isActive = activeCategory === tab.key;
            return (
              <button
                key={tab.key}
                onClick={() => handleCategoryChange(tab.key)}
                className={[
                  'flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold border transition-all duration-200',
                  isActive
                    ? getActiveTabClass(tab.key)
                    : 'bg-white text-gray-500 border-gray-200 hover:border-gray-400 hover:text-gray-700 shadow-sm',
                ].join(' ')}
              >
                {tab.dot && (
                  <span className={`w-2 h-2 rounded-full ${tab.dot} ${isActive ? 'opacity-100' : 'opacity-60'}`} />
                )}
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Projects grid */}
        <div
          key={animKey}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          style={{ animation: 'projectsFadeIn 0.3s ease-out' }}
        >
          {filtered.map((project) => (
            <div
              key={project.title}
              className={[
                'flex flex-col bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm',
                'transition-all duration-300 hover:-translate-y-1 hover:shadow-lg',
                getCardAccentClass(project.categoryKey),
              ].join(' ')}
            >
              {/* Image */}
              <div className="relative overflow-hidden" style={{ height: '192px' }}>
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      parent.style.background = 'linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%)';
                      parent.innerHTML = `<div style="height:100%;display:flex;align-items:center;justify-content:center;color:#94a3b8;font-size:2.5rem;">⬡</div>`;
                    }
                  }}
                />
                {/* Subtle bottom gradient */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{ background: 'linear-gradient(to top, rgba(255,255,255,0.15) 0%, transparent 50%)' }}
                />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-5">
                {/* Category badge */}
                <span className={`self-start text-xs px-2.5 py-0.5 rounded-full font-medium mb-3 ${getTagClass(project.categoryKey)}`}>
                  {project.categoryLabel}
                </span>
                <h3 className="text-base font-semibold text-gray-800 mb-2 leading-snug">{project.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-4">{project.description}</p>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-1.5 text-sm font-medium transition-colors ${getLinkClass(project.categoryKey)}`}
                >
                  <Code className="w-3.5 h-3.5" />
                  View Project
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes projectsFadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default Projects;
