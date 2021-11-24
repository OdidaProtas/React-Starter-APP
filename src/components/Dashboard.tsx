import React from "react";
import { Route, Switch, useParams, useRouteMatch } from "react-router-dom";
import DataTable from "./DataTable";
import Drawer from "./Drawer";
import Filters from "./Filters";
import Home from "./Home";

export default function Dashboard() {
  const { path } = useRouteMatch();
  const { id }: any = useParams();
  return (
    <div>
      <Drawer>
        <Switch>
          <Route exact path={`${path}`}>
            <Home />
          </Route>
          <Route exact path={`${path}/:id`}>
            <Filters />
            <DataTable />
          </Route>
        </Switch>
      </Drawer>
    </div>
  );
}
