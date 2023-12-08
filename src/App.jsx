import { useState, } from 'react'

import './App.css'
import Home from './components/Home'
import { Link, NavLink, Route, Routes, useLocation } from 'react-router-dom';
import Bookmarks from './components/Bookmarks';

function App() {
 const location=useLocation();

  return (
    <div className="app-container">
      <ul className="header">
        <NavLink
          to={"/"}
          className={`li ${location.pathname === "/" ? "dark" : ""}`}
        >
          Home
        </NavLink>
        <NavLink
          to={"/bookmarks"}
          className={`li ${location.pathname === "/bookmarks" ? "dark" : ""}`}
        >
          Bookmarks
        </NavLink>
      </ul>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/bookmarks" element={<Bookmarks />}></Route>
      </Routes>
    </div>
  );
}

export default App
