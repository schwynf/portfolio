import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Portfolio from"./pages/Portfolio/Portfolio"
import Tutorial from"./pages/Tutorial/Tutorial"
import Home from "./pages/Home/Home"
import TutorialId from "./pages/TutorialId/TutorialId"
import ScrollArrow from "./components/ScrollArrow/ScrollArrow"


function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/tutorial" component={Tutorial} />
          <Route exact path="/tutorial/:id" component={TutorialId} />
          <Route component={Home} />
        </Switch>
        <ScrollArrow></ScrollArrow>
      </div>
    </Router>
  );
}

export default App;
