import React, { Component } from "react";
import _ from "lodash";

class TableBody extends Component {
  renderCell = (item, column) => {
    if (column.content) return column.content(item);
    console.log(column.content);
    return _.get(item, column.label.toLowerCase());
  };

  createKey = (item, column) => {
    return item.name + column.label;
  };

  render() {
    const { data, columns } = this.props;
    return (
      <tbody>
        {data.map(item => (
          <tr key={item.name}>
            {columns.map(column => (
              <td key={this.createKey(item, column)}>
                {this.renderCell(item, column)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  }
}

export default TableBody;
