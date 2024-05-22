import axios from 'axios';
import { hideLoading, showLoading } from 'react-redux-loading-bar';
import BASE_URL from '../../utils/api';

const ActionType = {
  GET_ALL_USERS_REQUEST: 'GET_ALL_USERS_REQUEST',
  GET_ALL_USERS: 'GET_ALL_USERS',
  GET_ALL_USERS_FAILURE: 'GET_ALL_USERS_FAILURE',
};

const getAllUsersRequestActionCreator = () => ({
  type: ActionType.GET_ALL_USERS_REQUEST,
});

const getAllUsersActionCreator = (users) => ({
  type: ActionType.GET_ALL_USERS,
  payload: users,
});

const getAllUsersRequestFailure = (error) => ({
  type: ActionType.GET_ALL_USERS_FAILURE,
  payload: error,
});

// Thunk Function

const getAllUsers = () => async (dispatch) => {
  dispatch(showLoading());
  try {
    const usersResponse = await axios.get(`${BASE_URL}/users`);
    dispatch(getAllUsersActionCreator(usersResponse.data.data.users));
  } catch (error) {
    alert(error.response.data.message);
    dispatch(getAllUsersRequestFailure(error.response.data.message));
  }
  dispatch(hideLoading());
};

export {
  ActionType,
  getAllUsersActionCreator,
  getAllUsersRequestActionCreator,
  getAllUsersRequestFailure,
  getAllUsers,
};
