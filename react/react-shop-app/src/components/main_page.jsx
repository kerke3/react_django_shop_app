import React, { Component } from "react";
import SideMenu from "./sidemenu";
import Navbar from "./navbar";
import routes from "./router";
class MainPage extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div id="wrapper">
          <SideMenu />
          <div id="content-wrapper">{routes()}</div>
        </div>
        <a className="scroll-to-top rounded" href="#page-top">
          <i className="fas fa-angle-up" />
        </a>
      </div>
    );
  }
}

export default MainPage;
