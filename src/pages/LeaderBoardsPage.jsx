import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TopThreeRangkings from '../components/TopThreeRangkings';
import RankingsTable from '../components/RankingsTable';
import Head from '../components/Head';
import { asyncGetLeaderboards, getLeaderboardsRequestActionCreator } from '../redux/leaderboards/action';
import LeaderboardsPageSkeleton from '../components/skeleton/LeaderBoardsPageSkeleton';

function LeaderboardsPage() {
  const dispatch = useDispatch();
  const { loading, leaderboards = [] } = useSelector((states) => states.leaderboards);

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(asyncGetLeaderboards());

    return () => {
      dispatch(getLeaderboardsRequestActionCreator());
    };
  }, []);

  return (
    <>
      <Head title="Leaderboards" />
      {
            loading ? <LeaderboardsPageSkeleton /> : (
              <div className="p-4 md:max-w-screen-xl md:mx-auto">
                <div className="bg-white rounded-xl ">
                  <TopThreeRangkings leaderboards={leaderboards} />
                  <RankingsTable leaderboards={leaderboards} />
                </div>

              </div>
            )
          }
    </>
  );
}

export default LeaderboardsPage;
