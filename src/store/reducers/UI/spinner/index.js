import createReducer from '../../../../lib/createReducer';
import * as types from '../../../actions/UI/spinner/types';

const initialState = {
  loading: false,
};

export const spinnerReducer = createReducer(initialState, {
  [types.SHOW_SPINNER](state, action) {
    return {
      ...state,

      loading: true,
    };
  },
  [types.HIDE_SPINNER](state) {
    return {
      ...state,

      loading: false,
    };
  },
});
