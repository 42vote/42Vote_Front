import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Detail from "./Detail/Detail";
import MainIndex from "./Main/index";
import NotFound from "./Etc/NotFound";
import Login from "./Login/login";
import Auth from "./Login/Auth";
import MyPage from "./Mypage";
import Posting from "./Posting/Posting";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login LoginText="Login with 42OAuth"/>} />
          <Route path="/detail/*" element={<Detail />} />
          <Route path="/main" element={<MainIndex />} />
          <Route path="/auth/42/redirect" element={<Auth/>} />
          <Route path="/mypage" element={<MyPage/>}/>
          <Route path="/posting" element={<Posting/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
