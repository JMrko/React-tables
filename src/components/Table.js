import React, { useMemo, useState, useEffect } from "react";
import { useTable, usePagination, useFilters, useExpanded, useGroupBy, useSortBy} from "react-table";
import { COLUMN_GROUP2 } from "./columns";
import "./style.css";
import { Checkbox } from "./Checkbox";
import { ColumnFilter } from "./ColumnFilter";
import { FetchData, abortFetching } from "../helper/Helper";


export const Table = () => {
  const columns = useMemo(() => COLUMN_GROUP2, []);
  const [data, setdata] = useState([])
  
  const cargarData = ()=>{
    FetchData('https://pre-back.leadsmartview.com/mostrar/controlArchivos')
    .then(data =>{
      setdata(data.datos);
    })
    .then(console.log(`Fetch complete. (Not aborted)`))
    .catch(e=>console.log(e.message))
    setAllFilters([])
  }
  
  useEffect(() => {
    cargarData();
  }, [])


  const defaultColumn = React.useMemo(
    () => ({
      Filter: ColumnFilter,
    }),
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canPreviousPage,
    canNextPage,
    pageOptions,
    state,
    gotoPage,
    pageCount,
    setPageSize,
    prepareRow,
    allColumns,
    setAllFilters,
    getToggleHideAllColumnsProps,
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 },
      defaultColumn,
    },
    useFilters,
    useGroupBy,
    useSortBy,
    useExpanded,
    usePagination
  );
  const { pageIndex, pageSize } = state;

  return (
    <>
    <div className='buttons'>
          <button onClick={ cargarData }>
             RECARGAR DATOS
          </button>
          {/* <button onClick={() =>setAllFilters([])}>
            SET FILTER
          </button> */}
          <button onClick={abortFetching}>
             CANCELAR CARGA DE DATOS
          </button>
      </div>
      <div className="box_hiding">
        <div>
          <Checkbox {...getToggleHideAllColumnsProps()} /> Toggle All
        </div>
        {allColumns.map((column) => (
          <div key={column.id}>
            <label>
              <input type="checkbox" {...column.getToggleHiddenProps()} />{" "}
              {column.Header}
            </label>
          </div>
        ))}
        <br />
      </div>
      <div className="box_table">
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
                    {column.canGroupBy ? (
                      <span {...column.getGroupByToggleProps()}>
                        {column.isGrouped ? "🛑 " : "👊 "}
                      </span>
                    ) : null}
                    {column.render("Header")}
                    <span {...column.getHeaderProps(column.getSortByToggleProps())}> 
                    {column.isSorted
                      ? column.isSortedDesc
                        ? ' 🔽'
                        : ' 🔼'
                      : '  ➖'}
                    </span>
                    <div className="fields_filter">
                      {column.canFilter ? column.render("Filter") : null}
                    </div>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td
                        {...cell.getCellProps()}
                        style={{
                          background: cell.isGrouped
                            ? "#0aff0082"
                            : cell.isAggregated
                            ? "#ffa50078"
                            : cell.isPlaceholder
                            ? "#ff000042"
                            : "white",
                        }}
                      >
                        {cell.isGrouped ? (
                          // If it's a grouped cell, add an expander and row count
                          <>
                            <span {...row.getToggleRowExpandedProps()}>
                              {row.isExpanded ? "👇" : "👉"}
                            </span>{" "}
                            {cell.render("Cell")} ({row.subRows.length})
                          </>
                        ) : cell.isAggregated ? (
                          // If the cell is aggregated, use the Aggregated
                          // renderer for cell
                          cell.render("Aggregated")
                        ) : cell.isPlaceholder ? null : ( // For cells with repeated values, render null
                          // Otherwise, just render the regular cell
                          cell.render("Cell")
                        )}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="pagination">
          <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
            {"<<"}
          </button>{" "}
          <button onClick={() => previousPage()} disabled={!canPreviousPage}>
            Previous
          </button>{" "}
          <button onClick={() => nextPage()} disabled={!canNextPage}>
            Next
          </button>{" "}
          <button
            onClick={() => gotoPage(pageCount - 1)}
            disabled={!canNextPage}
          >
            {">>"}
          </button>{" "}
          <span>
            Page{" "}
            <strong>
              {pageIndex + 1} of {pageOptions.length}
            </strong>{" "}
          </span>
          <span>
            | Go to page:{" "}
            <input
              type="number"
              defaultValue={pageIndex + 1}
              onChange={(e) => {
                const pageNumber = e.target.value
                  ? Number(e.target.value) - 1
                  : 0;
                gotoPage(pageNumber);
              }}
              style={{ width: "50px" }}
            />
          </span>{" "}
          <select
            value={pageSize}
            onChange={(e) => setPageSize(Number(e.target.value))}
          >
            {[10, 25, 50].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                Show {pageSize}
              </option>
            ))}
          </select>
        </div>
      </div>
      
    </>
  );
};
