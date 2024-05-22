/* eslint-disable no-case-declarations */
/* eslint-disable max-len */
import { ActionType } from './action';

const leaderboardsReducer = (leaderboards = {}, action = {}) => {
  switch (action.type) {
    case ActionType.GET_LEADERBOARDS_REQUEST:
      return {
        loading: true,
        leaderboards: [],
        error: '',
      };
    case ActionType.GET_LEADERBOARDS_SUCCESS:
      return {
        loading: false,
        leaderboards: action.payload,
        error: '',
      };
    case ActionType.GET_LEADERBOARDS_FAILURE:
      return {
        loading: false,
        leaderboards: [],
        error: action.payload,
      };
    default:
      return leaderboards;
  }
};

export default leaderboardsReducer;
