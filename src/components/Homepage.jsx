import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

const Homepage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className="flex-1 flex items-center justify-center">
          <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
            <h1 className="text-2xl font-semibold mb-4 text-center">Search for Properties</h1>
            <input
              type="text"
              placeholder="Search..."
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
