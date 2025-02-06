import React, { useState } from 'react';

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const sidebarItems = [
    { icon: '/path/to/post-icon.svg', label: 'Post', action: () => console.log('Post clicked') },
    { icon: '/path/to/add-icon.svg', label: 'Add', action: () => console.log('Add clicked') },
    { icon: '/path/to/help-icon.svg', label: 'Help', action: () => console.log('Help clicked') },
    { icon: '/path/to/activity-icon.svg', label: 'Activity', action: () => console.log('Activity clicked') },
    { icon: '/path/to/settings-icon.svg', label: 'Settings', action: () => console.log('Settings clicked') },
  ];

  return (
    <div
      className={`fixed top-0 left-0 h-screen bg-gray-800 text-white transition-width duration-300 z-10 ${
        isExpanded ? 'w-64' : 'w-16'
      }`}
    >
      <button
        className="absolute top-4 right-4 text-white focus:outline-none"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={isExpanded ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
          />
        </svg>
      </button>
      <ul className="mt-16 space-y-4">
        {sidebarItems.map((item, index) => (
          <li key={index} className="cursor-pointer hover:bg-gray-700">
            <button
              onClick={item.action}
              className={`flex items-center ${isExpanded ? 'pl-4' : 'justify-center'}`}
            >
              <img src={item.icon} alt={item.label} className="h-6 w-6 mr-2" />
              {isExpanded && <span>{item.label}</span>}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
