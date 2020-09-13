import React from "react";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";
import PropTypes from "prop-types";

const Table = ({ columns, sortColumn, onSort, data }) => {
  return (
    <table className="table" style={{ width: '80vw', tableLayout: 'fixed' }}>
      <TableHeader columns={columns} sortColumn={sortColumn} onSort={onSort} />
      <TableBody data={data} columns={columns} /> 
    </table>
  );
};

export default Table;

Table.propTypes = {
  columns: PropTypes.array.isRequired, // array of column objects
  sortColumn: PropTypes.object.isRequired, // column object (keys: path, order)
  onSort: PropTypes.func.isRequired, // callback function that handles sorting
  data: PropTypes.array.isRequired, // array of objects to match into columns
};