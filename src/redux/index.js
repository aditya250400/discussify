import { configureStore } from '@reduxjs/toolkit';
import { loadingBarReducer } from 'react-redux-loading-bar';
import authUserReducer from './authUser/reducer';
import preloadReducer from './preload/reducer';
import usersReducer from './users/reducer';
import threadsReducer from './threads/reducer';
import threadReducer from './threadDetail/reducer';
import tagsReducer from './tags/reducer';
import leaderboardsReducer from './leaderboards/reducer';

const store = configureStore({
  reducer: {
    preload: preloadReducer,
    authUser: authUserReducer,
    users: usersReducer,
    threads: threadsReducer,
    thread: threadReducer,
    tags: tagsReducer,
    loadingBar: loadingBarReducer,
    leaderboards: leaderboardsReducer,
  },
});

export default store;
