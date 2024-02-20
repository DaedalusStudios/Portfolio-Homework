import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/page1" element={<div>Page 1</div>} />
        <Route path="/page2" element={<div>Page 2</div>} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
