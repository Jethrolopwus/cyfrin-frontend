
import "./index.css";
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';

function App() {
  return (
    <BrowserRouter>
      {/* <Navbar/> */}
      <Routes>
        <Route path="/" element={<Home />} />
        
        {/* <Route path="/navbar" element={<Navbar />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
