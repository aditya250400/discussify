import React from 'react';
import PropTypes from 'prop-types';

function RankingsTable({ leaderboards }) {
  return (
    <div className="p-3">
      <h1 className="text-[20px] md:text-[25px] font-semibold md:ml-5 my-5 mb-[30px]">Rankings</h1>
      <div className="overflow-x-auto my-5 mx-auto">
        <table className="table table-lg max-w-screen-sm md:max-w-screen-lg mx-auto">
          {/* head */}
          <thead className="text-center text-lg md:text-[20px] text-slate-500">
            <tr>
              <th>Rank</th>
              <th>Name</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {
            leaderboards.map((leaderboard, key) => (
              <tr key={leaderboard.user.id}>
                <th>{key + 1}</th>
                <td className="flex items-center md:w-1/2 md:mx-auto">
                  <img src={leaderboard.user.avatar} alt={leaderboard.user.name} className="w-[40px] h-[40px] rounded-full" />
                  <div className="flex flex-col flex-wrap items-start ml-2 overflow-hidden">
                    <h3 className="font-bold text-[12px] truncate">{leaderboard.user.name}</h3>
                    <h4 className="text-[10px] text-[#374151]">{leaderboard.user.email}</h4>
                  </div>
                </td>
                <td className="text-[20px] font-bold">{leaderboard.score}</td>
              </tr>
            ))
           }
          </tbody>
        </table>
      </div>
    </div>
  );
}

RankingsTable.propType = {
  leaderboards: PropTypes.instanceOf(Array),
};

export default RankingsTable;
