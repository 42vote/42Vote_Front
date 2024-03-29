import { Routes, Route, useLocation } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Detail from "./Detail/component/Detail";
import MainIndex from "./Main/index";
import NotFound from "./Etc/NotFound";
import Login from "./Login/login";
import Auth from "./Auth/page";
import MyPage from "./Mypage";
import Posting from "./Posting/component/Posting";
import ProtectRoute from "./Auth/components/AuthProvider";
import AdminIndex from "./Admin";
import "./App.css";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60000,
      cacheTime: 3600000,
    },
  },
});

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
        <Route element={<ProtectRoute pathname={locationPathName} />}>
          <Route path="/main" element={<MainIndex />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/posting" element={<Posting />} />
          <Route path="/detail/*" element={<Detail />} />
          <Route path="/admin" element={<AdminIndex/>} />
        </Route>
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
