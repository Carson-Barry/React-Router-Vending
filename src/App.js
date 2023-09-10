import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import VendingMachine from './VendingMachine';
import Chips from './Chips';
import Candy from './Candy';
import Water from './Water';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<VendingMachine />} />
            <Route path="/chips" element={<Chips />} />
            <Route path="/water" element={<Water />} />
            <Route path="/candy" element={<Candy />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
