import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Intro from './components/Intro';
import Navigation from './components/Navigation';
import AboutMe from './components/AboutMe';
import Education from './components/Education';
import ResearchInterests from './components/ResearchInterests';
import Achievements from './components/Achievements';
import TechnicalSkills from './components/TechnicalSkills';
import WorkExperience from './components/WorkExperience';
import EducationHistory from './components/EducationHistory';
import Certifications from './components/Certifications';
import ExtraCurricular from './components/ExtraCurricular';
import TestScores from './components/TestScores';
import Footer from './components/Footer';
import ResearchObjective from './components/ResearchObjective';
import CV from './components/CV';
import Projects from './components/Projects';
import LifeUpdates from './components/LifeUpdates';
import HobbiesMusic from './components/HobbiesMusic'; 
import ContactMe from './components/ContactMe';
import HomeSectionNavigation from './components/HomeSectionNavigation';

import ScrollToTop from './components/ScrollToTop';

import './index.css';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-gray-100">
        <div id="wrapper" className="fade-in">
          <Intro />
          <Navigation />
          
          <Routes>
            <Route path="/" element={
              <div id="main">
                <div id="about" className="scroll-target"><Header /><AboutMe /></div>
                <HomeSectionNavigation />
                <div id="education" className="scroll-target"><Education /></div>
                <div id="experience" className="scroll-target"><WorkExperience /></div>
                <div id="awards" className="scroll-target"><Achievements /></div>
                <div id="research" className="scroll-target"><ResearchInterests /><ResearchObjective /></div>
                <div id="activities" className="scroll-target"><ExtraCurricular /></div>
                <div id="skills" className="scroll-target"><TechnicalSkills /></div>
                <div id="scores" className="scroll-target"><TestScores /></div>
                <div id="certifications" className="scroll-target"><Certifications /></div>
                <div id="history" className="scroll-target"><EducationHistory /></div>
                <div id="cv" className="scroll-target"><CV /></div>
              </div>
            } />
            <Route path="/projects" element={<Projects />} />

            <Route path="/LifeUpdates" element={<LifeUpdates/>} />

            <Route path="/hobbies-music" element={<HobbiesMusic />} />
            <Route path="/contact-me" element={<ContactMe />} />
          </Routes>
          
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
