import createSagaMiddleware from 'redux-saga';
import {applyMiddleware, createStore} from 'redux';

import {rootReducer} from './root-reducer';
import {rootSaga} from './root-saga';

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);
