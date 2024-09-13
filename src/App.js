import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Float from './pages/Float';
import Columns from './pages/Columns';
import Navigation from './components/Navigation';
import './App.css';

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/float" element={<Float />}/>
        <Route path="/columns" element={<Columns />}/>
      </Routes>
    </Router>
  );
}

export default App;
