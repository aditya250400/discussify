/* eslint-disable max-len */
/**
* test scenario for authUserReducer
*
* - authUserReducer function
*  - should return the initial state when given by unknown action
*  - should return user is null, loading is true,
error is '' when given by USER_FETCH_REQUEST action
*  - should return the user is null, loading is false, and error is '' when given by  USER_FETCH_SUCCESS action
*  - should return the error, user is null, and loading is
false when given by USER_FETCH_FAILURE action
*  - should return the user, error is '' and loading is
false when given by USER_PROFILE action
*  - should return the user is null, error is '' and loading is
false when given by USER_LOGOUT action
*
*/

import { describe, expect, it } from 'vitest';
import authUserReducer from './reducer';

describe('authUserReducer function', () => {
  it('should return the initial state when given by unknown action', () => {
    const initialState = {
      loading: false,
      user: null,
      error: '',
    };

    const action = { type: 'UNKNOWN' };

    const nextState = authUserReducer(initialState, action);

    expect(nextState).toEqual(initialState);
  });

  it('should return user is null, loading is true, error is \'\' when given by USER_FETCH_REQUEST action', () => {
    const initialState = {
      loading: true,
      user: null,
      error: '',
    };
    const action = { type: 'USER_FETCH_REQUEST' };

    const nextState = authUserReducer(initialState, action);

    expect(nextState).toEqual(initialState);
  });

  it('should return the user is null, loading is false, and error is \'\' when given by  USER_FETCH_SUCCESS action', () => {
    const initialState = {
      loading: false,
      user: null,
      error: '',
    };
    const action = { type: 'USER_FETCH_SUCCESS' };

    const nextState = authUserReducer(initialState, action);

    expect(nextState).toEqual(initialState);
  });

  it('should return the error, user is null, and loading is false when given by USER_FETCH_FAILURE action', () => {
    const action = {
      type: 'USER_FETCH_FAILURE',
      payload: 'Error While Fetching Data',
    };

    const initialState = {
      loading: false,
      user: null,
      error: action.payload,
    };

    const nextState = authUserReducer(initialState, action);

    expect(nextState).toEqual(initialState);
  });

  it('should return the user, error is \'\' and loading is false when given by USER_PROFILE action', () => {
    const action = {
      type: 'USER_PROFILE',
      payload: {
        id: 'john_doe',
        name: 'John Doe',
        email: 'john@example.com',
        avatar: 'https://generated-image-url.jpg',
      },
    };

    const initialState = {
      loading: false,
      user: action.payload,
      error: '',
    };

    const nextState = authUserReducer(initialState, action);

    expect(nextState).toEqual(initialState);
  });

  it('should return the user is null, error is \'\' and loading is false when given by USER_LOGOUT action', () => {
    const action = {
      type: 'USER_LOGOUT',
      payload: null,
    };

    const initialState = {
      loading: false,
      user: action.payload,
      error: '',
    };

    const nextState = authUserReducer(initialState, action);

    expect(nextState).toEqual(initialState);
  });
});
