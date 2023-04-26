import React from "react";
import { useState } from "react";
import "./login.css";

interface loginProps {
  LoginText: string,
}

const Login = (prop:loginProps) => {
  const [LoginText, setLoginText] = useState(prop.LoginText);
  const handleLogin = () => {
    setLoginText("Wait a second...");
    window.location.href = (process.env.REACT_APP_LOGIN_URL || "");
  };

  return (
    <div className="login-container">
      <div className="logo">
        <h2>42Vote</h2>
      </div>
      <div className="oauth-container">
        <button disabled={LoginText === "Wait a second..."} className="oauth-btn" onClick={handleLogin}>
          {LoginText}
        </button>
      </div>
    </div>
  );
};

export default Login;
