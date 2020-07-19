import { IStore } from "./types";
import { IKeywordsInfo } from "../interfaces";

export const selectKeywordsList = (store: IStore): string[] =>
  store.app.keywordsList;

export const selectKeywordInfo = (store: IStore): IKeywordsInfo =>
  store.app.keywordsInfo;

export const selectKeywordChecked = (store: IStore, id: string): boolean =>
  store.app.keywordsInfo[id].checked;

export const selectCheckAll = (store: IStore): boolean =>
  store.app.keywordsList.length === store.app.checkedKeywords.length;
