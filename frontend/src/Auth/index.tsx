import { useLocation, useNavigate } from "react-router-dom";
import FixedTop from "../Etc/FixedTop";
import { genToken } from "./util/genToken";
import { useEffect } from "react";

const Auth = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const code = query.get("code");
  const navi = useNavigate();

  useEffect(() => {
    if (code) {
      genToken(code);
      navi("/main");
    }
  }, []);

  return (
    <div id="desktop">
      <FixedTop />
    </div>
  );
};

export default Auth;
