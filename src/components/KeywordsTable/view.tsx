import React, { ReactElement } from "react";
import { HeaderGroup, Row, CellValue, Column } from "react-table";

import { TYPE_NODE, COLUMNS_TYPES } from "./constants";
import { CheckboxItemKeyword } from "../CheckboxItemKeyword";
import { CheckboxSelectGroup } from "../CheckboxSelectGroup";
import { ExploreButton } from "../ExploreButton";
import { ShowButton } from "../ShowButton";
import { DeleteButton } from "../DeleteButton";

import "./style.scss";

interface IProps {
  getTableProps: (props?: any) => void;
  getTableBodyProps: (props?: any) => void;
  headerGroups: HeaderGroup[];
  rows: Row[];
  prepareRow: (props: Row) => void;
  openModal: (id: string) => void;
}

const getCell = (
  cell: CellValue,
  openModal: (id: string) => void
): ReactElement => {
  switch (cell.type) {
    case TYPE_NODE.CHECKBOX:
      return <CheckboxItemKeyword id={String(cell.content)} />;

    case TYPE_NODE.EXPLORE_BUTTON:
      return <ExploreButton keyword={String(cell.content)} />;
    case TYPE_NODE.SHOW_BUTTON:
      return (
        <ShowButton
          id={cell.id}
          count={cell.content}
          clickHandler={openModal}
        />
      );
    case TYPE_NODE.RANK:
      return (
        <p>
          <span>{cell.content}</span>
          {!!cell.delta && (
            <span
              className={
                Number(cell.delta) > 0
                  ? "table__plus-delta"
                  : "table__minus-delta"
              }
            >{` (${cell.delta})`}</span>
          )}
        </p>
      );

    case TYPE_NODE.COLOR:
      return <div className={`table__color table__color--${cell.content}`} />;
    case TYPE_NODE.DELETE_BUTTON:
      return <DeleteButton id={cell.content} />;
    default:
      return <span>{cell.content}</span>;
  }
};

const getHeader = (column: Column): ReactElement => {
  return column.id === COLUMNS_TYPES.CONTROL_SELECT ? (
    <CheckboxSelectGroup />
  ) : (
    <span>{column.Header}</span>
  );
};

export const KeywordsTableView = (props: IProps) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    openModal,
  } = props;

  return (
    <table {...getTableProps()} className="table">
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()} className="table__header">
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{getHeader(column)}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return (
                  <td
                    {...cell.getCellProps()}
                    className={`table__${cell.value.type}`}
                  >
                    {getCell(cell.value, openModal)}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
