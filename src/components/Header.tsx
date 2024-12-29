import React from 'react';

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-gray-900/80 backdrop-blur-sm z-50">
      <nav className="container mx-auto px-4 py-4">
        <ul className="flex justify-center space-x-8">
          <li><a href="#home" className="hover:text-blue-400 transition-colors">Home</a></li>
          <li><a href="#experience" className="hover:text-blue-400 transition-colors">Experience</a></li>
          <li><a href="#skills" className="hover:text-blue-400 transition-colors">Skills</a></li>
          <li><a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;