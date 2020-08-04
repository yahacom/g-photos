import types from './types';

export default {
  signInRequest(payload) {
    return {
      type: types.SIGN_IN_REQUEST,
      payload,
    };
  },

  signInSuccess(payload) {
    return {
      type: types.SIGN_IN_SUCCESS,
      payload,
    };
  },

  signInError(error) {
    return {
      type: types.SIGN_IN_FAILURE,
      error,
    };
  },

  signOut() {
    return {
      type: types.SIGN_OUT,
    };
  },
};
