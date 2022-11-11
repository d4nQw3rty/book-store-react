import React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import BooksContainer from './components/BooksContainer';
import Categories from './components/Categories';
// import BooksContainer from './components/BooksContainer';
// import Categories from './components/Categories';

const App = () => (
  <Router>
    <div className="panel-bg">
      <Navbar />
      <Routes>
        <Route path="/" exact element={<BooksContainer />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </div>
  </Router>
);

export default App;
