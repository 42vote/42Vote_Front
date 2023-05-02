import { useLocation, useNavigate } from "react-router-dom";
import { genToken } from "./util/genToken";
import { useEffect } from "react";
import Login from "../login";
import { useTokenExist } from "../customHook/useTokenCheck";

const Auth = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const code = query.get("code");
  const tokenExist = useTokenExist();
  const navi = useNavigate();

  useEffect(() => {
    if (code && !tokenExist) genToken(code).then(() => navi("/main"));
  }, [code, tokenExist, navi]);

  return <Login LoginText="Wait a second..." />;
};

export default Auth;
