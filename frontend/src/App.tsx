import { BrowserRouter, Routes, Route } from "react-router-dom";
import Detail from "./Detail/Detail";
import "./App.css";
import MainPage from "./Main/page";
import NotFound from "./Etc/NotFound";
import Login from "./Login/login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/detail" element={<Detail />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
