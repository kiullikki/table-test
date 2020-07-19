export enum COLUMNS_TYPES {
  CONTROL_SELECT = "CONTROL_SELECT",
  KEYWORD = "KEYWORD",
  EXPLORE = "EXPLORE",
  SHOW = "SHOW",
  TRAFFIC_SCORE = "TRAFFIC_SCORE",
  RANK = "RANK",
  TOTAL_APPS = "TOTAL_APPS",
  COLOR = "COLOR",
  DELETE = "DELETE",
}

export type IRowData = {
  [key: string]: string;
};

export const COLUMNS = [
  COLUMNS_TYPES.CONTROL_SELECT,
  COLUMNS_TYPES.KEYWORD,
  COLUMNS_TYPES.EXPLORE,
  COLUMNS_TYPES.SHOW,
  COLUMNS_TYPES.TRAFFIC_SCORE,
  COLUMNS_TYPES.RANK,
  COLUMNS_TYPES.TOTAL_APPS,
  COLUMNS_TYPES.COLOR,
  COLUMNS_TYPES.DELETE,
];

export enum TYPE_NODE {
  CHECKBOX = "checkbox",
  DELETE_BUTTON = "delete",
  COLOR = "color",
  EXPLORE_BUTTON = "explore",
  SHOW_BUTTON = "show",
  STRING = "text",
  KEYWORD = "keyword",
  RANK = "rank",
}

export const COLUMNS_WITHOUT_TITLE = new Set([
  COLUMNS_TYPES.CONTROL_SELECT,
  COLUMNS_TYPES.EXPLORE,
  COLUMNS_TYPES.SHOW,
  COLUMNS_TYPES.DELETE,
]);

export const DICTIONARY = {
  [COLUMNS_TYPES.CONTROL_SELECT]: "",
  [COLUMNS_TYPES.EXPLORE]: "",
  [COLUMNS_TYPES.SHOW]: "",
  [COLUMNS_TYPES.DELETE]: "",
  [COLUMNS_TYPES.KEYWORD]: "Keyword",
  [COLUMNS_TYPES.TRAFFIC_SCORE]: "Traffic Score",
  [COLUMNS_TYPES.RANK]: "Rank",
  [COLUMNS_TYPES.TOTAL_APPS]: "Total Apps",
  [COLUMNS_TYPES.COLOR]: "Color",
};
