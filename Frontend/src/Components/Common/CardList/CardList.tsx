import React from 'react';
interface CardProps {
  children: React.ReactNode; 
}

const CardList: React.FC<CardProps> = ({children}) => {


  return (
    <div className="container mx-auto mt-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 px-5">
        {children}
      </div>
      </div>
  )
  
};

export default CardList;
