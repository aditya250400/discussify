/* eslint-disable no-use-before-define */
import axios from 'axios';
import { hideLoading, showLoading } from 'react-redux-loading-bar';
import BASE_URL from '../../utils/api';

const ActionType = {
  USER_PROFILE: 'USER_PROFILE',
  USER_LOGOUT: 'USER_LOGOUT',
  USER_FETCH_REQUEST: 'USER_FETCH_REQUEST',
  USER_FETCH_FAILURE: 'USER_FETCH_FAILURE',
  USER_FETCH_SUCCESS: 'USER_FETCH_SUCCESS',
};

const userProfileActionCreator = (authUser) => ({
  type: ActionType.USER_PROFILE,
  payload: authUser,
});

const userLogoutActionCreator = () => ({
  type: ActionType.USER_LOGOUT,
  payload: null,
});

const userFetchRequestActionCreator = () => ({
  type: ActionType.USER_FETCH_REQUEST,
});

const userFetchSuccessActionCreator = () => ({
  type: ActionType.USER_FETCH_SUCCESS,
});

const userFetchFailureActionCreator = (error) => ({
  type: ActionType.USER_FETCH_FAILURE,
  payload: error,
});

// Thunk FUnction
const asyncUserRegister = ({
  name, email, password, navigate, message,
}) => async (dispatch) => {
  dispatch(showLoading());
  try {
    await axios.post(`${BASE_URL}/register`, {
      name, email, password,
    });

    message.success('Register Success. Please login again');
    navigate('/login');
    dispatch(userFetchSuccessActionCreator());
  } catch (error) {
    message.error(error.response.data.message);
    dispatch(userFetchFailureActionCreator(error.response.data.message));
  }
  dispatch(hideLoading());
};

const asyncUserLogin = ({
  email, password, navigate, message,
}) => async (dispatch) => {
  dispatch(showLoading());
  try {
    const userLoginResponse = await axios.post(`${BASE_URL}/login`, {
      email, password,
    });
    localStorage.setItem('discussifyAccessToken', userLoginResponse.data.data.token);

    const myProfileResponse = await axios.get(`${BASE_URL}/users/me`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('discussifyAccessToken')}`,
      },
    });
    dispatch(userProfileActionCreator(myProfileResponse.data.data.user));
    dispatch(userFetchSuccessActionCreator());
    dispatch(asyncGetMyProfile());
    message.success('Login Success');
    navigate('/');
  } catch (error) {
    message.error(error.response.data.message);
    dispatch(userFetchFailureActionCreator(error.response.data.message));
  }
  dispatch(hideLoading());
};

const asyncGetMyProfile = () => async (dispatch) => {
  dispatch(showLoading());
  try {
    const myProfileResponse = await axios.get(`${BASE_URL}/users/me`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('discussifyAccessToken')}`,
      },
    });

    dispatch(userProfileActionCreator(myProfileResponse.data.data.user));
  } catch (error) {
    alert(error.response.data.message);
  }
  dispatch(hideLoading());
};

const asyncUserLogout = ({ message, navigate }) => (dispatch) => {
  dispatch(showLoading());
  message.success('Logout Success');
  localStorage.removeItem('discussifyAccessToken');
  navigate('/login');
  dispatch(userLogoutActionCreator());
  dispatch(hideLoading());
};

export {
  ActionType,
  userProfileActionCreator,
  userLogoutActionCreator,
  asyncUserRegister,
  asyncUserLogin,
  asyncUserLogout,
  userFetchRequestActionCreator,
  userFetchSuccessActionCreator,
  userFetchFailureActionCreator,
  asyncGetMyProfile,
};
