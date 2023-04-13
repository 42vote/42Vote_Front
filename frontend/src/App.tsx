import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Detail from './Detail/Detail';
import './App.css';

function App() {
  return (
	<div className="App">
	  <BrowserRouter>
	  	<Routes>
			<Route path='/detail' element={<Detail/>}/>
		</Routes>
	  </BrowserRouter>
	</div>
  );
}

export default App;
