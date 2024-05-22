/**
* test scenario for tagsReducer
*
* - tagsReducer function
*  - should return the initial state when given by unknown action
*  - should return the tags is [], loading is true,
error is '' when given by GET_ALL_tags_REQUEST action
*  - should return the tags, loading is false, and error is '' when given by
GET_ALL_tags_SUCCESS action
*  - should return the error, tags is [], and loading is
false when given by GET_ALL_tags_FAILURE action
*
*/

import { describe, expect, it } from 'vitest';
import tagsReducer from './reducer';

describe('tagsReducer function', () => {
  it('should return the initial state when given by unknown action', () => {
    const initialState = {
      loading: true,
      tags: [],
      error: '',
    };
    const action = { type: 'UNKNOWN' };

    const nextState = tagsReducer(initialState, action);

    expect(nextState).toEqual(initialState);
  });

  it('should return the tags is [], loading is true, error is \'\' when given by GET_ALL_tags_REQUEST action', () => {
    const initialState = {
      loading: true,
      tags: [],
      error: '',
    };

    const action = { type: 'GET_ALL_TAGS_REQUEST' };

    const nextState = tagsReducer(initialState, action);

    expect(nextState).toEqual(initialState);
  });

  it('should return the tags, loading is false, and error is \'\' when given by GET_ALL_tags_SUCCESS action', () => {
    const action = {
      type: 'GET_ALL_TAGS_SUCCESS',
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

    const expectedState = {
      loading: false,
      tags: action.payload,
      error: '',
    };

    const nextState = tagsReducer(expectedState, action);

    expect(nextState).toEqual(expectedState);
  });

  it('should return the error, tags is [], and loading is false when given by GET_ALL_tags_FAILURE action', () => {
    const action = {
      type: 'GET_ALL_TAGS_FAILURE',
      payload: 'Error While Fetching Data',
    };

    const expectedState = {
      loading: false,
      tags: [],
      error: action.payload,
    };

    const nextState = tagsReducer(expectedState, action);

    expect(nextState).toEqual(expectedState);
  });
});
