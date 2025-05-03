import React from 'react';
import { MapPin, Mail, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="footer" className="bg-gray-900 text-white p-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4 border-b border-gray-700 pb-2">Address</h3>
            <p className="flex items-center">
              <MapPin className="w-5 h-5 mr-2 text-blue-400" />
              Dhaka, Bangladesh
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4 border-b border-gray-700 pb-2">Email</h3>
            <p className="flex items-center">
              <Mail className="w-5 h-5 mr-2 text-blue-400" />
              shihabmuhtasim.cs@gmail.com
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4 border-b border-gray-700 pb-2">Social</h3>
            <ul className="flex space-x-4">
              <li>
                <a 
                  href="https://www.linkedin.com/in/shihabmuhtasim/" 
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
              </li>
              <li>
                <a 
                  href="https://github.com/shihabmuhtasim" 
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="w-6 h-6" />
                </a>
              </li>
              <li>
                <a 
                  href="https://www.hackerrank.com/profile/shihabmuhtasim" 
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                  aria-label="HackerRank"
                >
                  <span className="icon brands fa-hackerrank"></span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <div id="copyright" className="text-center mt-8 pt-8 border-t border-gray-800">
        <p>Have a good day | Shihab Muhtasim</p>
      </div>
    </footer>
  );
};

export default Footer;