import { IKeywordsParsed } from "../interfaces";

export enum ACTIONS_TYPES {
  FETCH_KEYWORDS = "FETCH_KEYWORDS",
  FETCH_KEYWORDS_START = "FETCH_KEYWORDS_START",
  FETCH_KEYWORDS_SUCCESS = "FETCH_KEYWORDS_SUCCESS",
  FETCH_KEYWORDS_ERROR = "FETCH_KEYWORDS_ERROR",
  TOGGLE_CHECK_KEYWORD = "TOGGLE_CHECK_KEYWORD",
  DELETE_KEYWORD = "DELETE_KEYWORD",
}

function literalType<T extends ACTIONS_TYPES>(actionName: T): T {
  return actionName;
}

export const deleteKeyword = (payload: string) => ({
  type: literalType(ACTIONS_TYPES.DELETE_KEYWORD),
  payload,
});

export const checkKeyword = (payload: string) => ({
  type: literalType(ACTIONS_TYPES.TOGGLE_CHECK_KEYWORD),
  payload,
});

export const fetchKeywords = () => ({
  type: literalType(ACTIONS_TYPES.FETCH_KEYWORDS),
});

export const fetchStartKeywords = () => ({
  type: literalType(ACTIONS_TYPES.FETCH_KEYWORDS_START),
});

export const doneKeywords = (payload: IKeywordsParsed) => ({
  type: literalType(ACTIONS_TYPES.FETCH_KEYWORDS_SUCCESS),
  payload,
});

export const errorKeywords = () => ({
  type: literalType(ACTIONS_TYPES.FETCH_KEYWORDS_ERROR),
});

export const actionCreators = {
  fetchKeywords,
  doneKeywords,
  fetchStartKeywords,
  errorKeywords,
  checkKeyword,
  deleteKeyword,
};
