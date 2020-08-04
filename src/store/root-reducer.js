import {combineReducers} from 'redux';
import initializeReducer from '../ducks/initialize';
import authReducer from '../ducks/auth';
import albumsReducer from '../ducks/albums';
import authTypes from '../ducks/auth/types';

const appReducer = combineReducers({
  initialize: initializeReducer,
  auth: authReducer,
  albums: albumsReducer,
});

export default (state, action) => {
  if (action.type === authTypes.SIGN_OUT) {
    state = undefined;
  }
  return appReducer(state, action);
};
