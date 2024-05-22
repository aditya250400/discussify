import { ActionType } from './action';

const initialState = {

  loading: true,
  users: [],
  error: '',
};

const usersReducer = (users = initialState, action = {}) => {
  switch (action.type) {
    case ActionType.GET_ALL_USERS_REQUEST:
      return {
        loading: true,
        users: [],
        error: '',
      };
    case ActionType.GET_ALL_USERS:
      return {
        users: action.payload,
        loading: false,
        error: '',
      };
    case ActionType.GET_ALL_USERS_FAILURE:
      return {
        loading: false,
        users: [],
        error: action.payload,
      };
    default:
      return users;
  }
};

export default usersReducer;
