import * as types from './types';

export const getAllHashtagsRequest = data => ({
  type: types.GET_ALL_HASHTAGS_REQUEST,
  data,
});

export const getAllHashtagsResponse = data => ({
  type: types.GET_ALL_HASHTAGS_RESPONSE,
  data,
});

export const getAllHashtagsFailed = () => ({
  type: types.GET_ALL_HASHTAGS_FAILED,
});
