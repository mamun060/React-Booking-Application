import './App.css';
import GallleryPage from './pages/GallleryPage';
import HomePage from './pages/HomePage';
import PricePage from './pages/PricePage';
import ServicesPage from './pages/ServicesPage';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div>
      <Routes> 
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/price" element={<PricePage />} />
        <Route path="/gallery" element={<GallleryPage />} />
      </Routes>
    </div>
  );
}

export default App;
