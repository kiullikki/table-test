import React from "react";
import { Route, Switch } from "react-router";
import { ROUTES_PATHES } from "./constants";
import { HomePage, StatsPage } from "./screens";

export const Routes = (
  <Switch>
    <Route exact path={ROUTES_PATHES.HOME} component={HomePage} />
    <Route exact path={ROUTES_PATHES.STATS} component={StatsPage} />
  </Switch>
);
