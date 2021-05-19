import { call, put, takeEvery } from "redux-saga/effects";
import { USER_REQUEST, USER_ADD, USER_ERROR } from "../constants/user";

import * as Api from "../api";

function* fetchUser() {
  try {
    yield put({ type: USER_REQUEST });

    const user = yield call(Api.fetchRandomUser);
    yield put({ type: USER_ADD, payload: user });
  } catch (e) {
    console.log(e);

    yield put({ type: USER_ERROR, message: e.message });
  }
}

function* rootSaga() {
  yield takeEvery("USER_FETCH_REQUESTED", fetchUser);
}

export default rootSaga;
