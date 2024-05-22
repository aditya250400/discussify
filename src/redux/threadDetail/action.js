import axios from 'axios';
import { hideLoading, showLoading } from 'react-redux-loading-bar';
import BASE_URL from '../../utils/api';

const ActionType = {
  GET_THREAD_REQUEST: 'GET_THREAD_REQUEST',
  GET_THREAD_SUCCESS: 'GET_THREAD_SUCCESS',
  GET_THREAD_FAILURE: 'GET_THREAD_FAILURE',
};

const getThreadRequestActionCreator = () => ({
  type: ActionType.GET_THREAD_REQUEST,
});

const getThreadSuccessActionCreator = (thread) => ({
  type: ActionType.GET_THREAD_SUCCESS,
  payload: thread,
});

const getAThreadFailureActionCreator = (error) => ({
  type: ActionType.GET_THREAD_FAILURE,
  payload: error,
});

// Thunk function
const asyncGetThread = ({ id, message }) => async (dispatch) => {
  dispatch(showLoading());
  try {
    const threadResponse = await axios.get(`${BASE_URL}/threads/${id}`);
    dispatch(getThreadSuccessActionCreator(threadResponse.data.data.detailThread));
  } catch (error) {
    message.error(error.response.data.message);
    dispatch(getAThreadFailureActionCreator(error.response.data.message));
  }
  dispatch(hideLoading());
};

const asyncCreateComment = ({ id, comment, message }) => async (dispatch) => {
  dispatch(showLoading());
  try {
    await axios.post(`${BASE_URL}/threads/${id}/comments`, { content: comment }, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('discussifyAccessToken')}`,
      },
    });
    message.success('Comment Successfully Created');
    dispatch(asyncGetThread({ id, comment }));
  } catch (error) {
    message.error('Comment is Not Allowed To Be Empty');
  }
  dispatch(hideLoading());
};

const asyncLikeComment = ({ id, commentId }) => async (dispatch) => {
  dispatch(showLoading());
  try {
    await axios.post(`${BASE_URL}/threads/${id}/comments/${commentId}/up-vote`, {}, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('discussifyAccessToken')}`,
      },
    });
    dispatch(asyncGetThread({ id }));
  } catch (error) {
    alert(error.response.data.message);
  }
  dispatch(hideLoading());
};

const asyncDisLikeComment = ({ id, commentId }) => async (dispatch) => {
  dispatch(showLoading());
  try {
    await axios.post(`${BASE_URL}/threads/${id}/comments/${commentId}/down-vote`, {}, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('discussifyAccessToken')}`,
      },
    });
    dispatch(asyncGetThread({ id }));
  } catch (error) {
    alert(error.response.data.message);
  }
  dispatch(hideLoading());
};
const asyncNeutralizeComment = ({ id, commentId }) => async (dispatch) => {
  dispatch(showLoading());
  try {
    await axios.post(`${BASE_URL}/threads/${id}/comments/${commentId}/neutral-vote`, {}, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('discussifyAccessToken')}`,
      },
    });
    dispatch(asyncGetThread({ id }));
  } catch (error) {
    alert(error.response.data.message);
  }
  dispatch(hideLoading());
};

export {
  ActionType,
  getThreadRequestActionCreator,
  getThreadSuccessActionCreator,
  getAThreadFailureActionCreator,
  asyncGetThread,
  asyncCreateComment,
  asyncLikeComment,
  asyncDisLikeComment,
  asyncNeutralizeComment,
};
