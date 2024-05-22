/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';

function LeaderboardsPageSkeleton() {
  return (
    <div className="p-4 md:max-w-screen-xl md:mx-auto">
      <div className="bg-white rounded-xl">
        {/* Top Three Rankings */}
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
        {/* Top Three Rankings end */}
        {/* Ranking Table */}
        <div className="p-3">
          <div className="overflow-x-auto my-5 mx-auto">
            <table className="table table-lg max-w-screen-sm md:max-w-screen-lg mx-auto">
              {/* head */}
              <thead className="text-center text-lg md:text-[20px] text-slate-500">
                <tr>
                  <th>
                    <div className="animate-pulse h-[15px] bg-slate-300 mx-auto rounded-lg w-[70px]" />
                  </th>
                  <th>
                    <div className="animate-pulse h-[15px] bg-slate-300 mx-auto rounded-lg w-[70px]" />
                  </th>
                  <th>
                    <div className="animate-pulse h-[15px] bg-slate-300 mx-auto rounded-lg w-[70px]" />
                  </th>
                </tr>
              </thead>
              <tbody className="text-center">
                {/* Skeletons for Ranking Table */}
                {Array.from({ length: 10 }, (_, index) => (
                  <tr key={index}>
                    <td>
                      <div className="animate-pulse h-[15px] bg-slate-300 mx-auto rounded-lg w-[70px]" />
                    </td>
                    <td className="flex md:w-1/2 md:mx-auto items-center">
                      <div className="w-[40px] h-[40px] rounded-full bg-slate-300 animate-pulse" />
                      <div className="flex flex-col flex-wrap items-start ml-2 overflow-hidden">
                        <div className="animate-pulse h-[10px] bg-slate-300 rounded-lg w-[70px]" />
                        <div className="animate-pulse mt-3 h-[10px] bg-slate-300 rounded-lg w-[70px]" />
                      </div>
                    </td>
                    <td>
                      <div className="animate-pulse bg-slate-300 h-[20px] w-[70px] rounded-lg mx-auto" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        {/* Ranking Table end */}
      </div>
    </div>
  );
}

export default LeaderboardsPageSkeleton;
