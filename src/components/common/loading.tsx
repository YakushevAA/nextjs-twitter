import React from 'react';

const SkeletonLoader: React.FC = () => {
  return (
    <div className="animate-pulse bg-white rounded-xl shadow-md overflow-hidden m-4">
      <div className="p-4">
        <div className="h-4 uppercase tracking-wide bg-gray-300 font-semibold"></div>
        <p className="h-4 block mt-1 text-lg leading-tight font-medium bg-gray-300"></p>
        <p className="h-4 mt-2 bg-gray-300"></p>
      </div>
    </div>
    // <div className="animate-pulse space-y-4 min-h-20 w-full">
    //   <div className="h-4 bg-gray-300 rounded"></div>
    //   <div className="space-y-2">
    //     <div className="h-4 bg-gray-300 rounded w-5/6"></div>
    //     <div className="h-4 bg-gray-300 rounded w-4/6"></div>
    //   </div>
    // </div>
  );
};

export default SkeletonLoader;
