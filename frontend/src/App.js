import React from 'react';
import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Portfolio from './pages/Portfolio';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Portfolio />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
