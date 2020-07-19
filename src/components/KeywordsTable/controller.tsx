import React, { useCallback, useMemo } from "react";
import { useSelector } from "react-redux";
import { useTable } from "react-table";

import { selectKeywordInfo } from "../../store";
import {
  COLUMNS,
  DICTIONARY,
  COLUMNS_TYPES,
  COLUMNS_WITHOUT_TITLE,
  IRowData,
  TYPE_NODE,
} from "./constants";
import { KeywordsTableView } from "./view";

import "./style.scss";

interface IProps {
  keywordsList: string[];
}

export const KeywordsTableController = (props: IProps) => {
  const { keywordsList } = props;

  const columns = React.useMemo(
    () =>
      COLUMNS.map((columnName: COLUMNS_TYPES) => ({
        Header: COLUMNS_WITHOUT_TITLE.has(columnName)
          ? ""
          : DICTIONARY[columnName],
        accessor: String(columnName),
      })),
    []
  );

  const allKeywords = useSelector(selectKeywordInfo);

  const newWord = useCallback(
    (id: string) => {
      const currentKeyword = allKeywords[id];
      return {
        [COLUMNS_TYPES.CONTROL_SELECT]: {
          type: TYPE_NODE.CHECKBOX,
          content: currentKeyword.id,
        },
        [COLUMNS_TYPES.KEYWORD]: {
          type: TYPE_NODE.KEYWORD,
          content: currentKeyword.keyword,
        },
        [COLUMNS_TYPES.EXPLORE]: {
          type: TYPE_NODE.EXPLORE_BUTTON,
          content: currentKeyword.keyword,
        },
        [COLUMNS_TYPES.SHOW]: {
          type: TYPE_NODE.SHOW_BUTTON,
          content: currentKeyword.suggestionsCount,
          id: currentKeyword.id,
        },
        [COLUMNS_TYPES.TRAFFIC_SCORE]: {
          type: TYPE_NODE.STRING,
          content: currentKeyword.trafficScore,
        },
        [COLUMNS_TYPES.RANK]: {
          type: TYPE_NODE.RANK,
          content: currentKeyword.position,
          delta: currentKeyword.delta,
        },
        [COLUMNS_TYPES.TOTAL_APPS]: {
          type: TYPE_NODE.STRING,
          content: currentKeyword.totalApps,
        },
        [COLUMNS_TYPES.COLOR]: {
          type: TYPE_NODE.COLOR,
          content: currentKeyword.color,
        },
        [COLUMNS_TYPES.DELETE]: {
          type: TYPE_NODE.DELETE_BUTTON,
          content: currentKeyword.id,
        },
      };
    },
    [allKeywords]
  );

  const makeData = useCallback(
    (keywordsList): IRowData[] => keywordsList.map((id: string) => newWord(id)),
    [newWord]
  );

  const data = useMemo(() => makeData(keywordsList), [makeData, keywordsList]);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
  });

  return (
    <KeywordsTableView
      getTableProps={getTableProps}
      getTableBodyProps={getTableBodyProps}
      headerGroups={headerGroups}
      rows={rows}
      prepareRow={prepareRow}
    />
  );
};
