import React from "react";
import { Route, Switch } from "react-router-dom";
import Testing from "./testing";
import Dashboard from "./dashboard";
import Users from "./users";
import UserForm from "./userForm";

export default function router() {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/home" component={Dashboard} />
        <Route path="/test" component={Testing} />
        <Route path={"/users/:name" || "/users/new/"} component={UserForm} />
        <Route path="/users" component={Users} />
      </Switch>
    </React.Fragment>
  );
}
