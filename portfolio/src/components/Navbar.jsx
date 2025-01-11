import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-blue-900">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-center">
          <div className="flex space-x-4">
            <a
              href="#"
              className="rounded-md px-3 py-2 text-md font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              aria-current="page"
            >
              Home
            </a>
            <a
              href="#"
              className="rounded-md px-3 py-2 text-md font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              About
            </a>
            <a
              href="#projects"
              className="rounded-md px-3 py-2 text-md font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              Projects
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
