import { useState } from "react";
import Cookies from "js-cookie";
import "./login.css";
import { useNavigate } from "react-router-dom";

interface loginProps {
  LoginText: string;
}

const Login = (prop: loginProps) => {
  const [LoginText, setLoginText] = useState(prop.LoginText);
  const navi = useNavigate();
  const handleLogin = () => {
    setLoginText("Wait a second...");
    const tokenExist = Cookies.get('token') !== undefined ? true : false;
    if (!tokenExist)
      window.location.href = process.env.REACT_APP_LOGIN_URL || "";
    else
      navi("/main");
  };

  return (
    <div className="login-container">
      <div className="logo">
        <h2>42Vote</h2>
      </div>
      <div className="oauth-container">
        <button
          disabled={LoginText === "Wait a second..."}
          className="oauth-btn"
          onClick={handleLogin}
        >
          {LoginText}
        </button>
      </div>
    </div>
  );
};

export default Login;
