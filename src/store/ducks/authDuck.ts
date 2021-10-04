import {AnyAction} from 'redux';
import {IUserData} from '../../types/main';

export const CHECK_SIGNED_IN = 'socialize/auth/checkSignedIn';
export const SET_USER_DATA = 'socialize/auth/setUserData';
export const UPDATE_USER_DATA = 'socialize/auth/updateUserData';
export const REQUEST_SIGN_IN = 'socialize/auth/requestSignIn';
export const REQUEST_SIGN_UP = 'socialize/auth/requestSignUp';
export const LOGOUT = 'socialize/auth/logout';

const initialState = {
  userData: {},
};

export const authReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        userData: action.userData,
      };
    case UPDATE_USER_DATA:
      console.log(action);
      return {
        ...state,
        userData: {...state.userData, ...action.userData},
      };
    default:
      return state;
  }
};

export const checkSignedInAction = () => ({
  type: CHECK_SIGNED_IN,
});

export const signInAction = (data = {}) => ({
  type: REQUEST_SIGN_IN,
  data,
});
export const signUpAction = () => ({
  type: REQUEST_SIGN_UP,
});

export const setUserDataAction = (userData: IUserData) => ({
  type: SET_USER_DATA,
  userData,
});

export const logoutAction = () => ({
  type: LOGOUT,
});
