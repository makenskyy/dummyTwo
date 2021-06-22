import { put, takeEvery, call } from 'redux-saga/effects'

import { IMPORT_USERS, setImportedUsers } from '../store/userReducer';

const importUsers = () => fetch('https://jsonplaceholder.typicode.com/users')

function* importUserWorker() {
  console.log('hello')
  const data = yield call(importUsers);
  console.log(data);
  console.log("hello")
  const json = yield call(() => new Promise(res => res(data.json)));
  yield put(setImportedUsers(json));
}

export function* userWatcher() {
  yield takeEvery(IMPORT_USERS, importUserWorker);
}