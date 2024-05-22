import { ActionType } from './action';

const tagsReducer = (tags = {}, action = {}) => {
  switch (action.type) {
    case ActionType.GET_ALL_TAGS_REQUEST:
      return {
        loading: true,
        tags: [],
        error: '',
      };
    case ActionType.GET_ALL_TAGS_SUCCESS:
      return {
        tags: action.payload,
        loading: false,
        error: '',
      };
    case ActionType.GET_ALL_TAGS_FAILURE:
      return {
        loading: false,
        tags: [],
        error: action.payload,
      };
    default:
      return tags;
  }
};

export default tagsReducer;
