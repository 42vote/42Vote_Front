import { useLocation, useNavigate } from "react-router-dom";
import { genToken } from "./util/genToken";
import { useEffect } from "react";
import Login from "../Login/login";
import Cookies from "js-cookie";

const Auth = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const code = query.get("code");
  const tokenExist = Cookies.get('token') !== undefined ? true : false;
  const navi = useNavigate();

  useEffect(() => {
    if (code && !tokenExist) genToken(code).then(() => navi("/main"));
  }, [code, tokenExist, navi]);

  return <Login LoginText="Wait a second..." />;
};

export default Auth;
