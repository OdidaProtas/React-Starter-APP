import React, { useContext, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from "react-router-dom";
import Dashboard from "../components/Dashboard";
import Login from "../components/Login";
import { useAxios } from "../constants";
import { StateContext } from "../state";
import ProtectedRoute from "./ProtectedRoute";

export default function AppNavigation() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>

        <Route path="**">Resource not found</Route>
      </Switch>
    </Router>
  );
}
