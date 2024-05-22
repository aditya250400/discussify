/**
* test scenario for threadsReducer
*
* - preload function
*  - should return the initial state when given by unknown action
*  - should return the preload is false when given by SET_IS_PRELOAD action
*
*/
import { expect, describe, it } from 'vitest';
import preloadReducer from './reducer';

describe('preloadReducer function', () => {
  it('should return the initial state when given by unknown action', () => {
    const action = { type: 'UNKNOWN' };
    const initialState = true;

    const nextState = preloadReducer(initialState, action);

    expect(nextState).toEqual(initialState);
  });

  it('should return the preload is false when given by SET_IS_PRELOAD action', () => {
    const action = {
      type: 'SET_IS_PRELOAD',
      payload: false,
    };
    const initialState = action.payload;

    const nextState = preloadReducer(initialState, action);

    expect(nextState).toEqual(initialState);
  });
});
