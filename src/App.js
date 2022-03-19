import { Routes, Route } from 'react-router-dom'
import { Homepage } from './pages/index.js'
import Mockman from "mockman-js";
import "./App.css";
function App() {
  return (
    <div className="main-container">
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="mockman" element={<Mockman />} />
      </Routes>
    </div>
  );
}

export default App;
