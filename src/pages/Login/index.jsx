import React, { useEffect, useRef } from "react";

import { Button } from "../../components/atomic/Button";
import { Input } from "../../components/atomic/Input";

import style from "./index.module.scss";

const Login = () => {
  const textEmail = useRef(null);

  useEffect(() => {
    // document.getElementById("loginEmail").focus();
    document.title = "Login";
    textEmail.current.focus();
  }, []);

  return (
    <div className={`wrapper ${style.loginPage}`}>
      <h1>MiniChat</h1>

      <form>
        <div className="form-group">
          <label htmlFor="loginEmail">Informe seu e-mail:</label>

          <input
            type="email"
            id="loginEmail"
            className="form-control form-control-lg"
            ref={textEmail}
          />
        </div>

        <Button type="submit">Entrar</Button>
      </form>
    </div>
  );
};

export default Login;
