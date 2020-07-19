export enum ERRORS {
  "SHOULD_BE_FILLED" = "Заполните пожалуйста это поле!",
  "SHOULD_BE_SELECTED" = "Выберете один из вариантов",
}

export const API_BASE_URL = "https://hq.asodesk.com/api/us/demo";

export const URLS = {
  KEYWORDS: "keyword-analytics/data-stats",
};

export enum ROUTES_PATHES {
  HOME = "/",
  STATS = "/stats",
  STATS_ITEM = "/stats/:keyword",
}
