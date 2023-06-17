import { Navigate, Outlet } from "react-router-dom";
import { tokenExist } from "../util/tokenExist";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import FixedTop from "../../Etc/FixedTop";
import { useEffect, useState } from "react";
import { customAxios } from "../../Lib/customAxios";
import Cookies from "js-cookie";
import { onRefreshToken } from "../apis/authApi";

interface ProtectRouteProps {
  pathname: string;
}

const ProtectRoute = (props: ProtectRouteProps): React.ReactElement | null => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isTokenExpired, setIsTokenExpired] = useState(false);
  const accessTokenExpirationString = Cookies.get("token_expire");
  const accessTokenExpiration = accessTokenExpirationString ? parseInt(accessTokenExpirationString) : 42424242;

  let accessTokenTimer: NodeJS.Timeout;

  const startTokenExpirationTimer = () => {
    accessTokenTimer = setTimeout(() => {
      setIsTokenExpired(true);
    }, accessTokenExpiration - 10000)
  }

  const handleTokenRefresh = async () => {
    clearTimeout(accessTokenTimer);
    onRefreshToken();
    setIsTokenExpired(false);
    startTokenExpirationTimer();
  }

  useEffect(() => {
    startTokenExpirationTimer();

    return () => {
      clearTimeout(accessTokenTimer);
    }
  }, [accessTokenExpiration])

  useEffect(()=>{
    if (isTokenExpired)
      handleTokenRefresh()
  }, [isTokenExpired])

  if (!tokenExist()) {
    alert("다시 로그인 해주세요.");
    return <Navigate to="/" />;
  }

  customAxios().get('/user/me').then((res) => {
    setIsAdmin(res.data.isAdmin);
  });

  return (
    <>
      <TransitionGroup>
        <CSSTransition key={props.pathname} classNames="fade" timeout={600}>
          <Outlet />
        </CSSTransition>
      </TransitionGroup>
      <FixedTop isAdmin={isAdmin} />
    </>
  );
};

export default ProtectRoute;
