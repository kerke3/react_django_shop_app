import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
class SideMenu extends Component {
  render() {
    return (
      <ul className="sidebar navbar-nav">
        <li className="nav-item active">
          <Link to="home" className="nav-link" href="index.html">
            <i className="fas fa-fw fa-users" />
            <span> Home</span>
          </Link>
        </li>
      </ul>
    );
  }
}
export default SideMenu;
