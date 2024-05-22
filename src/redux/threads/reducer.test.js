/**
* test scenario for threadsReducer
*
* - threadsReducer function
*  - should return the initial state when given by unknown action
*  - should return the threads is [], loading is true,
error is '' when given by GET_ALL_THREADS_REQUEST action
*  - should return the threads, loading is false, and error is '' when given by
GET_ALL_THREADS_SUCCESS action
*  - should return the error, threads is [], and loading is
false when given by GET_ALL_THREADS_FAILURE action
*
*/

import { describe, expect, it } from 'vitest';
import threadsReducer from './reducer';

describe('threadsReducer function', () => {
  it('should return the initial state when given by unknown action', () => {
    const initialState = {
      loading: true,
      threads: [],
      error: '',
    };
    const action = { type: 'UNKNOWN' };

    const nextState = threadsReducer(initialState, action);

    expect(nextState).toEqual(initialState);
  });

  it('should return the threads is [], loading is true, error is \'\' when given by GET_ALL_THREADS_REQUEST action', () => {
    const initialState = {
      loading: true,
      threads: [],
      error: '',
    };

    const action = { type: 'GET_ALL_THREADS_REQUEST' };

    const nextState = threadsReducer(initialState, action);

    expect(nextState).toEqual(initialState);
  });

  it('should return the threads, loading is false, and error is \'\' when given by GET_ALL_THREADS_SUCCESS action', () => {
    const action = {
      type: 'GET_ALL_THREADS_SUCCESS',
      payload: [
        {
          id: 'thread-1',
          title: 'Thread pertama',
          body: 'ini adalah thread pertama',
          category: 'General',
          createdAt: '2024-05-20T07:00:00.000Z',
          ownerId: 'users-1',
          upVotesBy: [],
          downVotesBy: [],
          totalComments: 0,
        },
        {
          id: 'thread-2',
          title: 'Thread kedua',
          body: 'ini adalah thread kedua',
          category: 'General',
          createdAt: '2024-05-20T07:00:00.000Z',
          ownerId: 'users-2',
          upVotesBy: [],
          downVotesBy: [],
          totalComments: 0,
        },
      ],
    };

    const initialState = {
      loading: false,
      threads: action.payload,
      error: '',
    };

    const nextState = threadsReducer(initialState, action);

    expect(nextState).toEqual(initialState);
  });

  it('should return the error, threads is [], and loading is false when given by GET_ALL_THREADS_FAILURE action', () => {
    const action = {
      type: 'GET_ALL_THREADS_FAILURE',
      payload: 'Error While Fetching Data',
    };

    const initialState = {
      loading: false,
      threads: [],
      error: action.payload,
    };

    const nextState = threadsReducer(initialState, action);

    expect(nextState).toEqual(initialState);
  });
});
