import createReducer from '../../../../lib/createReducer';
import * as types from '../../../actions/UI/snackbar';

const initialState = {
  showSuccess: false,
  showError: false,
  loading: false,
  successText: '',
  errorText: '',
};

export const snackbarReducer = createReducer(initialState, {
  [types.SHOW_SUCCESS_SNACKBAR](state, action) {
    return {
      ...state,
      showSuccess: true,
      successText: action.payload,
      loading: false,
    };
  },
  [types.HIDE_SUCCESS_SNACKBAR](state) {
    return {
      ...state,
      showSuccess: false,
      successText: '',
      loading: false,
    };
  },
  [types.SHOW_ERROR_SNACKBAR](state, action) {
    return {
      ...state,
      showError: true,
      errorText: action.payload,
      loading: false,
    };
  },
  [types.HIDE_ERROR_SNACKBAR](state) {
    return { ...state, showError: false, errorText: '', loading: false };
  },
  [types.SHOW_LOADING_SNACKBAR](state) {
    return { ...state, loading: true, successText: '', errorText: '' };
  },
  [types.HIDE_LOADING_SNACKBAR](state) {
    return { ...state, loading: false, successText: '', errorText: '' };
  },
});
