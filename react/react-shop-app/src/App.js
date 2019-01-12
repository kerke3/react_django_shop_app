import React, { Component } from "react";
import MainPage from "./components/main_page";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/" component={MainPage} />
      </Router>
    );
  }
}
