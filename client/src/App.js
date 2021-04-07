//dependencies
import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//components
import Home from "./pages/Home/Home";
import Tutorial from "./pages/Tutorial/Tutorial";
import ScrollArrow from "./components/ScrollArrow/ScrollArrow";

// const Home = lazy(() =>
//   import("./pages/Home/Home")
// )
// const Tutorial = lazy(() =>
//   import("./pages/Tutorial/Tutorial")
// )
// const ScrollArrow = lazy(() =>
//   import("./components/ScrollArrow/ScrollArrow")
// )

function App() {

  return (
    <Router>
      <div>
        
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/tutorial/:id" component={Tutorial} />
            <Route component={Home} />
          </Switch>
        <ScrollArrow></ScrollArrow>
      
      </div>
    </Router>
  );
}

export default App;
