import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default function router() {
  return (
    <React.Fragment>
    <Route
      path="/home"
      component={() => {
        return <h1>home</h1>;
      }}
    />
    <Route
      path=""
      component={() => {
        return <h1>home</h1>;
      }}
    />
    </React.Fragment>
  );
}
