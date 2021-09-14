import {signUserIn, createUser} from '../services/auth';
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const CREATE_USER_REQUEST = 'CREATE_USER_REQUEST';
export const CREATE_USER_SUCCESS = 'CREATE_USER_SUCCESS';
export const CREATE_USER_FAILURE = 'CREATE_USER_FAILURE';

const requestLogin = () => {
  return {
    type: LOGIN_REQUEST,
  };
};

const receiveLogin = loginData => {
  return {
    type: LOGIN_SUCCESS,
    loginData,
  };
};

const loginError = () => {
  return {
    type: LOGIN_FAILURE,
  };
};

const requestCreateUser = () => {
  return {
    type: CREATE_USER_REQUEST,
  };
};

const receiveCreateUser = userData => {
  return {
    type: CREATE_USER_SUCCESS,
    userData,
  };
};

const createUserError = () => {
  return {
    type: CREATE_USER_FAILURE,
  };
};

export const loginUser = (email, phone, password) => async dispatch => {
  dispatch(requestLogin());
  const response = await signUserIn(email, phone, password);

  if (response) {
    if (response.data.status === 1) {
      dispatch(receiveLogin(response.data));
      return true;
    } else {
      alert(response.data.message);
      dispatch(loginError());
      return false;
    }
  } else {
    dispatch(loginError());
    return false;
  }
};

export const userCreate = (email, phone, password) => async dispatch => {
  dispatch(requestCreateUser());
  const response = await createUser(email, phone, password);

  if (response) {
    if (response.data.status == 1) {
      dispatch(receiveCreateUser(response.data));
      return true;
    } else {
      alert(response.data.message);
      dispatch(createUserError());
      return false;
    }
  } else {
    dispatch(createUserError());
    return false;
  }
};
