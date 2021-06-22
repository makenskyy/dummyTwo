import { takeEvery } from "redux-saga/effects"
import { POST_COMMENT } from '../store/postReducer';

function* postCommentWorker(user) {
  const response = yield fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify({
      title: user.title,
      body: user.body | "hey",
      id: Date.now(),
      userId: user.userId | "id"
    })
  })
  return yield (response.status === 201)

}

export function* addNewComment(action) {
  const result = yield postCommentWorker(action.user);
  if (result) {
    console.log(
      "title: " + action.user.title,
      "\nbody: " + action.user.body,
      "\nuserId: " + action.user.userId
      + " succcessfully posted!"
    )
  } else {
    console.log("there is a problem brooo")
  }

}

export function* postCommentWatcher() {
  yield takeEvery(POST_COMMENT, addNewComment);
}