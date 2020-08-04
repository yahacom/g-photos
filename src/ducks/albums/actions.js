import types from './types';

export default {
  albumsRequest(payload) {
    return {
      type: types.ALBUMS_REQUEST,
      payload,
    };
  },

  albumsSuccess(payload) {
    return {
      type: types.ALBUMS_SUCCESS,
      payload,
    };
  },

  albumsError(error) {
    return {
      type: types.ALBUMS_FAILURE,
      error,
    };
  },
};
