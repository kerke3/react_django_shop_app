import React, { Component } from "react";
import Table from "./table";

class Testing extends Component {
  state = {
    columns: [
      { label: "Name" },
      { label: "Email" },
      { label: "Phone" },
      { label: "Company" }
    ],
    data: [
      { name: "Ali", email: "a@a.com", phone: 111, company: "Q" },
      { name: "Ahmed", email: "aa@a.com", phone: 222, company: "W" },
      { name: "Abbas", email: "aaa@a.com", phone: 333, company: "E" }
    ],
    mount: false
  };

  render() {
    return (
      <Table
        columns={this.state.columns}
        title="Products"
        data={this.state.data}
      />
    );
  }
}

export default Testing;
