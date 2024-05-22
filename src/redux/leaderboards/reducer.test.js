/* eslint-disable max-len */
/**
* test scenario for authUserReducer
*
* - leaderboardsReducer function
*  - should return the initial state when given by unknown action
*  - should return loading is true, leaderboards is [], and
error is '' when given by GET_LEADERBOARDS_REQUEST action
*  - should return the leaderboards, loading is false, and error is '' when given by  GET_LEADERBOARDS_SUCCESS action
*  - should return the error, leaderboards is [], and loading is
false when given by GET_LEADERBOARDS_FAILURE action
*
*/

import { describe, expect, it } from 'vitest';
import leaderboardsReducer from './reducer';

describe('authUserReducer function', () => {
  it('should return the initial state when given by unknown action', () => {
    const initialState = {
      loading: false,
      leaderboards: [],
      error: '',
    };

    const action = { type: 'UNKNOWN' };

    const nextState = leaderboardsReducer(initialState, action);

    expect(nextState).toEqual(initialState);
  });

  it('Should return loading is true, leaderboards is [], and error is \'\' when given by GET_LEADERBOARDS_REQUEST action', () => {
    const initialState = {
      loading: true,
      leaderboards: [],
      error: '',
    };

    const action = { type: 'GET_LEADERBOARDS_REQUEST' };

    const nextState = leaderboardsReducer(initialState, action);

    expect(nextState).toEqual(initialState);
  });

  it('should return the leaderboards, loading is false, and error is \'\' when given by  GET_LEADERBOARDS_SUCCESS action', () => {
    const action = {
      type: 'GET_LEADERBOARDS_SUCCESS',
      payload: [
        {
          user: {
            id: 'users-1',
            name: 'John Doe',
            email: 'john@example.com',
            avatar: 'https://generated-image-url.jpg',
          },
          score: 10,
        },
        {
          user: {
            id: 'users-2',
            name: 'Jane Doe',
            email: 'jane@example.com',
            avatar: 'https://generated-image-url.jpg',
          },
          score: 5,
        },
      ],
    };

    const initialState = {
      loading: false,
      leaderboards: action.payload,
      error: '',
    };

    const nextState = leaderboardsReducer(initialState, action);

    expect(nextState).toEqual(initialState);
  });

  it('Should return the error, leaderboards is [], and loading is false when given by GET_LEADERBOARDS_FAILURE action', () => {
    const action = {
      type: 'GET_LEADERBOARDS_FAILURE',
      payload: 'Error While Fetching Data',
    };

    const initialState = {
      loading: false,
      leaderboards: [],
      error: action.payload,
    };

    const nextState = leaderboardsReducer(initialState, action);

    expect(nextState).toEqual(initialState);
  });
});
