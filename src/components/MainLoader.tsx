import React from 'react';

const MainLoader = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-white">

      {/* Spinner */}
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-gray-300 border-t-black" />

      {/* Loading text */}
      <p className="text-gray-600 text-sm tracking-wide">Loading...</p>
    </div>
  );
};

export default MainLoader;
