import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Github, Menu, X } from 'lucide-react';
import { FaHackerrank, FaAddressBook } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setIsOpen(false); // Close dropdown menu on route change
  }, [location.pathname]);

  return (
    <nav id="nav" className="bg-gray-800 text-white p-4 sticky top-0 z-10 shadow-md">
      <div className="container mx-auto flex flex-wrap items-center justify-center">
        <div className="flex justify-between w-full md:w-auto items-center">
          {/* <div className="text-lg font-semibold">Portfolio</div> */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        <div className={`${isOpen ? 'block' : 'hidden'} w-full md:flex md:items-center md:w-auto`}>
          <ul className="links flex flex-col items-center md:flex-row md:space-x-4 mb-4 md:mb-0 md:items-start">
            <li>
              <Link to="/" onClick={() => setIsOpen(false)} className="block px-4 py-2 hover:text-blue-400 transition-colors">About Me</Link>
            </li>
            <li>
              <Link to="/projects" onClick={() => setIsOpen(false)} className="block px-4 py-2 hover:text-blue-400 transition-colors">My Projects</Link>
            </li>
            <li>
              <Link to="/LifeUpdates" onClick={() => setIsOpen(false)} className="block px-4 py-2 hover:text-blue-400 transition-colors">Life Updates</Link>
            </li>

            <li>
              <Link to="/hobbies-music" onClick={() => setIsOpen(false)} className="block px-4 py-2 hover:text-blue-400 transition-colors">Hobby</Link>
            </li>
            <li>
              <Link to="/contact-me" onClick={() => setIsOpen(false)} className="block px-4 py-2 hover:text-blue-400 transition-colors">Contact Me</Link>
            </li>
          </ul>
          <ul className="icons flex flex-col items-center md:flex-row md:space-x-4">
            <li>
              <a href="https://www.linkedin.com/in/shihabmuhtasim/" className="block px-4 py-2 hover:text-blue-400 transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
            </li>
            <li>
              <a href="https://github.com/shihabmuhtasim" className="block px-4 py-2 hover:text-blue-400 transition-colors" aria-label="GitHub">
                <Github className="w-5 h-5" />
              </a>
            </li>
            
            <li>
              <a href="https://www.hackerrank.com/profile/shihabmuhtasim" className="block px-4 py-2 hover:text-blue-400 transition-colors" aria-label="HackerRank">
                <FaHackerrank className="w-5 h-5" />
              </a>
            </li>
            <li>
              <a href="https://sayhi.bio/Shihab-Muhtasim" className="block px-4 py-2 hover:text-blue-400 transition-colors" aria-label="Say Hi Contact Info">
                <FaAddressBook className="w-5 h-5" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;