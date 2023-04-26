import { useLocation, useNavigate } from "react-router-dom";
import { genToken } from "./util/genToken";
import { useEffect } from "react";
import Login from "../login";

const Auth = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const code = query.get("code");
  let token = localStorage.getItem("token");
  const navi = useNavigate();

  useEffect(() => {
    if (code && (token === "undefined" || !token)) genToken(code).then(()=>navi("/main"));
  }, [code, token, navi]);

  return <Login LoginText="Wait a second..." />;
};

export default Auth;
