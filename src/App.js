import './App.css';
import GallleryPage from './pages/GallleryPage';
import HomePage from './pages/HomePage';
import PricePage from './pages/PricePage';
import ServicesPage from './pages/ServicesPage';
import { Routes, Route } from 'react-router-dom';
import BookingPage from './pages/BookingPage';
import BookFormPage from './pages/BookFormPage';
import MultiFormPage from './pages/MultiFormPage';
import Notfound from './pages/Notfound';

function App() {
  return (
    <div>
      <Routes> 
        <Route path="/" exact element={<HomePage />} />
        <Route path="/services" exact element={<ServicesPage />} />
        <Route path="/price" exact element={<PricePage />} />
        <Route path="/gallery" exact element={<GallleryPage />} />
        <Route path="/booking" exact element={<BookingPage />} />
        <Route path="/bookform" exact element={<BookFormPage />} />
        <Route path="/form" exact element={<MultiFormPage />} />
        <Route path="*" element={<Notfound/>} />
      </Routes>
    </div>
  );
}

export default App;
