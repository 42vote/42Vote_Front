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
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  const location = useLocation();
  const locationPathName = location.pathname;
  const locationSearch = location.search;
  return (
      <QueryClientProvider client={queryClient}>
        <Routes location={location}>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Login LoginText="Login with 42OAuth" />} />
          <Route path="/auth/42/redirect" element={<Auth locationSearch={locationSearch} />} />
          <Route path="/main" element={<MainIndex />} />
          <Route path="/detail/*" element={<Detail />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/posting" element={<Posting />} />
          <Route element={<ProtectRoute pathname={locationPathName}/>}>
        </Routes>
      </QueryClientProvider>
  );
}

export default App;
