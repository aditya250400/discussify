import React from 'react';
import PropTypes from 'prop-types';
import TopThreeRankingsSkeleton from './skeleton/TopThreeRankingsSkeleton';

function TopThreeRangkings({ leaderboards }) {
  return (

    leaderboards.length < 1 ? <TopThreeRankingsSkeleton /> : (
      <div className=" p-3">
        <h1 className="text-[20px] md:text-[25px] font-semibold ml-5 my-5 mb-[30px]">Top 3 Most Active Users</h1>
        <div className="flex justify-around items-end gap-[2px] md:gap-0 lg:w-[788px] lg:mx-auto">
          {/* Ranking 2 */}
          <div className="flex flex-col gap-2 justify-center items-center">
            <img src={leaderboards[1].user.avatar} alt={leaderboards[1].user.name} className="w-[45px] h-[45px]  md:w-[70px] md:h-[70px] text-center rounded-full bg-[#FC3737] text-white flex justify-center items-center text-sm md:text-lg" />
            <h5 className="text-[12px] md:text-[14px] text-center">{leaderboards[1].user.name}</h5>
            <div className="w-[80px] h-[150px] md:w-[180px] lg:w-[220px] lg:h-[300px] bg-[#312ECB] text-white flex flex-col justify-end items-center pb-10  gap-1 rounded-xl  shadow-lg">
              <h1 className="text-lg md:text-xl lg:text-3xl font-bold">2nd</h1>
              <p className="text-xs text-center md:text-sm lg:text-lg">{leaderboards[1].score}</p>
            </div>
          </div>

          {/* Ranking 1 */}
          <div className="flex flex-col gap-2 justify-center items-center">
            <img src={leaderboards[0].user.avatar} alt={leaderboards[0].user.name} className="w-[45px] h-[45px]  md:w-[70px] md:h-[70px] text-center rounded-full bg-[#FC3737] text-white flex justify-center items-center text-sm md:text-lg" />
            <h5 className="text-[12px] md:text-[14px] text-center">{leaderboards[0].user.name}</h5>
            <div className="w-[90px] h-[185px] md:w-[200px] lg:w-[265px] lg:h-[370px] bg-bluePrimary text-white flex flex-col gap-1 rounded-xl justify-center items-center shadow-lg">
              <h1 className="text-lg md:text-xl lg:text-3xl font-bold">1st</h1>
              <p className="text-xs text-center md:text-sm lg:text-lg">{leaderboards[0].score}</p>
            </div>
          </div>

          {/* Ranking 3 */}
          <div className="flex flex-col gap-2 justify-center items-center">
            <img src={leaderboards[2].user.avatar} alt={leaderboards[2].user.name} className="w-[45px] h-[45px]  md:w-[70px] md:h-[70px] text-center rounded-full bg-[#FC3737] text-white flex justify-center items-center text-sm md:text-lg" />
            <h5 className="text-[12px] md:text-[14px] text-center">{leaderboards[2].user.name}</h5>
            <div className="w-[80px] h-[135px] md:w-[170px] lg:w-[220px] lg:h-[270px] bg-[#0369A1] text-white flex flex-col justify-end items-center pb-10 gap-1 rounded-xl shadow-lg">
              <h1 className="text-lg md:text-xl lg:text-3xl font-bold">3rd</h1>
              <p className="text-xs text-center md:text-sm lg:text-lg">{leaderboards[2].score}</p>
            </div>
          </div>
        </div>
      </div>
    )

  );
}

TopThreeRangkings.propType = {
  leaderboards: PropTypes.instanceOf(Array),
};

export default TopThreeRangkings;
