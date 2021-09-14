import * as types from './types';

export const showSpinner = () => {
  return {
    type: types.SHOW_SPINNER,
  };
};

export const hideSpinner = () => ({
  type: types.HIDE_SPINNER,
});
