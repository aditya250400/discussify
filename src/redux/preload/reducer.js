import { ActionType } from './action';

function preloadReducer(preload = true, action = {}) {
  switch (action.type) {
    case ActionType.SET_IS_PRELOAD:
      return action.payload;
    default:
      return preload;
  }
}

export default preloadReducer;
