import {takeEvery, put, all, call} from 'redux-saga/effects';
import types from './types';
import actions from './actions';
import auth from '../../api/auth';

function* signInSagaWorker() {
  try {
    const response = yield call(auth);
    yield put(actions.signInSuccess(response));
  } catch (error) {
    yield put(actions.signInError(error));
  }
}

export default function* rootAuthSaga() {
  yield all([takeEvery(types.SIGN_IN_REQUEST, signInSagaWorker)]);
}
