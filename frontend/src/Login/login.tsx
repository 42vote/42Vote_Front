import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { tokenExist } from "../Auth/util/tokenExist";
import "./login.css";
import { AbsolutedDiv } from "../Main/styles/styleComponents";

interface loginProps {
  LoginText: string;
}

const Login = (prop: loginProps) => {
  const [LoginText, setLoginText] = useState(prop.LoginText);
  const navi = useNavigate();
  const handleLogin = () => {
    setLoginText("Wait a second...");
    if (!tokenExist())
      window.location.href = process.env.REACT_APP_LOGIN_URL || "";
    else navi("/main");
  };

  return (
    <AbsolutedDiv>
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
    </AbsolutedDiv>
  );
};

export default Login;
