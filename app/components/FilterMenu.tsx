'use client'
import React, { useState } from 'react';

const FilterMenu: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`lg:w-1/4 w-full p-4 bg-black bg-opacity-60 text-white ${isMenuOpen ? 'lg:hidden' : 'lg:block'}`}>
      <div className="block lg:hidden" onClick={toggleMenu}>
        <svg
          className="w-6 h-6 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          {isMenuOpen ? (
            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
          ) : (
            <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" />
          )}
        </svg>
      </div>
      <h2 className="text-2xl font-semibold mb-4">Filter By</h2>
      <div className="mb-4">
        <label className="block text-lg font-medium">Languages</label>
        <div className="flex flex-wrap -mx-2">
          {/* Buttons for languages */}
          <button className="bg-blue-500 text-white px-4 py-2 rounded-full m-2 focus:outline-none">JavaScript</button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-full m-2 focus:outline-none">Python</button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-full m-2 focus:outline-none">Java</button>
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-lg font-medium">Domain</label>
        <div className="flex flex-wrap -mx-2">
          {/* Buttons for domains */}
          <button className="bg-blue-500 text-white px-4 py-2 rounded-full m-2 focus:outline-none">Web Development</button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-full m-2 focus:outline-none">Data Science</button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-full m-2 focus:outline-none">Machine Learning</button>
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-lg font-medium">Difficulty</label>
        <div className="flex flex-wrap -mx-2">
          {/* Buttons for difficulty levels */}
          <button className="bg-blue-500 text-white px-4 py-2 rounded-full m-2 focus:outline-none">Beginner</button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-full m-2 focus:outline-none">Intermediate</button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-full m-2 focus:outline-none">Advanced</button>
        </div>
      </div>
    </div>
  );
};

export default FilterMenu;

