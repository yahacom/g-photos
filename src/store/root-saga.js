import {fork, all} from 'redux-saga/effects';
import {authSaga} from '../ducks/auth';
import {albumsSaga} from '../ducks/albums';

export default function* rootSaga(dispatch) {
  yield all([fork(authSaga, dispatch)]);
  yield all([fork(albumsSaga, dispatch)]);
}
