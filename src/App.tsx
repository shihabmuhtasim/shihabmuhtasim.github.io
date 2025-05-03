import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
import './index.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <div id="wrapper" className="fade-in">
          <Intro />
          <Navigation />
          
          <Routes>
            <Route path="/" element={
              <div id="main">
                <Header />
                <AboutMe />
                <ResearchObjective />
                <Education />
                <WorkExperience />
                
                <Achievements />
                <ResearchInterests />
                <ExtraCurricular />
                <TechnicalSkills />
                <Certifications />
                
                <TestScores />
                <EducationHistory />
                <CV />
              </div>
            } />
            <Route path="/projects" element={<Projects />} />
          </Routes>
          
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;