import {takeEvery, put, all, call} from 'redux-saga/effects';
import types from './types';
import actions from './actions';
import getAlbums from '../../api/albums';

function* albumsSagaWorker() {
  try {
    const response = yield call(getAlbums);
    yield put(actions.albumsSuccess(response));
  } catch (error) {
    yield put(actions.albumsError(error));
  }
}

export default function* rootAuthSaga() {
  yield all([takeEvery(types.ALBUMS_REQUEST, albumsSagaWorker)]);
}
