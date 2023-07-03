import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { tokenExist } from "../Auth/util/tokenExist";
import { AbsolutedDiv } from "../Main/styles/styleComponents";
import "./login.css";
// import ScramblerComponent from "../Mypage/effects/Scrambler";
import { setRootFontSize } from "../Lib/setRootFontSize";
import { useResponsive } from "../Main/customHooks/useResponsive";

interface loginProps {
  LoginText: string;
}

const Login = (prop: loginProps) => {
  const [LoginText, setLoginText] = useState(prop.LoginText);
  const responsiveVar = useResponsive();
  const navi = useNavigate();
  const handleLogin = () => {
    setLoginText("Wait a second...");
    if (!tokenExist())
      window.location.href = process.env.REACT_APP_LOGIN_URL || "";
    else navi("/main");
  };

  useEffect(() => {
    if (responsiveVar.isMobile) setRootFontSize(15);
    if (responsiveVar.isDesktop && !responsiveVar.isScreen) setRootFontSize(14);
    if (responsiveVar.isSmallScreen) setRootFontSize(20);
    if (responsiveVar.isMediumScreen) setRootFontSize(28);
    if (responsiveVar.isBigScreen) setRootFontSize(33);
  }, [responsiveVar]);

  return (
    <AbsolutedDiv>
      <div className="login-container">
        <div className="logo">
          <h2>
            42Vote
          </h2>
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
