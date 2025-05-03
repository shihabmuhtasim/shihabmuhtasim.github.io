import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Github } from 'lucide-react';

const Navigation = () => {
  return (
    <nav id="nav" className="bg-gray-800 text-white p-4 sticky top-0 z-10 shadow-md">
      <div className="container mx-auto flex flex-col md:flex-row md:justify-between items-center">
        <ul className="links flex space-x-4 mb-4 md:mb-0">
          <li>
            <Link to="/" className="hover:text-blue-400 transition-colors px-4 py-2">About Me</Link>
          </li>
          <li>
            <Link to="/projects" className="hover:text-blue-400 transition-colors px-4 py-2">My Projects</Link>
          </li>
        </ul>
        <ul className="icons flex space-x-4">
          <li>
            <a href="https://www.linkedin.com/in/shihabmuhtasim/" className="hover:text-blue-400 transition-colors" aria-label="LinkedIn">
              <Linkedin className="w-5 h-5" />
            </a>
          </li>
          <li>
            <a href="https://github.com/shihabmuhtasim" className="hover:text-blue-400 transition-colors" aria-label="GitHub">
              <Github className="w-5 h-5" />
            </a>
          </li>
          <li>
            <a href="https://www.hackerrank.com/profile/shihabmuhtasim" className="hover:text-blue-400 transition-colors" aria-label="HackerRank">
              <span className="icon brands fa-hackerrank"></span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;