import React, { Component } from "react";
import _ from "lodash";
import TableBody from "./common/tableBody";
import { Link } from "react-router-dom";

class NewTable extends Component {
  render() {
    const { columns, title, data } = this.props;
    return (
      <div className="card mb-3">
        <div className="card-header">
          <div className="row no-gutters">
            <div className="col-auto mr-auto">
              <i className="fas fa-table m-2" />
              {title}
            </div>
            <div className="col-auto">
              <Link to="/users/new">
                <button className="btn btn-success btn-sm">Add User</button>
              </Link>
            </div>
          </div>
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

export default NewTable;
