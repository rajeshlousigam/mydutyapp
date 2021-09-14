import * as types from './types';

export const loginUserRequest = data => ({
  type: types.LOGIN_USER_REQUEST,
  data,
});

export const loginUserResponse = data => ({
  type: types.LOGIN_USER_RESPONSE,
  data,
});

export const loginUserFailed = () => ({
  type: types.LOGIN_USER_FAILED,
});

export const logUserOut = () => ({
  type: types.LOG_OUT,
});

export const signupUserRequest = data => ({
  type: types.SIGNUP_USER_REQUEST,
  data,
});

export const signupUserResponse = data => ({
  type: types.SIGNUP_USER_RESPONSE,
  data,
});

export const signupUserFailed = () => ({
  type: types.SIGNUP_USER_FAILED,
});

export const updateUserNameRequest = data => ({
  type: types.UPDATE_USER_NAME_REQUEST,
  data,
});

export const updateUserNameResponse = data => ({
  type: types.UPDATE_USER_NAME_RESPONSE,
  data,
});

export const updateUserNameFailed = () => ({
  type: types.UPDATE_USER_NAME_FAILED,
});

export const updateUserEmailRequest = data => ({
  type: types.UPDATE_USER_EMAIL_REQUEST,
  data,
});

export const updateUserEmailResponse = data => ({
  type: types.UPDATE_USER_EMAIL_RESPONSE,
  data,
});

export const updateUserEmailFailed = () => ({
  type: types.UPDATE_USER_EMAIL_FAILED,
});

export const updateUserMobileRequest = data => ({
  type: types.UPDATE_USER_MOBILE_REQUEST,
  data,
});

export const updateUserMobileResponse = data => ({
  type: types.UPDATE_USER_MOBILE_RESPONSE,
  data,
});

export const updateUserMobileFailed = () => ({
  type: types.UPDATE_USER_MOBILE_FAILED,
});

export const updateUserAddressRequest = data => ({
  type: types.UPDATE_USER_ADDRESS_REQUEST,
  data,
});

export const updateUserAddressResponse = data => ({
  type: types.UPDATE_USER_ADDRESS_RESPONSE,
  data,
});

export const updateUserAddressFailed = () => ({
  type: types.UPDATE_USER_ADDRESS_FAILED,
});

export const updateUserPasswordRequest = data => ({
  type: types.UPDATE_USER_PASSWORD_REQUEST,
  data,
});

export const updateUserPasswordResponse = data => ({
  type: types.UPDATE_USER_PASSWORD_RESPONSE,
  data,
});

export const updateUserPasswordFailed = () => ({
  type: types.UPDATE_USER_PASSWORD_FAILED,
});

export const updateUserUsernameRequest = data => ({
  type: types.UPDATE_USER_USERNAME_REQUEST,
  data,
});

export const updateUserUsernameResponse = data => ({
  type: types.UPDATE_USER_USERNAME_RESPONSE,
  data,
});

export const updateUserUsernameFailed = () => ({
  type: types.UPDATE_USER_USERNAME_FAILED,
});

export const getUserByIdRequest = data => ({
  type: types.GET_USER_BY_ID_REQUEST,
  data,
});

export const getUserByIdResponse = data => ({
  type: types.GET_USER_BY_ID_RESPONSE,
  data,
});

export const getUserByIdFailed = () => ({
  type: types.GET_USER_BY_ID_FAILED,
});

export const removeUserRequest = data => ({
  type: types.REMOVE_USER_REQUEST,
  data,
});

export const removeUserResponse = () => ({
  type: types.REMOVE_USER_RESPONSE,
});

export const removeUserFailed = () => ({
  type: types.REMOVE_USER_FAILED,
});

export const updateUserImageRequest = data => ({
  type: types.UPDATE_USER_IMAGE_REQUEST,
  data,
});

export const updateUserImageResponse = data => ({
  type: types.UPDATE_USER_IMAGE_RESPONSE,
  data,
});

export const updateUserImageFailed = () => ({
  type: types.UPDATE_USER_IMAGE_FAILED,
});
