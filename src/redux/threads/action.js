import axios from 'axios';
import { hideLoading, showLoading } from 'react-redux-loading-bar';
import BASE_URL from '../../utils/api';
import { asyncGetThread } from '../threadDetail/action';

const ActionType = {
  GET_ALL_THREADS_REQUEST: 'GET_ALL_THREADS_REQUEST',
  GET_ALL_THREADS_SUCCESS: 'GET_ALL_THREADS_SUCCESS',
  GET_ALL_THREADS_FAILURE: 'GET_ALL_THREADS_FAILURE',
};

const getAllThreadsRequestActionCreator = () => ({
  type: ActionType.GET_ALL_THREADS_REQUEST,
});

const getAllThreadsSuccessActionCreator = (threads) => ({
  type: ActionType.GET_ALL_THREADS_SUCCESS,
  payload: threads,
});

const getAllThreadsFailureActionCreator = (error) => ({
  type: ActionType.GET_ALL_THREADS_FAILURE,
  payload: error,
});

// Thunk function
const asyncGetAllThreads = () => async (dispatch) => {
  dispatch(showLoading());
  try {
    const threadsResponse = await axios.get(`${BASE_URL}/threads`);
    dispatch(getAllThreadsSuccessActionCreator(threadsResponse.data.data.threads));
  } catch (error) {
    alert(error.response.data.message);
    dispatch(getAllThreadsFailureActionCreator(error.response.data.message));
  }
  dispatch(hideLoading());
};

const asyncMakeThread = ({
  title, body, tag, navigate, message,
}) => async (dispatch) => {
  dispatch(showLoading());
  try {
    await axios.post(`${BASE_URL}/threads`, {
      title,
      body,
      category: tag,
    }, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('discussifyAccessToken')}`,
      },
    });
    message.success('Success');
    navigate('/');
  } catch (error) {
    message.error(error.response.data.message);
  }
  dispatch(hideLoading());
};

const asyncLikeThread = (id) => async (dispatch) => {
  dispatch(showLoading());
  try {
    await axios.post(`${BASE_URL}/threads/${id}/up-vote`, {}, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('discussifyAccessToken')}`,
      },
    });
    dispatch(asyncGetAllThreads());
    dispatch(asyncGetThread({ id }));
  } catch (error) {
    alert(error.response.data.message);
  }
  dispatch(hideLoading());
};

const asyncDisLikeThread = (id) => async (dispatch) => {
  dispatch(showLoading());
  try {
    await axios.post(`${BASE_URL}/threads/${id}/down-vote`, {}, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('discussifyAccessToken')}`,
      },
    });
    dispatch(asyncGetAllThreads());
    dispatch(asyncGetThread({ id }));
  } catch (error) {
    alert(error.response.data.message);
  }
  dispatch(hideLoading());
};
const asyncNeutralizeThread = (id) => async (dispatch) => {
  dispatch(showLoading());
  try {
    await axios.post(`${BASE_URL}/threads/${id}/neutral-vote`, {}, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('discussifyAccessToken')}`,
      },
    });
    dispatch(asyncGetAllThreads());
    dispatch(asyncGetThread({ id }));
  } catch (error) {
    alert(error.response.data.message);
  }
  dispatch(hideLoading());
};

export {
  ActionType,
  getAllThreadsRequestActionCreator,
  getAllThreadsSuccessActionCreator,
  getAllThreadsFailureActionCreator,
  asyncGetAllThreads,
  asyncMakeThread,
  asyncLikeThread,
  asyncDisLikeThread,
  asyncNeutralizeThread,
};
