import {takeEvery, put, all, call} from 'redux-saga/effects';
import types from './types';
import actions from './actions';

function* signInSagaWorker({ payload }) {
  try {

  } catch (error) {

  }
}

function* signOutSagaWorker() {
  try {

  } catch (error) {}
}

export default function* rootAuthSaga() {
  yield all([takeEvery(types.SIGN_IN_REQUEST, signInSagaWorker)]);
  yield all([takeEvery(types.SIGN_OUT, signOutSagaWorker)]);
}
