import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { StudentsProvider } from "./context/StudentsContext";
import "bootstrap/dist/css/bootstrap.min.css";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <StudentsProvider>
        <App />
      </StudentsProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.register();
