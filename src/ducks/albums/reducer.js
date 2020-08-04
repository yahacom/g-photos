import types from './types';

const INITIAL_STATE = {
  loading: false,
  albums: [],
  photos: [],
};

function albums(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case types.ALBUMS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.ALBUMS_SUCCESS:
      return {
        ...state,
        loading: false,
        albums: [
          ...payload,
        ]
      };
    case types.ALBUMS_FAILURE:
      return {
        ...state,
        loading: false,
        albums: [],
      };
    case types.PHOTOS_REQUEST:
      return {
        ...state,
        loading: true,
        photos: [],
      };
    case types.PHOTOS_SUCCESS:
      return {
        ...state,
        loading: false,
        photos: [
          ...payload,
        ]
      };
    case types.PHOTOS_FAILURE:
      return {
        ...state,
        loading: false,
        photos: [],
      };
    default:
      return state;
  }
}

export default albums;
