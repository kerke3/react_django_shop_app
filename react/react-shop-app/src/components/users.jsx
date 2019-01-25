import React, { Component } from "react";
import { Link } from "react-router-dom";
import NewTable from "./newTable";

class Users extends Component {
  state = {
    columns: [
      { label: "Name" },
      { label: "Email" },
      { label: "Phone" },
      { label: "Company" },
      { label: "" }
    ],
    data: [
      {
        name: "Mon3im",
        email: "m@shopify.com",
        phone: 111,
        company: "Shopify",
        content: name => (
          <div className="text-center">
            <Link to={`/users/${name}`}>
              <button className="btn btn-info btn-lg ">
                <i class="fa fa-cog" aria-hidden="true" />
              </button>
            </Link>
          </div>
        )
      },
      {
        name: "Osama",
        email: "o@shopify.com",
        phone: 222,
        company: "Shopify",
        content: name => (
          <div className="text-center">
            <Link to={`/users/${name}`}>
              <button className="btn btn-info btn-lg">
                <i class="fa fa-cog" aria-hidden="true" />
              </button>
            </Link>
          </div>
        )
      },
      {
        name: "AL",
        email: "al@shopify.com",
        phone: 333,
        company: "Shopify",
        content: name => (
          <div className="text-center">
            <Link to={`/users/${name}`}>
              <button className="btn btn-info btn-lg">
                <i class="fa fa-cog" aria-hidden="true" />
              </button>
            </Link>
          </div>
        )
      },
      {
        name: "Fat7i",
        email: "f@shopify.com",
        phone: 444,
        company: "Shopify",
        content: name => (
          <div className="text-center">
            <Link to={`/users/${name}`}>
              <button className="btn btn-info btn-lg">
                <i class="fa fa-cog" aria-hidden="true" />
              </button>
            </Link>
          </div>
        )
      },
      {
        name: "Yassir",
        email: "y@shpify.com",
        phone: 555,
        company: "Shopify",
        content: name => (
          <div className="text-center">
            <Link to={`/users/${name}`}>
              <button className="btn btn-info btn-lg">
                <i class="fa fa-cog" aria-hidden="true" />
              </button>
            </Link>
          </div>
        )
      }
    ],
    mount: false
  };

  render() {
    return (
      <NewTable
        columns={this.state.columns}
        title="Users"
        data={this.state.data}
      />
    );
  }
}

export default Users;
