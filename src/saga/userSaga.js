import { put, takeEvery, call } from 'redux-saga/effects'

import { FETCH_USERS, setUsers } from '../store/userReducer';

// const fetchUsersFromApi = () => fetch('https://jsonplaceholder.typicode.com/users')
async function fetchUsersFromApi() {
  const result = await fetch(`https://jsonplaceholder.typicode.com/users`)
    .then((response) => {
      // console.log(response);
      return response.json();
    })
    .catch((error) => {
      throw error;
    });

  return result;
}

function* fetchUserWorker() {
  const data = yield call(fetchUsersFromApi);
  console.log(data);
  yield put(setUsers(data));
}

export function* userWatcher() {
  yield takeEvery(FETCH_USERS, fetchUserWorker);
}