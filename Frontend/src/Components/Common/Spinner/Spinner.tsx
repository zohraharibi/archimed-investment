import React from 'react';


const Spinner: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="spinner">
        <div className="double-bounce1"></div>
        <div className="double-bounce2"></div>
      </div>
    </div>
  );
};

export default Spinner;
