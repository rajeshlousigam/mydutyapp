import * as types from './types';

export const getAllPostsRequest = data => ({
  type: types.GET_ALL_POSTS_REQUEST,
  data,
});

export const getAllPostsResponse = data => ({
  type: types.GET_ALL_POSTS_RESPONSE,
  data,
});

export const getAllPostsFailed = () => ({
  type: types.GET_ALL_POSTS_FAILED,
});

export const searchPostsRequest = data => ({
  type: types.SEARCH_POSTS_REQUEST,
  data,
});

export const searchPostsResponse = data => ({
  type: types.SEARCH_POSTS_RESPONSE,
  data,
});

export const searchPostsFailed = () => ({
  type: types.SEARCH_POSTS_FAILED,
});

export const addLikeRequest = data => ({
  type: types.ADD_LIKE_REQUEST,
  data,
});

export const addLikeResponse = data => ({
  type: types.ADD_LIKE_RESPONSE,
  data,
});

export const addLikeFailed = () => ({
  type: types.ADD_LIKE_FAILED,
});

export const addPostRequest = data => ({
  type: types.ADD_POST_REQUEST,
  data,
});

export const addPostResponse = data => ({
  type: types.ADD_POST_RESPONSE,
  data,
});

export const addPostFailed = () => ({
  type: types.ADD_POST_FAILED,
});

export const filterPostRequest = data => ({
  type: types.FILTER_POST_REQUEST,
  data,
});

export const filterPostResponse = data => ({
  type: types.FILTER_POST_RESPONSE,
  data,
});

export const filterPostFailed = () => ({
  type: types.FILTER_POST_FAILED,
});

export const blockOrReportPostRequest = data => ({
  type: types.BLOCK_OR_REPORT_POST_REQUEST,
  data,
});

export const blockOrReportPostResponse = data => ({
  type: types.BLOCK_OR_REPORT_POST_RESPONSE,
  data,
});

export const blockOrReportPostFailed = () => ({
  type: types.BLOCK_OR_REPORT_POST_FAILED,
});

export const addCommentToPostRequest = data => ({
  type: types.ADD_COMMENT_TO_POST_REQUEST,
  data,
});

export const addCommentToPostResponse = data => ({
  type: types.ADD_COMMENT_TO_POST_RESPONSE,
  data,
});

export const addCommentToPostFailed = () => ({
  type: types.ADD_COMMENT_TO_POST_FAILED,
});
