import React from 'react';
import './App.css';
import MyNavbar  from "./components/layouts/Navbar";
import { Switch, Route } from "react-router-dom";
import Home from './components/pages/Home';
import Default from './components/pages/Defaut';
import Students from './components/pages/Students';
import Teachers from './components/pages/Teachers';

function App() {
  return (
    <div className="container">
      <MyNavbar/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/students" component={Students}/>
        <Route exact path="/teachers" component={Teachers}/>
        <Route exact component={Default}/>
      </Switch>
    </div>
  );
}

export default App;
