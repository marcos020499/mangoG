import UserActionTypes from "./user.types.js";

export const emailSignInStart = (userCredentials) => ({
  type: UserActionTypes.EMAIL_SIGN_IN_START,
  payload: userCredentials,
});

export const signInSuccess = (user) => ({
  type: UserActionTypes.SIGN_IN_SUCCESS,
  payload: user,
});

export const checkUserSession = () => ({
  type: UserActionTypes.CHECK_USER_SESSION,
});

export const signOutUserStart = () => ({
  type: UserActionTypes.SIGN_OUT_USER_START,
});

export const signOutUserSuccess = () => ({
  type: UserActionTypes.SIGN_OUT_USER_SUCCESS,
});

export const signUpUserStart = (userCredentials) => ({
  type: UserActionTypes.SIGN_UP_USER_START,
  payload: userCredentials,
});

export const userError = (err) => ({
  type: UserActionTypes.USER_ERROR,
  payload: err,
});

export const resetPasswordStart = (userCredentials) => ({
  type: UserActionTypes.RESET_PASSWORD_START,
  payload: userCredentials,
});

export const resetPasswordSuccess = () => ({
  type: UserActionTypes.RESET_PASSWORD_SUCCESS,
  payload: true,
});

export const resetUserState = () => ({
  type: UserActionTypes.RESET_USER_STATE,
});

export const googleSignInStart = () => ({
  type: UserActionTypes.GOOGLE_SIGN_IN_START,
});
