import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import tagsIcon from '../assets/icon/tagsIcon.svg';
import TrendingTagsSkeleton from './skeleton/TrendingTagsSkeleton';
import { asyncGetAllTags } from '../redux/tags/action';
import { asyncGetLeaderboards } from '../redux/leaderboards/action';

function TrendingTags({ onTagFilterHandle, tagFilter }) {
  const { tags, loading } = useSelector((states) => states.tags);
  const uniqueTags = Object.values(tags.reduce((acc, tag) => {
    acc[tag.category] = tag;
    return acc;
  }, {}));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncGetAllTags());
    dispatch(asyncGetLeaderboards());
  }, []);

  return (
    loading ? <TrendingTagsSkeleton /> : (
      <div className="bg-white rounded-xl">
        <div className="flex items-center gap-2 p-4">
          <img src={tagsIcon} alt="Tags Icon" />
          <h4 className="text-[16px] font-semibold">Trending Tags</h4>
        </div>
        <div className="h-[1px] bg-[#C7C7C7] w-full" />

        <div className="flex flex-wrap justify-center my-3 py-3 px-2 gap-2">
          {
       uniqueTags.map((tag) => (
         <button type="button" onClick={() => onTagFilterHandle(tag.category)} className={`${tagFilter !== '' && tagFilter === tag.category ? 'bg-sky-600 text-white' : 'bg-[#DBEAFE]'} p-1 rounded-lg text-[#374151] cursor-pointer hover:bg-sky-600 hover:text-white active:bg-sky-600 active:text-white`} key={tag.id}>{`#${tag.category}`}</button>
       ))
      }
        </div>
      </div>
    )
  );
}

TrendingTags.propType = {
  onTagFilterHandle: PropTypes.instanceOf(Function),
  tagFilter: PropTypes.string,
};

export default TrendingTags;
