import { Navigate, Outlet } from "react-router-dom";
import { tokenExist } from "../util/tokenExist";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import FixedTop from "../../Etc/FixedTop";
import { useCallback, useEffect, useRef, useState } from "react";
import { customAxios } from "../../Lib/customAxios";
import Cookies from "js-cookie";
import { onRefreshToken } from "../apis/authApi";
import NotFound from "../../Etc/NotFound";

interface ProtectRouteProps {
  pathname: string;
}

const ProtectRoute = (props: ProtectRouteProps): React.ReactElement | null => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isTokenExpired, setIsTokenExpired] = useState(false);
  const accessTokenExpirationString = Cookies.get("token_expire");
  const currentTime = new Date().getTime();
  let accessTokenExpiration = accessTokenExpirationString
    ? parseInt(accessTokenExpirationString)
    : currentTime + 100000;
  const accessTokenExpirationRef = useRef(accessTokenExpiration);

  let accessTokenTimer: NodeJS.Timeout = setTimeout(() => {}, 42424242442);
  const accessTokenTimerRef = useRef<NodeJS.Timeout>(accessTokenTimer);

  const startTokenExpirationTimer = useCallback(() => {
    const timeGap = accessTokenExpiration - currentTime;
    const leftTime = timeGap > 0 ? timeGap : 100000;
    accessTokenTimerRef.current = setTimeout(() => {
      setIsTokenExpired(true);
    }, leftTime);
  }, [accessTokenExpiration, currentTime]);

  const checkTokenExpiration = useCallback(() => {
    if (accessTokenExpiration && currentTime > accessTokenExpiration) {
      setIsTokenExpired(true);
    } else {
      setIsTokenExpired(false);
      startTokenExpirationTimer();
    }
  }, [accessTokenExpiration, currentTime, startTokenExpirationTimer]);

  const handleTokenRefresh = useCallback(async () => {
    clearTimeout(accessTokenTimerRef.current);
    onRefreshToken().then(() => {
      const tempString = Cookies.get("token_expire");
      accessTokenExpirationRef.current = tempString
        ? parseInt(tempString)
        : 100000;
      setIsTokenExpired(false);
      startTokenExpirationTimer();
    });
  }, [startTokenExpirationTimer]);

  useEffect(() => {
    checkTokenExpiration();
    return () => {
      clearTimeout(accessTokenTimerRef.current);
    };
  }, [checkTokenExpiration]);

  useEffect(() => {
    if (isTokenExpired) handleTokenRefresh();
  }, [isTokenExpired, handleTokenRefresh]);

  useEffect(() => {
    customAxios()
      .get("/user/me")
      .then((res) => {
        // setIsAdmin(res.data.isAdmin);
        setIsAdmin(true);
      });
  }, []);

  if (!tokenExist()) {
    alert("다시 로그인 해주세요.");
    return <Navigate to="/" />;
  }
  if (props.pathname === "/admin" && !isAdmin) return <NotFound />;

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
