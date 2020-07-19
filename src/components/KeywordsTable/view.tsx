import React, { ReactElement } from "react";
import { HeaderGroup, Row, CellValue } from "react-table";
import "./style.scss";
import { TYPE_NODE } from "./constants";
import { Checkbox } from "../Checkbox";
import { ExploreButton } from "../ExploreButton";
import { ShowButton } from "../ShowButton";
import { DeleteButton } from "../DeleteButton";

interface IProps {
  getTableProps: (props?: any) => void;
  getTableBodyProps: (props?: any) => void;
  headerGroups: HeaderGroup[];
  rows: Row[];
  prepareRow: (props: Row) => void;
}

const getCell = (cell: CellValue): ReactElement => {
  switch (cell.type) {
    case TYPE_NODE.CHECKBOX:
      return <Checkbox id={String(cell.content)} />;

    case TYPE_NODE.EXPLORE_BUTTON:
      return <ExploreButton keyword={String(cell.content)} />;
    case TYPE_NODE.SHOW_BUTTON:
      return <ShowButton id={cell.id} count={cell.content} />;
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

export const KeywordsTableView = (props: IProps) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = props;

  return (
    <table {...getTableProps()} className="table">
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()} className="table__header">
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render("Header")}</th>
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
                    {getCell(cell.value)}
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
