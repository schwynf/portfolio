import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Portfolio from"./pages/Portfolio"
import Login from "./pages/Login"
import Home from "./pages/Home"
import Admin from "./pages/Admin"

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/admin" component={Admin} />
          <Route exact path="/login" component={Login} />
          <Route component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
