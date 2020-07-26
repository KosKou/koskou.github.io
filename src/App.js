import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from "./views/Landing/Home";

function App() {
  return (
      <BrowserRouter>
        <Switch>
          <Route path="/" name="Home" component={Home} />
        </Switch>
      </BrowserRouter>
  );
}

export default App;
