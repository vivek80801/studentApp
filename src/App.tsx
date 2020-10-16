import React from "react";
import "./App.css";
import MyNavbar from "./components/layouts/Navbar";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./components/pages/Home";
import Default from "./components/pages/Default";
import Students from "./components/pages/Students";
import Teachers from "./components/pages/Teachers";

const App: React.FC =(): JSX.Element=> {
  return (
    <Router>
      <div className="container">
        <MyNavbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/students" component={Students} />
          <Route exact path="/teachers" component={Teachers} />
          <Route exact component={Default} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
