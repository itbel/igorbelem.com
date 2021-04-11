import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainPage from "./components/MainPage";
const CovidPage = React.lazy(() => import("./components/CovidPage"));
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <React.Suspense fallback={<div></div>}>
          <Route path="/covid" component={CovidPage} />
        </React.Suspense>
      </Switch>
    </Router>
  );
}

export default App;
