import { useLocation, useNavigate } from "react-router-dom";
import { genToken } from "./util/genToken";
import { useEffect } from "react";
import Login from "../login";

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
    <Login LoginText="Wait a second..."/>
  );
};

export default Auth;
