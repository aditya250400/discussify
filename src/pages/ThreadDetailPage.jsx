import React, { useEffect, useState } from 'react';
import { message } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import CommentThread from '../components/CommentThread';
import { asyncCreateComment, asyncGetThread, getThreadRequestActionCreator } from '../redux/threadDetail/action';
import ThreadItem from '../components/ThreadItem';
import { getAllUsers } from '../redux/users/action';
import NotFound from '../components/NotFound';
import ThreadDetailPageSkeleton from '../components/skeleton/ThreadDetailPageSkeleton';

function ThreadDetailPage() {
  const { id } = useParams();
  const [comment, setComment] = useState('');
  const { loading, thread } = useSelector((states) => states.thread);
  const dispatch = useDispatch();

  const onCommentChange = (e) => {
    setComment(e.target.value);
  };

  const onCreateCommentSubmit = (e) => {
    e.preventDefault();
    setComment('');
    dispatch(asyncCreateComment({ id, comment, message }));
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(asyncGetThread({ id, message }));
    dispatch(getAllUsers());

    return () => {
      dispatch(getThreadRequestActionCreator());
    };
  }, []);

  if (thread.length === 0 && !loading) {
    return <NotFound />;
  }

  return (
    loading ? <ThreadDetailPageSkeleton /> : (
      <div className="p-4 md:p-0 md:w-[716px] md:mx-auto overflow-y-auto">
        <div className="rounded-xl bg-white shadow-lg my-5">
          <ThreadItem thread={thread} />
          <CommentThread
            comments={thread.comments}
            onCreateCommentSubmit={onCreateCommentSubmit}
            onCommentChange={onCommentChange}
            commentThread={comment}
          />
        </div>
      </div>
    )
  );
}

export default ThreadDetailPage;
