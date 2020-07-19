import { all, put, takeLatest, call } from "redux-saga/effects";
import { SagaIterator } from "redux-saga";
import {
  ACTIONS_TYPES,
  fetchStartKeywords,
  doneKeywords,
  errorKeywords,
} from "./actions";

import { fetchKeywordsNetwork } from "../network";

function* fetchKeywordsSaga(): SagaIterator {
  try {
    yield put(fetchStartKeywords());
    const data = yield call(fetchKeywordsNetwork);
    yield put(doneKeywords(data));
  } catch {
    yield put(errorKeywords());
  }
}

export function* rootSaga(): Generator {
  yield all([takeLatest(ACTIONS_TYPES.FETCH_KEYWORDS, fetchKeywordsSaga)]);
}
