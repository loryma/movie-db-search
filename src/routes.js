import React from "react";
import { Switch, Route } from "react-router-dom";
import Search from "scenes/search";
import Movie from "scenes/movie";

const routes = (
  <Switch>
    <Route path="/movies/:id">
      <Movie />
    </Route>
    <Route path="/">
      <Search />
    </Route>
  </Switch>
);

export default routes;
