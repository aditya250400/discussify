/* eslint-disable no-case-declarations */
/* eslint-disable max-len */
import { ActionType } from './action';

const initialState = {

  loading: true,
  threads: [],
  error: '',
};

const threadsReducer = (threads = initialState, action = {}) => {
  switch (action.type) {
    case ActionType.GET_ALL_THREADS_REQUEST:
      return {
        loading: true,
        threads: [],
        error: '',
      };
    case ActionType.GET_ALL_THREADS_SUCCESS:
      return {
        loading: false,
        threads: action.payload,
        error: '',
      };
    case ActionType.GET_ALL_THREADS_FAILURE:
      return {
        loading: false,
        threads: [],
        error: action.payload,
      };
    default:
      return threads;
  }
};

export default threadsReducer;
