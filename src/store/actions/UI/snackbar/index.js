import * as types from './types';

export const showSuccess = text => ({
  type: types.SHOW_SUCCESS_SNACKBAR,
  payload: text,
});

export const hideSuccess = () => ({
  type: types.HIDE_SUCCESS_SNACKBAR,
});

export const showError = text => {
  return {
    type: types.SHOW_ERROR_SNACKBAR,
    payload: text,
  };
};

export const hideError = () => ({
  type: types.HIDE_ERROR_SNACKBAR,
});

export const showLoading = () => ({
  type: types.SHOW_LOADING_SNACKBAR,
});

export const hideLoading = () => ({
  type: types.HIDE_LOADING_SNACKBAR,
});
