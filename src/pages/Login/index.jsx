import React, { useEffect, useRef, useState } from "react";

import { useHistory } from "react-router-dom";

import { Button } from "../../components/atomic/Button";
import { Input } from "../../components/atomic/Input";

import style from "./index.module.scss";

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");

  const textEmail = useRef(null);

  let history = useHistory();

  const handleFormLogin = (e) => {
    e.preventDefault();
    handleLogin(email);
    history.push("/chat");
  };

  // componentDidMount
  useEffect(() => {
    document.title = "Login";
    textEmail.current.focus();
  }, []);

  return (
    <div className={`wrapper ${style.loginPage}`}>
      <h1>MiniChat</h1>

      <form onSubmit={handleFormLogin}>
        <div className="form-group">
          <label htmlFor="loginEmail">Informe seu e-mail:</label>
          <Input
            type="email"
            id="loginEmail"
            ref={textEmail}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <Button type="submit">Entrar</Button>
      </form>
    </div>
  );
};

export default Login;
