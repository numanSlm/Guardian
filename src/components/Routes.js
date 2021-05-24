import React from "react";
import { Route, Switch } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import TablesPage from "./pages/TablesPage";

const Routes = ({ signOut }) => {
  return (
    <Switch>
      <Route path="/" exact component={DashboardPage} signOut={signOut} />
      <Route path="/dashboard" component={DashboardPage} signOut={signOut} />
      <Route path="/tables" component={TablesPage} />
    </Switch>
  );
};

export default Routes;
