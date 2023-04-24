import React from "react";
import "./login.css";

const Login = () => {
  const handleLogin = () => {
    window.location.href = (process.env.REACT_APP_LOGIN_URL || "");
  };

  return (
    <div className="login-container">
      <div className="logo">
        <h2>42Vote</h2>
      </div>
      <div className="oauth-container">
        <button className="oauth-btn" onClick={handleLogin}>
          Login with OAuth
        </button>
      </div>
    </div>
  );
};

export default Login;
