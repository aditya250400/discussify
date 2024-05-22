import React from 'react';
import Proptypes from 'prop-types';
import CreateComment from './CreateComment';
import CommentItem from './CommentItem';

function CommentThread({
  comments, onCreateCommentSubmit, onCommentChange, commentThread,
}) {
  return (
    <>
      <div className="h-[1px]  bg-[#C7C7C7]" />
      <h1 className="text-lg font-bold ml-4 mt-4">{`Comments (${comments.length})`}</h1>
      <div className={`${comments.length > 0 ? 'h-[400px]' : ''} overflow-y-auto px-4`}>
        {
        comments.length > 0 ? (
          comments.map((comment) => <CommentItem key={comment.id} comment={comment} />)
        ) : <h1>No Comments yet, please make a comment</h1>
       }
        <CreateComment
          onCommentChange={onCommentChange}
          onCreateCommentSubmit={onCreateCommentSubmit}
          commentThread={commentThread}
        />
      </div>
    </>
  );
}

CommentThread.propType = {
  comments: Proptypes.instanceOf(Array),
  onCreateCommentSubmit: Proptypes.instanceOf(Function),
  onCommentChange: Proptypes.instanceOf(Function),
  commentThread: Proptypes.string,
};

export default CommentThread;
