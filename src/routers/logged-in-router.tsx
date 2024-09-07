import React from "react";

import { isLoggedInVar } from "../apollo";
import { gql, useQuery } from "@apollo/client";
import { meQuery } from "../__generated__/meQuery";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { Restaurants } from "../pages/client/restaurants";
import { Header } from "../components/header";

const ClientRoutes = [
  <Route path="/" exact>
    <Restaurants />
  </Route>,
];
const ME_QUERY = gql`
  query meQuery {
    me {
      id
      email
      role
      verified
    }
  }
`;
export const LoggedInRouter = () => {
  const { data, loading, error } = useQuery<meQuery>(ME_QUERY);
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
        <Redirect from="/potato" to="/" />
      </Switch>
    </Router>
  );
};
