import React, { useState } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "./pages/Login";
import Chat from "./pages/Chat";

const App = () => {
  const [email, setEmail] = useState("");

  const handleLogin = function (pEmail) {
    setEmail(pEmail);
  };

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Login handleLogin={handleLogin} />
        </Route>

        <Route path="/chat">
          <Chat email={email} />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
