import { ActionType } from './action';

const initialState = {

  loading: true,
  thread: [],
  error: '',
};

const threadReducer = (thread = initialState, action = {}) => {
  switch (action.type) {
    case ActionType.GET_THREAD_REQUEST:
      return {
        loading: true,
        thread: [],
        error: '',
      };
    case ActionType.GET_THREAD_SUCCESS:
      return {
        thread: action.payload,
        loading: false,
        error: '',
      };
    case ActionType.GET_THREAD_FAILURE:
      return {
        loading: false,
        thread: [],
        error: action.payload,
      };
    default:
      return thread;
  }
};

export default threadReducer;
