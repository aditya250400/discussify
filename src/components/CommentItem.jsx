/* eslint-disable max-len */

import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import parser from 'html-react-parser';
import Proptypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { postedAt } from '../utils/postedAt';
import { asyncDisLikeComment, asyncLikeComment, asyncNeutralizeComment } from '../redux/threadDetail/action';

function CommentItem({ comment }) {
  const { id } = useParams();
  const commentId = comment.id;
  const { user } = useSelector((states) => states.authUser);
  const dispatch = useDispatch();
  const [liked, setLiked] = useState(comment.upVotesBy.includes(user.id));
  const [disliked, setDisliked] = useState(comment.downVotesBy.includes(user.id));

  const toggleLike = () => {
    if (liked) {
      dispatch(asyncNeutralizeComment({ id, commentId }));
    } else {
      dispatch(asyncLikeComment({ id, commentId }));
    }
    setLiked(!liked);
    setDisliked(false);
  };

  const toggleDislike = () => {
    if (disliked) {
      dispatch(asyncNeutralizeComment({ id, commentId }));
    } else {
      dispatch(asyncDisLikeComment({ id, commentId }));
    }
    setDisliked(!disliked);
    setLiked(false);
  };
  return (
    <div>
      <div className="my-[25px]">
        <div className="flex gap-2">
          <img className="rounded-full w-[30px] h-[30px]" src={comment.owner.avatar} alt={comment.owner.name} />
          <div className="w-full">
            <div className="bg-[#F0F2F5] rounded-xl p-2">
              <div className="flex items-center gap-1">
                <h5 className="text-[12px] font-semibold">{ comment.owner.name }</h5>
                <h5 className="text-[10px] text-[#605656]">{`| ${postedAt(comment.createdAt)}`}</h5>
              </div>
              <div className="my-[10px] overflow-auto">
                <div className="text-[13px] whitespace-pre-wrap leading-[25px]">
                  {parser(comment.content)}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 mt-2">
              <button type="button" onClick={toggleLike} className="flex items-center gap-[1px] cursor-pointer group">
                <svg width="25" height="25" className={`${liked ? 'text-bluePrimary' : 'text-white'} fill-current group-hover:text-bluePrimary`} viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.79167 19.1146L11.0208 21.6146C11.4375 22.0312 12.375 22.2396 13 22.2396H16.9583C18.2083 22.2396 19.5625 21.3021 19.875 20.0521L22.375 12.4479C22.8958 10.9896 21.9583 9.73957 20.3958 9.73957H16.2292C15.6042 9.73957 15.0833 9.21874 15.1875 8.48957L15.7083 5.15624C15.9167 4.21874 15.2917 3.17707 14.3542 2.86457C13.5208 2.55207 12.4792 2.96874 12.0625 3.59374L7.79167 9.9479" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" />
                  <path d="M2.47917 19.1146V8.90629C2.47917 7.44796 3.10417 6.92712 4.56251 6.92712H5.60417C7.0625 6.92712 7.6875 7.44796 7.6875 8.90629V19.1146C7.6875 20.573 7.0625 21.0938 5.60417 21.0938H4.56251C3.10417 21.0938 2.47917 20.573 2.47917 19.1146Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>

                <h3 className="text-lg">{comment.upVotesBy.length}</h3>
              </button>
              <button type="button" onClick={toggleDislike} className="flex items-center gap-[1px] cursor-pointer group">
                <svg width="25" className={`${disliked ? 'text-[#374151]' : ' text-white'} fill-current group-hover:text-[#374151]`} height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.2083 5.8855L13.9792 3.3855C13.5625 2.96883 12.625 2.7605 12 2.7605H8.04167C6.79167 2.7605 5.43751 3.698 5.12501 4.948L2.62501 12.5522C2.10417 14.0105 3.04167 15.2605 4.60417 15.2605H8.77084C9.39584 15.2605 9.91667 15.7813 9.81251 16.5105L9.29167 19.8438C9.08334 20.7813 9.70834 21.823 10.6458 22.1355C11.4792 22.448 12.5208 22.0313 12.9375 21.4063L17.2083 15.0522" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" />
                  <path d="M22.5208 5.88542V16.0937C22.5208 17.5521 21.8958 18.0729 20.4375 18.0729H19.3958C17.9375 18.0729 17.3125 17.5521 17.3125 16.0937V5.88542C17.3125 4.42708 17.9375 3.90625 19.3958 3.90625H20.4375C21.8958 3.90625 22.5208 4.42708 22.5208 5.88542Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <h3 className="text-lg">{comment.downVotesBy.length}</h3>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

CommentItem.propType = {
  thread: Proptypes.instanceOf(Object),
};

export default CommentItem;
