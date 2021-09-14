import {put, takeEvery, call} from 'redux-saga/effects';
import * as actions from '../actions/hashtags';
import * as types from '../actions/hashtags/types';
import axios from 'axios';
import API from '../../Config/Config';
import * as spinnerActions from '../actions/UI/spinner';
import Toast from 'react-native-toast-message';
import AsyncStorage from '@react-native-async-storage/async-storage';

function getAllHashtagsApi(token) {
  const headers = {
    Authorization: token,
  };
  return axios.get(`${API.url}hashtags/list`, {headers});
}

function* getHashtagsAsync(action) {
  try {
    yield put(spinnerActions.showSpinner());
    const token = yield call(getToken);

    let response = yield call(getAllHashtagsApi, token);

    yield put(actions.getAllHashtagsResponse(response.data.data));

    yield put(spinnerActions.hideSpinner());
  } catch (error) {
    console.log('Error in login user', error.response.data);
    Toast.show({
      type: 'error',
      text1: error.response.data.message,
    });
    yield put(actions.getAllHashtagsFailed());
    yield put(spinnerActions.hideSpinner());
  }
}

export function* getHashtagsSaga() {
  yield takeEvery(types.GET_ALL_HASHTAGS_REQUEST, getHashtagsAsync);
}

async function getToken() {
  try {
    let token = await AsyncStorage.getItem('token');
    return token;
  } catch (error) {
    console.log(error);
  }
}
