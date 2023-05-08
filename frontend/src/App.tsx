import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import Detail from "./Detail/Detail";
import MainIndex from "./Main/index";
import NotFound from "./Etc/NotFound";
import Login from "./Login/login";
import Auth from "./Auth/page";
import MyPage from "./Mypage";
import Posting from "./Posting/Posting";
import ProtectRoute from "./Auth/components/AuthProvider";
import { CSSTransition, TransitionGroup } from "react-transition-group";

function App() {
  const location = useLocation();
  const locationSearch = location.search;
  return (
    <TransitionGroup>
      <CSSTransition key={location.pathname} classNames="right" timeout={40000}>
        <Routes location={location}>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Login LoginText="Login with 42OAuth" />} />
          <Route
            path="/auth/42/redirect"
            element={<Auth locationSearch={locationSearch} />}
          />
          <Route element={<ProtectRoute />}>
            <Route path="/main" element={<MainIndex />} />
            <Route path="/detail" element={<Detail />} />
            <Route path="/mypage" element={<MyPage />} />
            <Route path="/posting" element={<Posting />} />
          </Route>
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
}

export default App;
