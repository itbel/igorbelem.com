import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import MainPage from "./components/MainPage"
import CovidPage from "./components/CovidPage"
function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={MainPage}/>
          <Route path="/covid" component={CovidPage}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
