import { useNavigate } from "react-router-dom";
import { genToken } from "./util/genToken";
import { useEffect } from "react";
import LoadingModal from "./components/LoadingModal";
import { tokenExist } from "./util/tokenExist";
import { tokens } from "./types";

interface AuthProps {
  locationSearch: string;
}

const Auth = ({ locationSearch }: AuthProps) => {
  const query = new URLSearchParams(locationSearch);
  const code = query.get("code");
  const navi = useNavigate();

  useEffect(() => {
    if (code && !tokenExist())
      genToken(code).then((response: tokens | void) => {
        if (response && response.access_token)
          setTimeout(() => {
            navi("/main");
          }, 200);
      });
  }, [code, navi]);

  return <LoadingModal />;
};

export default Auth;
