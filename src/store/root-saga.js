import {fork, all} from 'redux-saga/effects';
import {authSaga} from '../ducks/auth';

export default function* rootSaga(dispatch) {
  yield all([fork(authSaga, dispatch)]);
}
