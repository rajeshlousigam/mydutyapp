import createReducer from '../../../lib/createReducer';
import * as types from '../../actions/user/types';

const initialState = {
  isLoggedIn: false,
  user: null,
  first_name: '',
  last_name: '',
  address: {
    house_no: '',
    street: '',
    landmark: '',
    city: '',
    district: '',
    state: '',
  },
  mobile: '',
  username: '',
  image: null,
  success: false,
};

export const userReducer = createReducer(initialState, {
  [types.LOGIN_USER_REQUEST](state, action) {
    return {
      ...state,
    };
  },
  [types.LOGIN_USER_RESPONSE](state, action) {
    return {...state, user: action.data, isLoggedIn: true};
  },
  [types.LOGIN_USER_FAILED](state) {
    return {
      ...state,
      isLoggedIn: false,
    };
  },
  [types.SIGNUP_USER_REQUEST](state, action) {
    return {
      ...state,
      success: false,
    };
  },
  [types.SIGNUP_USER_RESPONSE](state, action) {
    return {...state, success: true};
  },
  [types.SIGNUP_USER_FAILED](state) {
    return {
      ...state,
      success: false,
    };
  },
  [types.LOG_OUT](state) {
    return initialState;
  },
  [types.UPDATE_USER_NAME_REQUEST](state, action) {
    return {
      ...state,
    };
  },
  [types.UPDATE_USER_NAME_RESPONSE](state, action) {
    return {
      ...state,
      first_name: action.data.first_name,
      last_name: action.data.last_name,
    };
  },
  [types.UPDATE_USER_NAME_FAILED](state) {
    return {
      ...state,
    };
  },
  [types.UPDATE_USER_ADDRESS_REQUEST](state, action) {
    return {
      ...state,
    };
  },
  [types.UPDATE_USER_ADDRESS_RESPONSE](state, action) {
    return {
      ...state,
      address: action.data.address,
    };
  },
  [types.UPDATE_USER_ADDRESS_FAILED](state) {
    return {
      ...state,
    };
  },
  [types.UPDATE_USER_EMAIL_REQUEST](state, action) {
    return {
      ...state,
    };
  },
  [types.UPDATE_USER_EMAIL_RESPONSE](state, action) {
    return {
      ...state,
      user: {
        ...state.user,
        email: action.data,
      },
    };
  },
  [types.UPDATE_USER_EMAIL_FAILED](state) {
    return {
      ...state,
    };
  },
  [types.UPDATE_USER_MOBILE_REQUEST](state, action) {
    return {
      ...state,
    };
  },
  [types.UPDATE_USER_MOBILE_RESPONSE](state, action) {
    return {
      ...state,
      mobile: action.data,
    };
  },
  [types.UPDATE_USER_MOBILE_FAILED](state) {
    return {
      ...state,
    };
  },
  [types.UPDATE_USER_PASSWORD_REQUEST](state, action) {
    return {
      ...state,
    };
  },
  [types.UPDATE_USER_PASSWORD_RESPONSE](state, action) {
    return {
      ...state,
    };
  },
  [types.UPDATE_USER_PASSWORD_FAILED](state) {
    return {
      ...state,
    };
  },
  [types.UPDATE_USER_USERNAME_REQUEST](state, action) {
    return {
      ...state,
    };
  },
  [types.UPDATE_USER_USERNAME_RESPONSE](state, action) {
    return {
      ...state,
      username: action.data,
    };
  },
  [types.UPDATE_USER_USERNAME_FAILED](state) {
    return {
      ...state,
    };
  },
  [types.REMOVE_USER_REQUEST](state, action) {
    return {
      ...state,
    };
  },
  [types.REMOVE_USER_RESPONSE](state, action) {
    return initialState;
  },
  [types.REMOVE_USER_FAILED](state) {
    return {
      ...state,
    };
  },
  [types.GET_USER_BY_ID_REQUEST](state, action) {
    return {
      ...state,
    };
  },

  [types.GET_USER_BY_ID_RESPONSE](state, action) {
    console.log(action.data, 'user');
    return {
      ...state,
      user: {
        ...state.user,
        email: action.data.email,
      },
      first_name: action.data.first_name,
      last_name: action.data.last_name,
      mobile: action.data.mobile ? Number(action.data.mobile) : '',
      username: action.data.username ? action.data.username : '',
      address: action.data.address,
      image: action.data.image,
    };
  },
  [types.GET_USER_BY_ID_FAILED](state) {
    return {
      ...state,
    };
  },
  [types.UPDATE_USER_IMAGE_REQUEST](state, action) {
    return {
      ...state,
    };
  },

  [types.UPDATE_USER_IMAGE_RESPONSE](state, action) {
    console.log(action, 'Dads');
    return {
      ...state,
      user: {
        ...state.user,
      },
      image: action.data,
    };
  },
  [types.UPDATE_USER_IMAGE_FAILED](state) {
    return {
      ...state,
    };
  },
});
