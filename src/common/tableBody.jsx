import React, { Component } from "react";
import _ from "lodash";

class TableBody extends Component {
  renderCell = (item, column) => {
    if (column.content) return column.content(item);
    // using lodash as nested properties cannot be used with bracket notation
    // gets the value at column.path
    return _.get(item, column.path);
  };

  createKey = (item, column) => {
    return item._id + (column.path || column.key); // returns either the key or path, depending on whether its a simple text item, or a component
  };

  render() {
    const { data, columns } = this.props;
    return (
      <tbody>
        {data.map((
          item // for each of the items within the data object
        ) => (
          <tr key={item._id}>
            {/*...create a row with a key of the id of the item */}
            {columns.map((
              column // within each row, for each column
            ) => (
              <td // ...create a cell
                key={this.createKey(item, column)} // ...with a key made from the item and column ids
                style={{ textAlign: "center" }} // ...with centred text
              >
                {this.renderCell(item, column)}{" "}
                {/*...that displays text matched in renderCell*/}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  }
}

export default TableBody;
