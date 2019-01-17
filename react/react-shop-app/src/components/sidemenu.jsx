import React, { Component } from "react";
import { Link } from "react-router-dom";
class SideMenu extends Component {
  render() {
    return (
      <ul className="sidebar navbar-nav">
        <li className="nav-item active">
          <Link to="home" className="nav-link" href="index.html">
            <i className="fas fa-fw fa-users" />
            <span> Home</span>
          </Link>
          <Link to="test" className="nav-link" href="index.html">
            <i className="fas fa-fw fa-gear" />
            <span> Testing</span>
          </Link>
        </li>
      </ul>
    );
  }
}
export default SideMenu;
