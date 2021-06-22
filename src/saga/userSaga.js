import { put, takeEvery, call } from 'redux-saga/effects'

import { IMPORT_USERS, setUsers } from '../store/userReducer';

async function importData() {
  const result = await fetch(`https://jsonplaceholder.typicode.com/users`)
    .then((response) => {
      // console.log(response);
      return response.json();
    })
    .catch((error) => {
      console.log('broooh, some problems occured')
    });

  return result;
}

function* fetchUserWorker() {
  const data = yield call(importData);
  console.log(data);
  yield put(setUsers(data));
}

export function* userWatcher() {
  yield takeEvery(IMPORT_USERS, fetchUserWorker);
}