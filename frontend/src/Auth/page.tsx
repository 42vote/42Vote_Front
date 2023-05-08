import { useNavigate } from "react-router-dom";
import { genToken } from "./util/genToken";
import { useEffect } from "react";
import Login from "../Login/login";
import Cookies from "js-cookie";

interface AuthProps {
  locationSearch: string,
}

const Auth = ({locationSearch}:AuthProps) => {
  const query = new URLSearchParams(locationSearch);
  const code = query.get("code");
  const tokenExist = Cookies.get('token') !== undefined ? true : false;
  const navi = useNavigate();

  useEffect(() => {
    if (code && !tokenExist) genToken(code).then(() => navi("/main"));
  }, [code, tokenExist, navi]);

  return <Login LoginText="Wait a second..." />;
};

export default Auth;
