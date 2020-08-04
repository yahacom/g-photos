import {combineReducers} from 'redux';
import authReducer from '../ducks/auth';
import authTypes from '../ducks/auth/types';

const appReducer = combineReducers({
  auth: authReducer,
});

export default (state, action) => {
  if (action.type === authTypes.SIGN_OUT) {
    state = undefined;
  }
  return appReducer(state, action);
};
