export enum COLORS {
  BLUE = "blue",
  GRAY = "gray",
  RED = "red",
  GREEN = "green",
  YELOW = "yellow",
  VIOLET = "violet",
}

export type IKeyword = {
  id: string;
  keyword: string;
  suggestionsCount: number | null;
  trafficScore: number;
  position: string;
  delta?: string;
  color: COLORS;
  totalApps: number;
  checked: boolean;
};

export type IKeywordsInfo = {
  [key: string]: IKeyword;
};

export interface IKeywordsParsed {
  keywordsInfo: IKeywordsInfo;
  keywordsList: string[];
  checkedKeywords: string[];
}
