import { Navigate, Outlet } from "react-router-dom";
import { tokenExist } from "../util/tokenExist";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import FixedTop from "../../Etc/FixedTop";
import { useState } from "react";
import { customAxios } from "../../Lib/customAxios";

interface ProtectRouteProps {
  pathname: string;
}

const ProtectRoute = (props: ProtectRouteProps): React.ReactElement | null => {
  const [isAdmin, setIsAdmin] = useState(false);

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
