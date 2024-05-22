import axios from 'axios';
import { hideLoading, showLoading } from 'react-redux-loading-bar';
import BASE_URL from '../../utils/api';

const ActionType = {
  GET_LEADERBOARDS_REQUEST: 'GET_LEADERBOARDS_REQUEST',
  GET_LEADERBOARDS_SUCCESS: 'GET_LEADERBOARDS_SUCCESS',
  GET_LEADERBOARDS_FAILURE: 'GET_LEADERBOARDS_FAILURE',
};

const getLeaderboardsRequestActionCreator = () => ({
  type: ActionType.GET_LEADERBOARDS_REQUEST,
});

const getLeaderBoardsSuccessActionCreator = (leadrboards) => ({
  type: ActionType.GET_LEADERBOARDS_SUCCESS,
  payload: leadrboards,
});

const getLeaderboardsFailureActionCreator = (error) => ({
  type: ActionType.GET_LEADERBOARDS_FAILURE,
  payload: error,
});

// Thunk function
const asyncGetLeaderboards = () => async (dispatch) => {
  dispatch(showLoading());
  try {
    const leaderboardsResponse = await axios.get(`${BASE_URL}/leaderboards`);
    dispatch(getLeaderBoardsSuccessActionCreator(leaderboardsResponse.data.data.leaderboards));
  } catch (error) {
    alert(error.response.data.message);
    dispatch(getLeaderboardsFailureActionCreator(error.response.data.message));
  }
  dispatch(hideLoading());
};

export {
  ActionType,
  getLeaderboardsRequestActionCreator,
  getLeaderBoardsSuccessActionCreator,
  getLeaderboardsFailureActionCreator,
  asyncGetLeaderboards,
};
