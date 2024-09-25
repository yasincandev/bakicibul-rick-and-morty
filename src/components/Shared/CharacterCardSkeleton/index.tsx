import React from "react";

const CharacterCardSkeleton = () => {
  return (
    <div className='h-full overflow-hidden rounded-lg bg-gray-200 animate-pulse'>
      <div className='aspect-square w-full bg-gray-300' />
      <div className='p-4'>
        <div className='h-6 bg-gray-300 rounded w-3/4 mb-2' />
        <div className='h-4 bg-gray-300 rounded w-1/2' />
        <div className='h-4 bg-gray-300 rounded w-1/3' />
      </div>
    </div>
  );
};

export default CharacterCardSkeleton;
