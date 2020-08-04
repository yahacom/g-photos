import {takeEvery, put, all, call} from 'redux-saga/effects';
import types from './types';
import actions from './actions';
import getAlbums from '../../api/albums';
import getPhotos from '../../api/photos';

function* albumsSagaWorker() {
  try {
    const response = yield call(getAlbums);
    yield put(actions.albumsSuccess(response));
  } catch (error) {
    yield put(actions.albumsError(error));
  }
}

function* photosSagaWorker({payload}) {
  try {
    const response = yield call(getPhotos, payload);
    yield put(actions.photosSuccess(response))
  } catch (error) {
    yield put(actions.photosError(error));
  }
}

export default function* rootAuthSaga() {
  yield all([takeEvery(types.ALBUMS_REQUEST, albumsSagaWorker)]);
  yield all([takeEvery(types.PHOTOS_REQUEST, photosSagaWorker)]);
}
