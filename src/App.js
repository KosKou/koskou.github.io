import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from "./views/Landing/Home";
import ASK1 from "./views/FAQ/MONTH1/ASK1";

function App() {
  return (
      <BrowserRouter>
        <Switch>
          <Route path="/"  exact={true} name="Home" component={Home} />
            <Route path="/ask" exact={true} name="ASK" component={ASK1} />
        </Switch>
      </BrowserRouter>
  );
}

export default App;
