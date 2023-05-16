import { Navigate, Outlet } from "react-router-dom";
import { tokenExist } from "../util/tokenExist";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import FixedTop from "../../Etc/FixedTop";

interface ProtectRouteProps {
  pathname: string;
}

const ProtectRoute = (props: ProtectRouteProps): React.ReactElement | null => {
  if (!tokenExist()) {
    alert("다시 로그인 해주세요.");
    return <Navigate to="/" />;
  }
  return (
    <>
      <FixedTop />
      <TransitionGroup>
        <CSSTransition key={props.pathname} classNames="fade" timeout={600}>
          <Outlet />
        </CSSTransition>
      </TransitionGroup>
    </>
  );
};

export default ProtectRoute;
