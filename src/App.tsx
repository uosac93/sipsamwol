import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CardDeduction from './pages/CardDeduction';
import FamilyOptimize from './pages/FamilyOptimize';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/card" element={<CardDeduction />} />
          <Route path="/family" element={<FamilyOptimize />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
