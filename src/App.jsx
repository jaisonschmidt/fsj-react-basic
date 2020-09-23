import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "./pages/Login";
import Chat from "./pages/Chat";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>

        <Route path="/login">
          <Login />
        </Route>

        <Route path="/chat">
          <Chat />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
