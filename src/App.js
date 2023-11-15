import logo from './logo.svg';
import './App.css';import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import AboutUs from './components/AboutUs/AboutUs';
import Jobs from './components/Jobs/Jobs';
import Contact from './components/Contact/Contact';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};


export default App;
