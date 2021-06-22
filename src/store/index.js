import { applyMiddleware, combineReducers, createStore } from "redux";
import { userReducer } from './userReducer';
import createSagaMiddleware from "redux-saga";
import { rootWatcher } from "../saga";
import { composeWithDevTools } from 'redux-devtools-extension'

const sagaMiddleware = createSagaMiddleware();

export const rootReducer = combineReducers({
  userReducer,
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootWatcher);