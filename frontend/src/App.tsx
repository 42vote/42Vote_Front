import { BrowserRouter, Routes, Route } from "react-router-dom";
import Detail from "./Detail/Detail";
import "./App.css";
import MainIndex from "./Main/index";
import NotFound from "./Etc/NotFound";
import Login from "./Login/login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/detail" element={<Detail />} />
          <Route path="/main" element={<MainIndex />} />
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
