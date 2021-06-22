import { all } from 'redux-saga/effects'
import { userWatcher } from './userSaga'
import { postCommentWatcher } from './postSaga';

export function* rootWatcher() {
  yield all([userWatcher(), postCommentWatcher()])
}