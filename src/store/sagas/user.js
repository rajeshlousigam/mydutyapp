import {put, takeEvery, call} from 'redux-saga/effects';
import * as actions from '../actions/user';
import * as types from '../actions/user/types';
import axios from 'axios';
import API from '../../Config/Config';
import * as spinnerActions from '../actions/UI/spinner';
import Toast from 'react-native-toast-message';
import AsyncStorage from '@react-native-async-storage/async-storage';

function loginApi(data) {
  return axios.post(`${API.url}user/login`, data);
}

function signupApi(data) {
  return axios.post(`${API.url}user/addUser`, data);
}

function* loginUserAsync(action) {
  try {
    yield put(spinnerActions.showSpinner());
    let response = yield call(loginApi, action.data);

    yield put(actions.loginUserResponse(response.data.data));
    yield call(saveToken, response.data.token);
    yield put(spinnerActions.hideSpinner());
  } catch (error) {
    console.log('Error in login user', error.response.data);
    Toast.show({
      type: 'error',
      text1: error.response.data.message,
    });
    yield put(actions.loginUserFailed());
    yield put(spinnerActions.hideSpinner());
  }
}

function* signupUserAsync(action) {
  try {
    yield put(spinnerActions.showSpinner());
    let response = yield call(signupApi, action.data);
    console.log(response.data, 'Asda');
    yield put(actions.loginUserResponse(response.data.data));
    yield put(spinnerActions.hideSpinner());
  } catch (error) {
    console.log('Error in login user', error.response);
    Toast.show({
      type: 'error',
      text1: error.response.data.message,
    });
    yield put(actions.loginUserFailed());
    yield put(spinnerActions.hideSpinner());
  }
}

export function* loginUserSaga() {
  yield takeEvery(types.LOGIN_USER_REQUEST, loginUserAsync);
}
export function* signupUserSaga() {
  yield takeEvery(types.SIGNUP_USER_REQUEST, signupUserAsync);
}

async function saveToken(token) {
  try {
    await AsyncStorage.setItem('token', token);
  } catch (error) {
    console.log(error);
  }
}
