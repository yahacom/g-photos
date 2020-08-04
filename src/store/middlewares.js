import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';

export const sagaMiddleware = createSagaMiddleware();

export const middlewares = [sagaMiddleware, logger];
