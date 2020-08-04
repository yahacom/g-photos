import types from './types';

const INITIAL_STATE = {
  loading: false,
  isAuthorized: false,
  name: null,
  email: null,
};

function auth(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case types.SIGN_IN_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.SIGN_IN_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthorized: true,
        ...payload,
      };
    case types.SIGN_IN_FAILURE:
      return {
        ...state,
        loading: false,
        isAuthorized: false,
        name: null,
        email: null,
      };
    default:
      return state;
  }
}

export default auth;
