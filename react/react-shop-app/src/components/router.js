import React from "react";
import { Route } from "react-router-dom";
import Testing from "./testing";
import Dashboard from "./dashboard";

export default function router() {
  return (
    <React.Fragment>
      <Route path="/home" component={Dashboard} />
      <Route path="/test" component={Testing} />
    </React.Fragment>
  );
}
