import React from 'react';
import LoadingBar from 'react-redux-loading-bar';

function Loading() {
  return (
    <div className="sticky top-0 z-[9999]">
      <LoadingBar />
    </div>
  );
}

export default Loading;
