import { BrowserRouter, Routes, Route } from "react-router-dom";
import Detail from "./Detail/Detail";
import "./App.css";
import MainPage from "./Main/MainPage";
import FixedTop from "./Etc/FixedTop";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/detail" element={<Detail />} />
          <Route path="/main" element={<MainPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
