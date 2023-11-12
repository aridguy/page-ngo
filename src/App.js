// import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import About from './Pages/About';
import WhatWeDo from './Pages/WhatWeDo';
import Volunteer from './Pages/Volunteer';
import Gallery from './Pages/Gallery';

function App() {
  return (
    <div>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="whatwedo" element={<WhatWeDo />} />
        <Route path="volunteer" element={<Volunteer />} />
        <Route path="gallery" element={<Gallery />} />
    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
