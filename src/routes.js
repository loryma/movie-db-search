import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Search from "scenes/search";
import Movie from "scenes/movie";

const routes = (
  <Router>
    <Switch>
      <Route path="/movies/:id">
        <Movie />
      </Route>
      <Route path="/">
        <Search />
      </Route>
    </Switch>
  </Router>
);

export default routes;
