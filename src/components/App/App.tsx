import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";

import RegionsTable from "../RegionsTable/RegionsTable";
import Library from "../Library/Library";

const App = () => {
  return (
    <div className="main">
      <Switch>
        <Route exact path="/">
          <RegionsTable />
        </Route>
        <Route path="/lib/:id">
          <Library />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
