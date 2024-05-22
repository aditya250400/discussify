import React, { useState } from 'react';
import Proptypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import parser from 'html-react-parser';
import { Link, useLocation } from 'react-router-dom';
import timeIcon from '../assets/icon/time.svg';
import { dateFull, postedAt } from '../utils/postedAt';
import { asyncDisLikeThread, asyncLikeThread, asyncNeutralizeThread } from '../redux/threads/action';

function ThreadItem({ thread }) {
  const getBody = () => {
    if (thread.body.length >= 350) {
      return `${thread.body.substring(0, 350)}...`;
    }

    return thread.body;
  };
  const { user } = useSelector((states) => states.authUser);
  if (user === null) {
    return null;
  }
  const dispatch = useDispatch();
  const location = useLocation();
  const { users, loading } = useSelector((states) => states.users);
  const [filteredUsers] = users.filter((userId) => (userId.id === thread.ownerId));
  const [liked, setLiked] = useState(thread.upVotesBy.includes(user.id));
  const [disliked, setDisliked] = useState(thread.downVotesBy.includes(user.id));

  const toggleLike = () => {
    if (liked) {
      dispatch(asyncNeutralizeThread(thread.id));
    } else {
      dispatch(asyncLikeThread(thread.id));
    }
    setLiked(!liked);
    setDisliked(false);
  };

  const toggleDislike = () => {
    if (disliked) {
      dispatch(asyncNeutralizeThread(thread.id));
    } else {
      dispatch(asyncDisLikeThread(thread.id));
    }
    setDisliked(!disliked);
    setLiked(false);
  };

  return (
    <div>
      <div className="flex justify-between flex-wrap w-full p-4">
        {/* Head Section thread */}
        <div className="flex items-center gap-2 ">
          {
          loading || user === null ? (
            <div className="flex items-center gap-2 animate-slide-up">
              <div className="text-center animate-pulse rounded-full w-[40px] h-[40px] bg-slate-300" />
              <div className="animate-pulse text-[12px] font-semibold bg-gray-300 w-[100px] h-[20px] rounded-md" />
            </div>
          ) : (
            <>
              <img src={location.pathname === '/' ? filteredUsers.avatar : thread.owner.avatar} alt={location.pathname === '/' ? filteredUsers.name : thread.owner.name} className="text-center rounded-full w-[40px] h-[40px]" />
              <h3 className="text-[12px] font-semibold">{location.pathname === '/' ? filteredUsers.name : thread.owner.name }</h3>
            </>
          )
         }
        </div>

        <div className="hidden md:flex md:items-center md:gap-[5px]">
          <img src={timeIcon} alt="time icon" />
          <h5 className="text-[12px]">{postedAt(thread.createdAt)}</h5>
        </div>

      </div>
      <div className="h-[1px] bg-[#C7C7C7] w-full" />
      {/* End Head Section thread */}

      {/* Body Section thread */ }
      <div className="p-4">
        <h3 className="bg-[#DBEAFE] p-1 rounded-lg text-[#374151] cursor-pointer hover:bg-sky-600 hover:text-white w-min ">{`#${thread.category}`}</h3>

        {
          location.pathname === '/' ? (
            <Link to={`/threads/${thread.id}`} className="text-[22px] font-bold my-[10px] block cursor-pointer hover:text-bluePrimary">{thread.title}</Link>
          ) : (
            <h1 to="/threads/detail" className="text-[22px] font-bold my-[10px]">{thread.title}</h1>
          )
        }
        <div className="overflow-auto whitespace-pre-wrap leading-[25px]">
          {/* eslint-disable-next-line max-len */}
          {location.pathname === '/' ? parser(getBody()) : parser(thread.body)}
        </div>
        <div className="flex justify-between items-center mt-3 md:hidden">
          <div className="flex items-center gap-[5px]">
            <img src={timeIcon} alt="time icon" />
            <h5 className="text-[14px]">{postedAt(thread.createdAt)}</h5>
          </div>
          <h3 className="text-base md:text-[16px] text-[#707070]">{dateFull(thread.createdAt)}</h3>
        </div>
      </div>
      <div className="h-[1px] bg-[#C7C7C7] w-full mt-3" />
      {/* End Body Section thread */}
      {/* Footer Section thread */}
      <div className="flex justify-between items-center p-4 " id="comments">
        <div className="flex gap-3 w-full">
          <button type="button" onClick={toggleLike} className="flex  items-center gap-[2px] cursor-pointer group">
            <svg className={`${liked ? 'text-bluePrimary' : 'text-white'} active:text-blue-400 group-hover:text-bluePrimary h-[30px] w-[30px] fill-current`} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.35001 22.9375L13.225 25.9375C13.725 26.4375 14.85 26.6875 15.6 26.6875H20.35C21.85 26.6875 23.475 25.5625 23.85 24.0625L26.85 14.9375C27.475 13.1875 26.35 11.6875 24.475 11.6875H19.475C18.725 11.6875 18.1 11.0625 18.225 10.1875L18.85 6.18746C19.1 5.06246 18.35 3.81246 17.225 3.43746C16.225 3.06246 14.975 3.56246 14.475 4.31246L9.35001 11.9375" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" />
              <path d="M2.97501 22.9375V10.6875C2.97501 8.9375 3.72501 8.3125 5.47501 8.3125H6.72501C8.47501 8.3125 9.22501 8.9375 9.22501 10.6875V22.9375C9.22501 24.6875 8.47501 25.3125 6.72501 25.3125H5.47501C3.72501 25.3125 2.97501 24.6875 2.97501 22.9375Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <h3 className="text-lg">{thread.upVotesBy.length}</h3>
          </button>
          <button type="button" onClick={toggleDislike} className="flex items-center gap-[2px] cursor-pointer group">
            <svg width="30" height="30" className={`${disliked ? 'text-[#374151]' : 'text-white'} group-hover:text-[#374151] fill-current`} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.65 7.0625L16.775 4.0625C16.275 3.5625 15.15 3.3125 14.4 3.3125H9.65C8.15 3.3125 6.525 4.4375 6.15 5.9375L3.15 15.0625C2.525 16.8125 3.65 18.3125 5.525 18.3125H10.525C11.275 18.3125 11.9 18.9375 11.775 19.8125L11.15 23.8125C10.9 24.9375 11.65 26.1875 12.775 26.5625C13.775 26.9375 15.025 26.4375 15.525 25.6875L20.65 18.0625" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" />
              <path d="M27.025 7.0625V19.3125C27.025 21.0625 26.275 21.6875 24.525 21.6875H23.275C21.525 21.6875 20.775 21.0625 20.775 19.3125V7.0625C20.775 5.3125 21.525 4.6875 23.275 4.6875H24.525C26.275 4.6875 27.025 5.3125 27.025 7.0625Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>

            <h3 className="text-lg">{thread.downVotesBy.length}</h3>
          </button>
          {
          location.pathname === '/' ? (
            <Link to={`/threads/${thread.id}`} className="flex items-center gap-[2px] group cursor-pointer">
              <svg width="30" height="30" className="fill-current group-hover:text-bluePrimary text-white" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 2.5H10C5 2.5 2.5 5 2.5 10V26.25C2.5 26.9375 3.0625 27.5 3.75 27.5H20C25 27.5 27.5 25 27.5 20V10C27.5 5 25 2.5 20 2.5Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M8.75 11.875H21.25" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M8.75 18.125H17.5" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
              </svg>

              <h3 className="text-lg">{location.pathname === '/' ? thread.totalComments : thread.comments.length}</h3>
            </Link>
          ) : (
            <div to={`/threads/${thread.id}`} className="flex items-center gap-[2px]">
              <svg width="30" height="30" className="fill-current group-hover:text-bluePrimary text-white" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 2.5H10C5 2.5 2.5 5 2.5 10V26.25C2.5 26.9375 3.0625 27.5 3.75 27.5H20C25 27.5 27.5 25 27.5 20V10C27.5 5 25 2.5 20 2.5Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M8.75 11.875H21.25" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M8.75 18.125H17.5" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
              </svg>

              <h3 className="text-lg">{location.pathname === '/' ? thread.totalComments : thread.comments.length}</h3>
            </div>
          )
        }
        </div>
        <h3 className="hidden md:block text-base md:text-[16px] text-[#707070]">{dateFull(thread.createdAt)}</h3>
        <div />
      </div>
    </div>
  );
}

ThreadItem.propType = {
  thread: Proptypes.instanceOf(Object),
};

export default ThreadItem;
