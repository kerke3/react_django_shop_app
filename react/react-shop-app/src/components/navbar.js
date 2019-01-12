import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand navbar-dark bg-dark static-top">
        <Link to="/home" className="navbar-brand mr-1" href="index.html">
          Shopify
        </Link>
        <form className="d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-3 my-2 my-md-0">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Search for..."
              aria-label="Search"
              aria-describedby="basic-addon2"
            />
            <div className="input-group-append">
              <button className="btn btn-primary" type="button">
                <i className="fas fa-search" />
              </button>
            </div>
          </div>
        </form>
        
      </nav>
    );
  }
}
export default Navbar;
