import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/Home/Home';
import Float from './pages/Float/Float';
import Columns from './pages/Columns/Columns';
import Position from './pages/Position/Position';
import Flexbox from './pages/FlexBox/Flexbox';
import GridLayout from './pages/GridLayout/GridLayout';
import Images from './pages/Images/Images';
import MediaQueries from './pages/MediaQueries/MediaQueries';
import CardProject from './pages/CardProject/CardProject';
import Pseudo from './pages/Pseudo/Pseudo';
import Variables from './pages/Variables/Variables';
import Functions from './pages/Functions/Functions';
import Animations from './pages/Animations/Animations';
import Products from './pages/Animations/Products';
import Organization from './pages/Organization/Organization';
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
        <Route path="/position" element={<Position />}/>
        <Route path="/flexbox" element={<Flexbox />}/>
        <Route path="/grid-layout" element={<GridLayout />}/>
        <Route path="/images" element={<Images />}/>
        <Route path="/media-queries" element={<MediaQueries />}/>
        <Route path="/card-project" element={<CardProject />}/>
        <Route path="/pseudo" element={<Pseudo />}/>
        <Route path="/variables" element={<Variables />}/>
        <Route path="/functions" element={<Functions />}/>
        <Route path="/animations" element={<Animations />}/>
        <Route path="/organization" element={<Organization />}/>
        <Route path="/products" element={<Products />}/>
      </Routes>
    </Router>
  );
}

export default App;
