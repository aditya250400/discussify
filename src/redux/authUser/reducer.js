import { ActionType } from './action';

const authUserReducer = (authUser = {}, action = {}) => {
  switch (action.type) {
    case ActionType.USER_PROFILE:
      return {
        loading: false,
        user: action.payload,
        error: '',
      };
    case ActionType.USER_LOGOUT:
      return {
        loading: false,
        user: action.payload,
        error: '',
      };
    case ActionType.USER_FETCH_REQUEST:
      return {
        loading: true,
        user: null,
        error: '',
      };
    case ActionType.USER_FETCH_SUCCESS:
      return {
        loading: false,
        user: null,
        error: '',
      };
    case ActionType.USER_FETCH_FAILURE:
      return {
        loading: false,
        user: null,
        error: action.payload,
      };
    default:
      return authUser;
  }
};

export default authUserReducer;
