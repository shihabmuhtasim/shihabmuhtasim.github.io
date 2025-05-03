import React from 'react';
import { UserCircle } from 'lucide-react';

const Header = () => {
  return (
    <header className="major text-center py-8 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-lg shadow-lg mb-8 transition-all duration-300 hover:shadow-xl">
      <span className="date text-gray-300 block mb-2 animate-fadeIn">About Me</span>
      <h1 className="text-4xl font-bold mb-4 animate-slideIn">Dynamic Problem Solver</h1>
      <div className="flex justify-center">
        <img 
          src="src/assets/profile pic.jpg" 
          alt="Shihab Muhtasim" 
          className="max-w-[40%] h-auto rounded-lg shadow-md transition-transform duration-500 hover:scale-105"
        />
      </div>
    </header>
  );
};

export default Header;