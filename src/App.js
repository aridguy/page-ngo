// import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import About from './Pages/About';
import Volunteer from './Pages/Volunteer';
import Gallery from './Pages/Gallery';
import WhoWeAre from './Pages/WhoWeAre';

function App() {
  return (
    <div>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="whoweare" element={<WhoWeAre />} />
        <Route path="volunteer" element={<Volunteer />} />
        <Route path="gallery" element={<Gallery />} />
    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
