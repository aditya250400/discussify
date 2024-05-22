import axios from 'axios';
import { hideLoading, showLoading } from 'react-redux-loading-bar';
import BASE_URL from '../../utils/api';

const ActionType = {
  GET_ALL_TAGS_REQUEST: 'GET_ALL_TAGS_REQUEST',
  GET_ALL_TAGS_SUCCESS: 'GET_ALL_TAGS_SUCCESS',
  GET_ALL_TAGS_FAILURE: 'GET_ALL_TAGS_FAILURE',
};

const getAllTagsRequestActionCreator = () => ({
  type: ActionType.GET_ALL_TAGS_REQUEST,
});

const getAllTagsSuccessActionCreator = (threads) => ({
  type: ActionType.GET_ALL_TAGS_SUCCESS,
  payload: threads,
});

const getAllTagsFailureActionCreator = (error) => ({
  type: ActionType.GET_ALL_TAGS_FAILURE,
  payload: error,
});

// Thunk function
const asyncGetAllTags = () => async (dispatch) => {
  dispatch(showLoading());
  try {
    const threadsResponse = await axios.get(`${BASE_URL}/threads`);
    dispatch(getAllTagsSuccessActionCreator(threadsResponse.data.data.threads));
  } catch (error) {
    alert(error.response.data.message);
    dispatch(getAllTagsFailureActionCreator(error.response.data.message));
  }
  dispatch(hideLoading());
};

export {
  ActionType,
  getAllTagsRequestActionCreator,
  getAllTagsSuccessActionCreator,
  getAllTagsFailureActionCreator,
  asyncGetAllTags,
};
