import { useState } from "react";
import "./login.css";
import { useTokenExist } from "./customHook/useTokenCheck";

interface loginProps {
  LoginText: string;
}

const Login = (prop: loginProps) => {
  const [LoginText, setLoginText] = useState(prop.LoginText);
  const tokenExist = useTokenExist();
  const navi = useNavigate();
  const handleLogin = () => {
    setLoginText("Wait a second...");
    if (tokenExist) navi("/main");
    else window.location.href = process.env.REACT_APP_LOGIN_URL || "";
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
