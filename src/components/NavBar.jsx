import React from 'react';

const NavBar = () => {
  return (
    <div className="bg-gray-800 text-white p-4 flex justify-between items-center shadow-lg">
      <div>
        <h1 className="text-2xl font-bold">Pushpa 2</h1>
        <div className="text-sm mt-1">
          <span>Wave: Moradabad</span>
          <span className="ml-4">Today, 29 Dec, 07:45 PM</span>
        </div>
      </div>
      <select className="bg-gray-700 text-white p-3 mr-8 rounded-lg shadow-md">
        {[...Array(10).keys()].map((i) => (
          <option key={i + 1} value={i + 1}>
            {i + 1} Ticket{i > 0 ? 's' : ''}
          </option>
        ))}
      </select>
    </div>
  );
};

export default NavBar;
