import React, { useState, useEffect } from 'react';

const WarningBox = () => {
  const [isVisible, setIsVisible] = useState(true);

  // Auto-close the warning after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 5000);

    // Clean up the timer if the component unmounts
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className='bg-yellow-500/90 backdrop-blur-sm text-black font-semibold py-2 px-4 flex justify-between items-center z-50 shadow-md relative'>
      <span className='flex-1 text-center sm:text-left pr-8'>
        This project is using a CoinGecko free API with limitations. Please be
        patient if the service is temporarily unavailable.
      </span>

      <button
        onClick={handleClose}
        className='text-2xl font-bold hover:bg-yellow-600/30 rounded-full w-8 h-8 flex items-center justify-center transition-colors absolute right-2'
        aria-label='Close notification'>
        ×
      </button>
    </div>
  );
};

export default WarningBox;
