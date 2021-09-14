import {put, takeEvery, call} from 'redux-saga/effects';
import * as actions from '../actions/posts';
import * as types from '../actions/posts/types';
import axios from 'axios';
import API from '../../Config/Config';
import * as spinnerActions from '../actions/UI/spinner';
import Toast from 'react-native-toast-message';
import AsyncStorage from '@react-native-async-storage/async-storage';

function getAllPostsApi(token) {
  const headers = {
    Authorization: token,
  };
  return axios.get(`${API.url}socialPost/getAllSocialPost`, {headers});
}
function searchPostsApi(data, token) {
  const headers = {
    Authorization: token,
  };

  return axios.post(`${API.url}socialPost/searchSocialPost`, data, {headers});
}
function addLikeApi(data, token) {
  const headers = {
    Authorization: token,
  };
  return axios.post(`${API.url}like/addLike`, data, {headers});
}
function addPostApi(data, token) {
  const headers = {
    Authorization: token,
  };
  return axios.post(`${API.url}socialPost/addSocialPost`, data, {headers});
}

function filterPostApi(data, token) {
  const headers = {
    Authorization: token,
  };
  return axios.post(`${API.url}socialPost/filterSocialPost`, data, {headers});
}
function blockPostApi(data, token) {
  const headers = {
    Authorization: token,
  };
  return axios.post(`${API.url}blockPost/addBlockPost`, data, {headers});
}

function addCommentPostApi(data, token) {
  const headers = {
    Authorization: token,
  };
  return axios.post(`${API.url}comment/addComment`, data, {headers});
}

function* getAllPostsAsync(action) {
  try {
    yield put(spinnerActions.showSpinner());
    const token = yield call(getToken);
    console.log(token, 'token');
    let response = yield call(getAllPostsApi, token);

    yield put(actions.getAllPostsResponse(response.data.data));

    yield put(spinnerActions.hideSpinner());
  } catch (error) {
    console.log('Error in login user', error.response.data);
    Toast.show({
      type: 'error',
      text1: error.response.data.message,
    });
    yield put(actions.getAllPostsFailed());
    yield put(spinnerActions.hideSpinner());
  }
}

function* searchPostsAsync(action) {
  try {
    yield put(spinnerActions.showSpinner());
    const token = yield call(getToken);

    let response = yield call(searchPostsApi, action.data, token);
    if (
      action.data.search.toLowerCase() === 'helper' ||
      action.data.search.toLowerCase() === 'needy'
    ) {
      yield put(actions.searchPostsResponse(response.data));
    } else {
      yield put(actions.searchPostsResponse(response.data.data));
    }

    yield put(spinnerActions.hideSpinner());
  } catch (error) {
    console.log('Error in search user', error.response.data);
    Toast.show({
      type: 'error',
      text1: error.response.data.message,
    });
    yield put(actions.searchPostsFailed());
    yield put(spinnerActions.hideSpinner());
  }
}

function* addLikeAsync(action) {
  try {
    yield put(spinnerActions.showSpinner());
    const token = yield call(getToken);

    let response = yield call(addLikeApi, action.data, token);
    Toast.show({
      type: 'success',
      text1: 'You Liked This Post',
    });
    // yield put(actions.addLikeResponse(response.data.data));

    yield put(spinnerActions.hideSpinner());
  } catch (error) {
    console.log('Error in login user', error.response.data);
    Toast.show({
      type: 'error',
      text1: error.response.data.message,
    });
    // yield put(actions.addLikeFailed());
    // yield put(spinnerActions.hideSpinner());
  }
}

function* addPostAsync(action) {
  try {
    yield put(spinnerActions.showSpinner());
    // const token = yield call(getToken);
    // let response = yield call(addPostApi, action.data, token);
    // console.log(response.data);
    // yield put(actions.addPOstResponse());
    yield put(actions.getAllPostsRequest());

    yield put(spinnerActions.hideSpinner());
  } catch (error) {
    console.log(error);

    // console.log('Error in login user', error.response.data);
    // Toast.show({
    //   type: 'error',
    //   text1: error.response.data.message,
    // });
    yield put(actions.addPostFailed());
    yield put(spinnerActions.hideSpinner());
  }
}

function* filterPostAsync(action) {
  try {
    yield put(spinnerActions.showSpinner());
    const token = yield call(getToken);

    let response = yield call(filterPostApi, action.data, token);

    yield put(actions.filterPostResponse(response.data.data));

    yield put(spinnerActions.hideSpinner());
  } catch (error) {
    console.log(error);

    // console.log('Error in login user', error.response.data);
    Toast.show({
      type: 'error',
      text1: error.response.data.message,
    });
    yield put(actions.filterPostFailed());
    yield put(spinnerActions.hideSpinner());
  }
}

function* blockOrReportPostAsync(action) {
  try {
    yield put(spinnerActions.showSpinner());
    const token = yield call(getToken);

    let response = yield call(blockPostApi, action.data, token);
    if (action.data.isBlock) {
      yield put(actions.blockOrReportPostResponse({id: action.data.postId}));
    } else {
      Toast.show({
        type: 'success',
        text1: 'Post Reported',
      });
    }

    yield put(spinnerActions.hideSpinner());
  } catch (error) {
    console.log(error);

    Toast.show({
      type: 'error',
      text1: error.response.data.message,
    });
    yield put(actions.blockOrReportPostFailed());
    yield put(spinnerActions.hideSpinner());
  }
}

function* addCommentToPostAsync(action) {
  try {
    yield put(spinnerActions.showSpinner());
    const token = yield call(getToken);

    let response = yield call(addCommentPostApi, action.data, token);

    yield put(actions.addCommentToPostResponse(action.data));

    yield put(spinnerActions.hideSpinner());
  } catch (error) {
    console.log(error);

    Toast.show({
      type: 'error',
      text1: error.response.data.message,
    });
    yield put(actions.addCommentToPostFailed());
    yield put(spinnerActions.hideSpinner());
  }
}

export function* getAllPostsSaga() {
  yield takeEvery(types.GET_ALL_POSTS_REQUEST, getAllPostsAsync);
}

export function* searchPostsSaga() {
  yield takeEvery(types.SEARCH_POSTS_REQUEST, searchPostsAsync);
}
export function* likePostsSaga() {
  yield takeEvery(types.ADD_LIKE_REQUEST, addLikeAsync);
}
export function* addPostsSaga() {
  yield takeEvery(types.ADD_POST_REQUEST, addPostAsync);
}
export function* filterPostsSaga() {
  yield takeEvery(types.FILTER_POST_REQUEST, filterPostAsync);
}
export function* blockORReportPostsSaga() {
  yield takeEvery(types.BLOCK_OR_REPORT_POST_REQUEST, blockOrReportPostAsync);
}

export function* addCommentToPostsSaga() {
  yield takeEvery(types.ADD_COMMENT_TO_POST_REQUEST, addCommentToPostAsync);
}

async function getToken() {
  try {
    let token = await AsyncStorage.getItem('token');
    return token;
  } catch (error) {
    console.log(error);
  }
}
