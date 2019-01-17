import React, { Component } from "react";
import _ from "lodash";

class Table extends Component {
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
              <tbody>
                {data.map(item => (
                  <tr>
                    {columns.map(column => (
                      <td>{_.get(item, column.label.toLowerCase())}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Table;
