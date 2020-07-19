import { combineReducers } from "redux";
import { IAppStore, TAppAction } from "./types";
import { ACTIONS_TYPES } from "./actions";
import { filteredArray } from "./utils";

const INITIAL_STATE: IAppStore = {
  keywordsInfo: {},
  keywordsList: [],
  checkedKeywords: [],
  isLoading: false,
  isError: false,
};

const MIN_SELECTED_COUNT = 1;

export const appReducer = (
  state = INITIAL_STATE,
  action: TAppAction
): IAppStore => {
  switch (action.type) {
    case ACTIONS_TYPES.FETCH_KEYWORDS_START: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case ACTIONS_TYPES.FETCH_KEYWORDS_SUCCESS: {
      const { payload } = action;
      return {
        ...state,
        ...payload,
        isError: false,
        isLoading: false,
      };
    }
    case ACTIONS_TYPES.FETCH_KEYWORDS_ERROR: {
      return {
        ...state,
        isError: true,
        isLoading: false,
      };
    }
    case ACTIONS_TYPES.CHECK_ALL_KEYWORDS: {
      const newKeywordsInfo = Object.keys(state.keywordsInfo).reduce(
        (acc, item) => {
          const itemKeyword = state.keywordsInfo[item];
          return {
            ...acc,
            [item]: {
              ...itemKeyword,
              checked: true,
            },
          };
        },
        {}
      );

      return {
        ...state,
        checkedKeywords: [...state.keywordsList],
        keywordsInfo: newKeywordsInfo,
      };
    }
    case ACTIONS_TYPES.DELETE_KEYWORD: {
      const { payload } = action;
      const checkedList = filteredArray(state.checkedKeywords, payload);
      const filteredKeywords = filteredArray(state.keywordsList, payload);
      const newCheckedIndex = filteredKeywords[0];
      const keyword = state.keywordsInfo[newCheckedIndex];
      return {
        ...state,
        checkedKeywords:
          checkedList.length > 0 ? checkedList : [newCheckedIndex],
        keywordsList: filteredKeywords,
        keywordsInfo: {
          ...state.keywordsInfo,
          [newCheckedIndex]: {
            ...keyword,
            checked: checkedList.length > 0 ? keyword.checked : true,
          },
        },
      };
    }
    case ACTIONS_TYPES.TOGGLE_CHECK_KEYWORD: {
      const { payload } = action;
      const keyword = state.keywordsInfo[payload];
      const checkedList = state.checkedKeywords;
      const filteredList =
        checkedList.length > MIN_SELECTED_COUNT
          ? filteredArray(checkedList, payload)
          : checkedList;
      const checkedValue =
        keyword.checked && checkedList.length > MIN_SELECTED_COUNT
          ? !keyword.checked
          : true;
      return {
        ...state,
        keywordsInfo: {
          ...state.keywordsInfo,
          [payload]: {
            ...keyword,
            checked: checkedValue,
          },
        },
        checkedKeywords: keyword.checked
          ? filteredList
          : [...checkedList, payload],
      };
    }
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  app: appReducer,
});
