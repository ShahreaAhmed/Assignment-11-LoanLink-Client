import React from 'react';

const LoadingSpinner = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="relative w-20 h-20">
        <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-amber-500 animate-spin"></div>
        <div className="absolute inset-2 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 animate-pulse"></div>
      </div>
    </div>
    );
};

export default LoadingSpinner;