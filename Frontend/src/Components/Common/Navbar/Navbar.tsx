import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar: React.FC = () => {

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-white font-bold text-lg mb-2 md:mb-0">    
              ARCHIMED INVESTMENT   
         </div>
          <ul className="flex space-x-4 justify-content-center mb-2 md:mb-0">
            <li>
              <NavLink
                className="text-white hover:text-secondary hover:scale-110 transition-all duration-300"
                to="/investors"
              >
                Investors
              </NavLink>
            </li>
            <li>
              <NavLink
                className="text-white hover:text-secondary hover:scale-110 transition-all duration-300"
                to="/bills"
              >
                Bills
              </NavLink>
            </li>
            <li>
              <NavLink
                className="text-white hover:text-secondary hover:scale-110 transition-all duration-300"
                to="/"
              >
                Capital Calls
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
