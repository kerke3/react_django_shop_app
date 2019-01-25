import React, { Component } from "react";
import { Link } from "react-router-dom";
import Table from "./common/table";

class Users extends Component {
  state = {
    columns: [
      { label: "Name" },
      { label: "Email" },
      { label: "Phone" },
      { label: "Company" },
      {
        label: "",
        content: user => (
          <div className="text-center">
            <Link to={`/users/${user.name}`}>
              <button className="btn btn-info btn-lg ">
                <i class="fa fa-cog" aria-hidden="true" />
              </button>
            </Link>
          </div>
        )
      }
    ],
    data: [
      {
        name: "Mon3im",
        email: "m@shopify.com",
        phone: 111,
        company: "Shopify"
      },
      {
        name: "Osama",
        email: "o@shopify.com",
        phone: 222,
        company: "Shopify"
      },
      {
        name: "AL",
        email: "al@shopify.com",
        phone: 333,
        company: "Shopify"
      },
      {
        name: "Fat7i",
        email: "f@shopify.com",
        phone: 444,
        company: "Shopify"
      },
      {
        name: "Yassir",
        email: "y@shpify.com",
        phone: 555,
        company: "Shopify"
      }
    ],
    mount: false
  };

  render() {
    return (
      <div>
        <Link to="/users/new">
          <button className="btn btn-success btn-sm">Add User</button>
        </Link>
        <Table
          columns={this.state.columns}
          title="Users"
          data={this.state.data}
        />
      </div>
    );
  }
}

export default Users;
