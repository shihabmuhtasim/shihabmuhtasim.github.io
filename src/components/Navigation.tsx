import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Menu, X } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  useEffect(() => {
    setIsOpen(false); // Close dropdown menu on route change
  }, [location.pathname]);

  const goToTop = () => {
    setIsOpen(false);
    if (location.pathname === '/') {
      window.history.replaceState(null, '', window.location.pathname);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <nav id="nav" className="site-nav">
      <div className="site-nav-inner">
        <div className="site-brand-row">
          <Link
            to="/"
            onClick={goToTop}
            className="site-brand"
            aria-label="Go to the top of the home page"
            title="Back to top"
          >
            <span>SM</span>
            <span className="site-brand-label">Shihab Muhtasim</span>
          </Link>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="mobile-menu-button md:hidden"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        <div className={`${isOpen ? 'nav-open' : ''} site-nav-menu`}>
          <ul className="site-links">
            <li>
              <Link to="/" onClick={() => setIsOpen(false)} className={isActive('/') ? 'active' : ''}>About</Link>
            </li>
            <li>
              <Link to="/projects" onClick={() => setIsOpen(false)} className={isActive('/projects') ? 'active' : ''}>Projects</Link>
            </li>
            <li>
              <Link to="/hobbies-music" onClick={() => setIsOpen(false)} className={isActive('/hobbies-music') ? 'active' : ''}>Hobby</Link>
            </li>
            <li>
              <Link to="/contact-me" onClick={() => setIsOpen(false)} className={isActive('/contact-me') ? 'active contact-link' : 'contact-link'}>Contact</Link>
            </li>
          </ul>
          <ul className="site-socials">
            <li>
              <a href="https://www.linkedin.com/in/shihabmuhtasim/" aria-label="LinkedIn" target="_blank" rel="noreferrer">
                <Linkedin className="w-5 h-5" />
              </a>
            </li>
            <li>
              <a href="https://github.com/shihabmuhtasim" aria-label="GitHub" target="_blank" rel="noreferrer">
                <Github className="w-5 h-5" />
              </a>
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
