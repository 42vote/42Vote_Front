import { useNavigate } from "react-router-dom";
import { genToken } from "./util/genToken";
import { useEffect } from "react";
import Cookies from "js-cookie";
import LoadingModal from "./components/LoadingModal";

interface AuthProps {
  locationSearch: string;
}

const Auth = ({ locationSearch }: AuthProps) => {
  const query = new URLSearchParams(locationSearch);
  const code = query.get("code");
  const tokenExist = Cookies.get("token") !== undefined ? true : false;
  const navi = useNavigate();

  useEffect(() => {
    if (code && !tokenExist) genToken(code).then(() => console.log(""));
  }, [code, tokenExist, navi]);

  return <LoadingModal />;
};

export default Auth;
