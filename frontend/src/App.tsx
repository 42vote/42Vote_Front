import { BrowserRouter, Routes, Route } from "react-router-dom";
import Detail from "./Detail/Detail";
import MainPage from "./Main/MainPage";
import "./App.css";

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
