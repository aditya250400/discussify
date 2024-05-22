import React from 'react';

function TopThreeRankingsSkeleton() {
  return (
    <div className="p-3">
      <div className="bg-slate-300 p-3 w-[150px] rounded-lg animate-pulse ml-5 my-5 mb-[30px]" />
      <div className="flex justify-around items-end gap-[2px] md:gap-0 lg:w-[788px] lg:mx-auto">
        {/* Skeleton for Ranking 2 */}
        <div className="flex flex-col gap-2 justify-center items-center">
          <div className="w-[45px] h-[45px] md:w-[70px] md:h-[70px] rounded-full bg-slate-300 animate-pulse flex justify-center items-center" />
          <div className="w-[80px] h-[150px] md:w-[180px] lg:w-[220px] lg:h-[300px] bg-slate-300 animate-pulse text-white flex flex-col justify-end items-center pb-10 gap-1 rounded-xl shadow-lg" />
        </div>

        {/* Skeleton for Ranking 1 */}
        <div className="flex flex-col gap-2 justify-center items-center">
          <div className="w-[45px] h-[45px] md:w-[70px] md:h-[70px] rounded-full bg-slate-300 text-white flex justify-center items-center text-sm md:text-lg animate-pulse" />
          <div className="bg-slate-300 text-white w-[90px] h-[185px] md:w-[200px] lg:w-[265px] lg:h-[370px] flex flex-col gap-1 justify-center items-center rounded-xl shadow-lg animate-pulse" />
        </div>

        {/* Skeleton for Ranking 3 */}
        <div className="flex flex-col gap-2 justify-center items-center">
          <div className="w-[45px] h-[45px] md:w-[70px] md:h-[70px] text-center rounded-full bg-slate-300 text-white flex justify-center items-center text-sm md:text-lg animate-pulse" />
          <div className="w-[80px] h-[135px] md:w-[170px] lg:w-[220px] lg:h-[270px] bg-slate-300 text-white flex flex-col justify-end items-center pb-10 gap-1 rounded-xl shadow-lg animate-pulse" />
        </div>
      </div>
    </div>
  );
}

export default TopThreeRankingsSkeleton;
