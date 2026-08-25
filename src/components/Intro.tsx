import React from 'react';
import { ArrowDown, ArrowUpRight, GraduationCap, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Intro = () => {
  return (
    <section id="intro" className="hero animate-fadeIn">
      <div className="hero-glow hero-glow-one" aria-hidden="true" />
      <div className="hero-glow hero-glow-two" aria-hidden="true" />
      <div className="hero-inner">
        <div className="hero-copy">
          <h1>Shihab Muhtasim</h1>
          <p className="hero-lede">
            I’m Shihab Muhtasim, an Erasmus Mundus scholar turning computer vision research into useful, real-world systems.
          </p>
          <div className="hero-actions">
            <Link to="/projects" className="button button-primary">
              Explore my work <ArrowUpRight aria-hidden="true" />
            </Link>
            <button
              type="button"
              className="button button-secondary"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
              About me <ArrowDown aria-hidden="true" />
            </button>
          </div>
          <div className="hero-meta">
            <span><MapPin aria-hidden="true" /> Bordeaux, France</span>
            <span><GraduationCap aria-hidden="true" /> University of Bordeaux · IPCVAI</span>
          </div>
        </div>
        <div className="hero-portrait-wrap">
          <div className="hero-portrait-frame">
            <img src={`${import.meta.env.BASE_URL}profile-pic.jpg`} alt="Shihab Muhtasim" className="hero-portrait" />
          </div>
          <div className="hero-note">
            <strong>University of Bordeaux</strong>
            <span>IPCVAI · Computer Vision</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
