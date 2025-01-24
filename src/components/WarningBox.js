import React, { useState } from 'react';

const WarningBox = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className='bg-yellow-500 text-black font-semibold py-1 px-4 flex justify-between items-center z-50'>
      <span>
        This project is using a CoinGecko free API with limitations. Please be
        patient if the service is temporarily unavailable.
      </span>
      <button onClick={handleClose} className='text-3xl font-bold'>
        ×
      </button>
    </div>
  );
};

export default WarningBox;
