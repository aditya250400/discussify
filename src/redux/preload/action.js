import axios from 'axios';
import { hideLoading, showLoading } from 'react-redux-loading-bar';
import { userProfileActionCreator } from '../authUser/action';
import BASE_URL from '../../utils/api';

const ActionType = {
  SET_IS_PRELOAD: 'SET_IS_PRELOAD',
};

const preloadActionCreator = (preload) => ({
  type: ActionType.SET_IS_PRELOAD,
  payload: preload,
});

// thunk function

const asyncPreload = () => async (dispatch) => {
  dispatch(showLoading());
  try {
    const myProfileResponse = await axios.get(`${BASE_URL}/users/me`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('discussifyAccessToken')}`,
      },
    });
    dispatch(userProfileActionCreator(myProfileResponse.data.data.user));
    dispatch(preloadActionCreator(false));
  } catch (error) {
    dispatch(userProfileActionCreator(null));
    dispatch(preloadActionCreator(false));
  }
  dispatch(hideLoading());
};

export {
  ActionType,
  preloadActionCreator,
  asyncPreload,
};
