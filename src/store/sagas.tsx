import { all, put, takeLatest } from "redux-saga/effects";
import { SagaIterator } from "redux-saga";
import {
  ACTIONS_TYPES, initial,
} from "./actions";

function* initialSaga(): SagaIterator {
  try {
    yield put(initial());
  } catch {
    console.log('error')
  }
}

export function* rootSaga(): Generator {
  yield all([takeLatest(ACTIONS_TYPES.INITIAL, initialSaga)]);
}
