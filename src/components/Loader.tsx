import React from 'react';
import loaderGif from '../assets/loader.gif';

interface LoaderProps {
  isLoading: boolean;
}

const Loader: React.FC<LoaderProps> = ({ isLoading }) => {
  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
      <div className="flex flex-col items-center">
        <img src={loaderGif} alt="Loading..." className="w-42 h-42 object-contain" />
        {/* <p className="mt-4 text-white text-lg font-semibold">Loading Portfolio...</p> */}
      </div>
    </div>
  );
};

export default Loader;