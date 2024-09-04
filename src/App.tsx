import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { LoggedOutRouter } from "./routers/logged-out-router";
import { useReactiveVar } from "@apollo/client";
import { isLoggedInVar } from "./apollo";
import { LoggedInRouter } from "./routers/logged-in-router";

function App() {
  const isLoggedIn = useReactiveVar(isLoggedInVar);
  return isLoggedIn ? <LoggedInRouter /> : <LoggedOutRouter />;
}

export default App;
