import React from "react";

import { isLoggedInVar } from "../apollo";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { Restaurants } from "../pages/client/restaurants";
import { Header } from "../components/header";
import { useMe } from "../hooks/useMe";

const ClientRoutes = [
  <Route path="/" exact>
    <Restaurants />
  </Route>,
];

export const LoggedInRouter = () => {
  const { data, loading, error } = useMe();
  /*if (!data || loading || error) {
    return (
      <div className="justify-center h-screen items-center flex">
        <span className="font-medium text-xl tracking-wide">Loading...</span>
      </div>
    );
  }*/
  return (
    <Router>
      <Header />
      <Switch>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};
