import { combineReducers,createStore,applyMiddleware} from 'redux';
import createSagaMiddleware from '@redux-saga/core';
import weatherReducer from "./Reducers/reducer"
import mySaga from './Saga/sagas';

const sagaMiddleware=createSagaMiddleware()

const rootReducer = combineReducers({ weatherReducer });
export const store = createStore(rootReducer,applyMiddleware(sagaMiddleware));
sagaMiddleware.run(mySaga);
