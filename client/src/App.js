import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Portfolio from"./pages/Portfolio/Portfolio"
import Home from "./pages/Home/Home"


function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
