import React from 'react';
import { NavLink } from 'react-router-dom';

interface CardProps {
  children?: React.ReactNode; 
  link?: string;


}

const Card: React.FC<CardProps> = ({children, link}) => {

  const cardContent = (
  <div className="group card m-5 rounded-lg overflow-hidden shadow-md transition-transform transform hover:scale-105 relative">
     <div className='mx-5 p-4'>
     {children}
     </div>
  </div>
  );

  return link ? (

    <NavLink to={link} className="block">
      {cardContent}
    </NavLink>
    ) : (
    <div className="block">
      {cardContent}
    </div>
  );
};

export default Card;
