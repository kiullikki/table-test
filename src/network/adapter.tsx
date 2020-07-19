import { URLS } from "../constants";
import { API_SERVICE } from "./api";
import { data as mockData } from "./mock";
import { COLORS, IKeyword, IKeywordsParsed } from "../interfaces";

interface IUsedFieldsKeywordNetwork {
  id: number;
  keyword: string;
  suggestions_count: number | null | Array<any> | object;
  users_per_day: number;
  position_info: {
    position: number | string | null;
    change: number | null;
  };
  color: number;
}

type IKeywordNetwork = IUsedFieldsKeywordNetwork & {
  [key: string]: boolean | string | number | object | null;
};

const COLORS_LIST = [
  COLORS.VIOLET,
  COLORS.GRAY,
  COLORS.RED,
  COLORS.BLUE,
  COLORS.GREEN,
  COLORS.YELOW,
];

export const fetchKeywordsNetwork = (): IKeywordsParsed => {
  const data = API_SERVICE.post(URLS.KEYWORDS);
  console.log("data", data);

  const convertedData = mockData.data.map(
    (item: IKeywordNetwork, index: number): IKeyword => ({
      id: `${item.id}`,
      keyword: item.keyword,
      suggestionsCount:
        typeof item.suggestions_count === "number"
          ? Number(item.suggestions_count)
          : null,
      trafficScore: item.users_per_day,
      position: `${item.position_info.position}`,
      delta: item.position_info.change ? `${item.position_info.change}` : "",
      color: COLORS_LIST[Number(item.color)],
      totalApps: item.users_per_day,
      checked: index === 0,
    })
  );

  const savedData = convertedData.reduce(
    (acc: IKeywordsParsed, item) => {
      const newAcc = {
        keywordsInfo: {
          ...acc.keywordsInfo,
          [item.id]: item,
        },
        keywordsList: [...acc.keywordsList, item.id],
        checkedKeywords: item.checked
          ? [...acc.checkedKeywords, item.id]
          : acc.checkedKeywords,
      };
      return newAcc;
    },
    {
      keywordsInfo: {},
      keywordsList: [],
      checkedKeywords: [],
    }
  );
  return savedData;
};
