import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
  CREATE_USER_REQUEST,
  CREATE_USER_SUCCESS,
  CREATE_USER_FAILURE
} from "../actions/auth";
  
export default (
    state = {
      isLoggingIn: false,
      loginError: false,
      isAuthenticated: false,
      loginData: {},
      userData: {}
    },
    action
  ) => {
    switch (action.type) {
      case LOGIN_REQUEST:
        return {
          ...state,
          isLoggingIn: true,
          loginError: false
        };
      case LOGIN_SUCCESS:
        return {
          ...state,
          isLoggingIn: false,
          isAuthenticated: true,
          loginData: action.loginData
        };
      case LOGIN_FAILURE:
        return {
          ...state,
          isLoggingIn: false,
          isAuthenticated: false,
          loginError: true
        };

        case CREATE_USER_REQUEST:
        return {
          ...state,
          isLoggingIn: true,
          loginError: false
        };
      case CREATE_USER_SUCCESS:
        return {
          ...state,
          isLoggingIn: false,
          isAuthenticated: true,
          userData: action.userData
        };
      case CREATE_USER_FAILURE:
        return {
          ...state,
          isLoggingIn: false,
          isAuthenticated: false,
          loginError: true
          }
      default:
        return state;
    }
  };