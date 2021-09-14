import createReducer from '../../../lib/createReducer';
import * as types from '../../actions/hashtags/types';

const initialState = {
  hashtags: [],
};

export const hashtagReducer = createReducer(initialState, {
  [types.GET_ALL_HASHTAGS_REQUEST](state, action) {
    return {
      ...state,
    };
  },
  [types.GET_ALL_HASHTAGS_RESPONSE](state, action) {
    return {...state, hashtags: action.data};
  },
  [types.GET_ALL_HASHTAGS_FAILED](state) {
    return {
      ...state,
    };
  },
});
