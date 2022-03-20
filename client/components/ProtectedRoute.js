import React from "react";
import { useQuery } from "@apollo/client";
import { FETCH_USER } from "../queries/apollloQueries";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import App from "./App";
import Dashboard from "./Dashboard";

const ProtectedRoute = () => {
  const { data } = useQuery(FETCH_USER);
  return (
    <Switch>
      {data?.user ? (
        <Route exact path="/dashboard">
          <App children={<Dashboard />}></App>
        </Route>
      ) : (
        <Redirect to="/" />
      )}
    </Switch>
  );
};

export default ProtectedRoute;