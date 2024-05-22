import React from 'react';

function TrendingTagsSkeleton() {
  return (
    <div className="bg-white rounded-xl animate-pulse">
      <div className="flex items-center gap-2 p-4">
        <div className="bg-slate-300 rounded-full animate-pulse w-[50px] h-[20px]" alt="Tags Icon" />
        <div className="bg-slate-300 rounded-full animate-pulse w-[150px] h-[20px]" alt="Tags Icon" />
      </div>
      <div className="h-[1px] bg-[#C7C7C7] w-full" />

      <div className="flex flex-wrap justify-center my-3 py-3 px-2 gap-2">
        {
          Array.from({ length: 20 }, (_, index) => (
            <div key={index} className="p-1 h-[20px] w-[50px] rounded-lg animate-pulse bg-slate-300" />
          ))
      }
      </div>
    </div>
  );
}

export default TrendingTagsSkeleton;
