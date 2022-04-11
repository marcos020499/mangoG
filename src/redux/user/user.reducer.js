import UserActionTypes from "./user.types.js";

const INITIAL_STATE = {
  currentUser: null,
  resetPasswordSuccess: false,
  userErr: [],
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        userErr: [],
      };
    case UserActionTypes.RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        resetPasswordSuccess: action.payload,
      };
    case UserActionTypes.USER_ERROR:
      return {
        ...state,
        userErr: action.payload,
      };
    case UserActionTypes.RESET_USER_STATE:
    case UserActionTypes.SIGN_OUT_USER_SUCCESS:
      return {
        ...state,
        ...INITIAL_STATE,
      };
    default:
      return state;
  }
};

export default userReducer;
