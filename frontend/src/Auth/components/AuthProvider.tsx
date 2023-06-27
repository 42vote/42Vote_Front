import { Navigate, Outlet } from "react-router-dom";
import { tokenExist } from "../util/tokenExist";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import FixedTop from "../../Etc/FixedTop";
import { useEffect, useState } from "react";
import { customAxios } from "../../Lib/customAxios";
import Cookies from "js-cookie";
import { onRefreshToken } from "../apis/authApi";
import { isToken } from "typescript";
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

  let accessTokenTimer: NodeJS.Timeout;

  const startTokenExpirationTimer = () => {
    const timeGap = accessTokenExpiration - currentTime;
    const leftTime = timeGap > 0 ? timeGap : 100000;
    accessTokenTimer = setTimeout(() => {
      setIsTokenExpired(true);
    }, leftTime);
  };

  const checkTokenExpiration = () => {
    if (accessTokenExpiration && currentTime > accessTokenExpiration) {
      setIsTokenExpired(true);
    } else {
      setIsTokenExpired(false);
      startTokenExpirationTimer();
    }
  };

  const handleTokenRefresh = async () => {
    clearTimeout(accessTokenTimer);
    onRefreshToken().then(() => {
      const tempString = Cookies.get("token_expire");
      accessTokenExpiration = tempString ? parseInt(tempString) : 100000;
      setIsTokenExpired(false);
      startTokenExpirationTimer();
    });
  };

  useEffect(() => {
    checkTokenExpiration();
    return () => {
      clearTimeout(accessTokenTimer);
    };
  }, []);

  useEffect(() => {
    if (isTokenExpired) handleTokenRefresh();
  }, [isTokenExpired]);

  //admin을 잠시 true로 고정시켜뒀습니다.
  //admin페이지 작업을 끊내고 res.data로 다시 돌려둬야합니다.
  useEffect(() => {
    customAxios()
      .get("/user/me")
      .then((res) => {
        setIsAdmin(true);
      });
  }, []);

  if (!tokenExist()) {
    alert("다시 로그인 해주세요.");
    return <Navigate to="/" />;
  }
  if(props.pathname === "/admin" && !isAdmin)
    return <NotFound />;

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
