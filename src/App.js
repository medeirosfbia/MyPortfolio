import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import NavbarCustom from './components/NavbarCustom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router>
      <NavbarCustom />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/projetos" element={<Projects />} />
          <Route path="/contato" element={<Contact />} />
        </Routes>
      </div>
      <ToastContainer position="bottom-right" autoClose={3000} className="toastify-custom" />
    </Router>
  );
}

export default App;
