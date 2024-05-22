/* eslint-disable no-nested-ternary */
/* eslint-disable max-len */
/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ThreadSearch from '../components/ThreadSearch';
import ThreadItem from '../components/ThreadItem';
import TrendingTags from '../components/TrendingTags';
import DiscussifyStats from '../components/DiscussifyStats';
import CreateThreadButton from '../components/CreateThreadButton';
import Head from '../components/Head';
import { asyncGetAllThreads, getAllThreadsRequestActionCreator } from '../redux/threads/action';
import { getAllUsers, getAllUsersRequestActionCreator } from '../redux/users/action';
import { asyncGetAllTags, getAllTagsRequestActionCreator } from '../redux/tags/action';
import { asyncGetLeaderboards, getLeaderboardsRequestActionCreator } from '../redux/leaderboards/action';
import ThreadsPageSkeleton from '../components/skeleton/ThreadsPageSkeleton';

function ThreadsPage() {
  const [searchInput, setSearchInput] = useState('');
  const [tagFilter, setTagFilter] = useState('');
  const { loading, threads } = useSelector((states) => states.threads);
  const { users } = useSelector((states) => states.users);
  const { leaderboards } = useSelector((states) => states.leaderboards);
  const dispatch = useDispatch();

  const onSearchInputChange = (e) => {
    setSearchInput(e.target.value);
  };
  const onTagFilterHandle = (tag) => {
    setTagFilter(tag);
  };
  const onResetFilter = () => {
    setSearchInput('');
    setTagFilter('');
  };

  const threadsFiltered = threads.filter((thread) => {
    const threadTitleFilter = thread.title.toLowerCase().includes(searchInput.toLowerCase());
    const threadTagFilter = thread.category && thread.category.toLowerCase().includes(tagFilter.toLowerCase());

    // Jika tidak ada input pencarian dan filter tag, tampilkan semua thread
    if (!searchInput && !tagFilter) {
      return true;
    }

    if (searchInput && tagFilter) {
      return threadTitleFilter && threadTagFilter;
    }

    if (searchInput) {
      return threadTitleFilter;
    }

    if (tagFilter) {
      return threadTagFilter;
    }
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(asyncGetAllThreads());
    dispatch(getAllUsers());
    dispatch(asyncGetAllTags());
    dispatch(asyncGetLeaderboards());

    return () => {
      dispatch(getAllThreadsRequestActionCreator());
      dispatch(getAllUsersRequestActionCreator());
      dispatch(getAllTagsRequestActionCreator());
      dispatch(getLeaderboardsRequestActionCreator());
    };
  }, []);

  return (
    <>
      <Head title="Threads" />
      {
      loading ? <ThreadsPageSkeleton /> : (
        <div className="py-[20px] px-3 max-w-screen-2xl mx-auto">
          <div className="flex flex-col gap-5 md:gap-2 md:flex-row-reverse  ">
            <div className="md:w-[345px] md:mx-auto  ">
              <div className="md:sticky md:right-0 md:top-28">
                <CreateThreadButton />
                <TrendingTags threads={threads} onTagFilterHandle={onTagFilterHandle} tagFilter={tagFilter} />
                <DiscussifyStats threads={threads} users={users} leaderboards={leaderboards} />

              </div>
            </div>

            <div className="md:w-[800px]  md:mx-auto ">
              <ThreadSearch onSearchInputChange={onSearchInputChange} searchInput={searchInput} />
              {searchInput !== '' || tagFilter !== ''
                ? (
                  <div className="mt-10 flex items-center">
                    <div className="bg-white rounded-s-xl w-full p-2">
                      <h1 className="text-base">
                        Result for
                        <span className="font-extrabold">
                          {' '}
                          {`${searchInput}${searchInput !== '' && tagFilter !== '' ? ',' : ''} #${tagFilter} `}
                        </span>
                        :
                      </h1>
                    </div>
                    <button className="font-bold text-white bg-bluePrimary rounded-e-xl p-2 flex justify-center items-center" type="button" onClick={onResetFilter}>X</button>
                  </div>
                )
                : null}
              { threadsFiltered.length > 0 ? (
                threadsFiltered.map((thread) => (
                  <div key={thread.id} className="rounded-xl overflow-hidden bg-white shadow-lg my-5">
                    <ThreadItem thread={thread} users={users.users} />
                  </div>

                ))
              ) : <h1 className="text-4xl text-center my-10">Data Not Found</h1>}
            </div>

          </div>
        </div>
      )
     }
    </>
  );
}

export default ThreadsPage;
