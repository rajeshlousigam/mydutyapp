import {all} from 'redux-saga/effects';

import {loginUserSaga, signupUserSaga} from './user';
import {
  getAllPostsSaga,
  searchPostsSaga,
  likePostsSaga,
  addPostsSaga,
  filterPostsSaga,
  blockORReportPostsSaga,
  addCommentToPostsSaga,
} from './posts';
import {getHashtagsSaga} from './hashtags';

export default function* watch() {
  yield all([
    loginUserSaga(),
    signupUserSaga(),
    getAllPostsSaga(),
    searchPostsSaga(),
    likePostsSaga(),
    addPostsSaga(),
    filterPostsSaga(),
    blockORReportPostsSaga(),
    addCommentToPostsSaga(),
    getHashtagsSaga(),
  ]);
}
