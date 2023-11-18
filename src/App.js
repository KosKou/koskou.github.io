import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from "./views/Landing/Home";

function App() {
  return (
      <BrowserRouter>
        <Routes>
            <Route path="/"  exact={true} name="Home" element={ <Home/> } />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
