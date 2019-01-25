import React, { Component } from "react";
import _ from "lodash";
import TableBody from "./tableBody";

class Table extends Component {
  renderCell = (item, column) => {
    if (column.content) return column.content(item);
    console.log(column.content);
    return _.get(item, column.label.toLowerCase());
  };

  render() {
    const { columns, title, data } = this.props;
    return (
      <div className="card mb-3">
        <div className="card-header">
          <i className="fas fa-table" />

          {title}
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table
              className="table table-bordered"
              id="dataTable"
              width="100%"
              cellSpacing={0}
            >
              <thead>
                <tr>
                  {columns.map(column => (
                    <th>{column.label}</th>
                  ))}
                </tr>
              </thead>
              <tfoot>
                <tr>
                  {columns.map(column => (
                    <th>{column.label}</th>
                  ))}
                </tr>
              </tfoot>
              <TableBody data={data} columns={columns} />
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Table;
