import React, { useState } from "react";

import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import Login from "./pages/Login";
import Chat from "./pages/Chat";

const App = () => {
  let [email, setEmail] = useState("");

  const handleEmail = (localEmail) => {
    setEmail(localEmail);
  }

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Login handleEmail={handleEmail} />
        </Route>

        <PrivateRoute email={email} path="/chat">
          <Chat email={email} handleEmail={handleEmail} />
        </PrivateRoute>
      </Switch>
    </Router>
  );
};

export default App;

function PrivateRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        rest.email !== "" ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}