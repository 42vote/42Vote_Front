import { useNavigate } from "react-router-dom";
import { genToken } from "./util/genToken";
import { useEffect } from "react";
import LoadingModal from "./components/LoadingModal";
import { tokenExist } from "./util/tokenExist";
import { tokens } from "./types";
import { useResponsive } from "../Main/customHooks/useResponsive";
import { setRootFontSize } from "../Lib/setRootFontSize";

interface AuthProps {
  locationSearch: string;
}

const Auth = ({ locationSearch }: AuthProps) => {
  const query = new URLSearchParams(locationSearch);
  const code = query.get("code");
  const navi = useNavigate();
  const responsiveVar = useResponsive();
  useEffect(() => {
    if (responsiveVar.isMobile) setRootFontSize(15);
    if (responsiveVar.isDesktop && !responsiveVar.isScreen) setRootFontSize(14);
    if (responsiveVar.isSmallScreen) setRootFontSize(20);
    if (responsiveVar.isMediumScreen) setRootFontSize(28);
    if (responsiveVar.isBigScreen) setRootFontSize(33);
  }, [responsiveVar]);

  useEffect(() => {
    if (code && !tokenExist())
      genToken(code).then((response: tokens | void) => {
        setTimeout(() => {
          navi("/main");
        }, 100);
      });
    if (tokenExist()) navi("/main");
  }, [code, navi]);

  return <LoadingModal />;
};

export default Auth;
