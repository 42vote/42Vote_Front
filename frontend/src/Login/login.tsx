import React from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

const Login = () => {
  const navi = useNavigate();
  const handleLogin = () => {
    navi("/main");
    // Implement your OAuth login logic here
  };

  return (
    <div className="login-container">
      <div className="logo">
        <h2>Login Page</h2>
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
