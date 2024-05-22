import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import statsIcon from '../assets/icon/statsIcon.svg';
import userIcon from '../assets/icon/userIcon.svg';
import threadsIcon from '../assets/icon/threads.svg';
import leaderboardsIcon from '../assets/icon/leaderboards.svg';

function DiscussifyStats({
  threads, users, leaderboards,
}) {
  const { loading } = useSelector((states) => states.users);
  const loadingThreads = useSelector((states) => states.threads.loading);
  const loadingLeaderboards = useSelector((states) => states.leaderboards.loading);
  return (
    <div className="bg-white rounded-xl">
      <div className="flex items-center gap-2 p-4">
        <img src={statsIcon} alt="Tags Icon" />
        <h4 className="text-[16px] font-semibold">Discussify Stats</h4>
      </div>
      <div className="h-[1px] bg-[#C7C7C7] w-full" />

      <div className="flex flex-wrap mx-6 my-3 pb-5 gap-2">
        <ul className="flex flex-col gap-3 w-full">
          <li className="flex justify-between items-center ">
            <div className="flex items-center gap-3 cursor-pointer hover:text-bluePrimary">
              <img src={userIcon} alt="User Icon" className="w-[30px]" />
              <h2 className="text-[16px] mt-2">Users</h2>
            </div>
            <h2 className="text-[16px] cursor-pointer">{loading ? 'Loading...' : users.length}</h2>
          </li>
          <li className="flex justify-between items-center">
            <div className="flex items-center gap-3 cursor-pointer hover:text-bluePrimary">
              <img src={threadsIcon} alt="User Icon" className="w-[30px]" />
              <h2 className="text-[16px] ">Threads</h2>
            </div>
            <h2 className="text-[16px] cursor-pointer">{loadingThreads ? 'Loading...' : threads.length}</h2>
          </li>
          <li className="flex justify-between items-center">
            <div className="flex items-center gap-3 cursor-pointer hover:text-bluePrimary">
              <img src={leaderboardsIcon} alt="leaderboardsIcon Icon" className="w-[30px]" />
              <h2 className="text-[16px] mt-2">Leaderboards</h2>
            </div>
            <h2 className="text-[16px] cursor-pointer">{loadingLeaderboards ? 'Loading...' : leaderboards.length}</h2>
          </li>
        </ul>
      </div>
    </div>
  );
}

DiscussifyStats.propType = {
  threads: PropTypes.instanceOf(Array),
  users: PropTypes.instanceOf(Array),
  leaderboards: PropTypes.instanceOf(Array),
};

export default DiscussifyStats;
