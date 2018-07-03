import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Info from "./pages/Info";
import Dashboard from "./pages/Dashboard";
import Brew from "./pages/Brew";
import University from "./pages/University";
import Recipe from "./pages/Recipe";
import NoMatch from "./pages/NoMatch";
import styles from "./App.css";

const App = () => (
  <div className="page">
    <div className="logo">
      <h1 className="t-1">Custom</h1>
      <h1 className="t-2">Tap</h1>
    </div>
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/info" component={Info} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/brew" component={Brew} />
          <Route exact path="/university" component={University} />
          <Route exact path="/recipe" component={Recipe} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
    <div className="foot">
      <p><i className="far fa-copyright"></i> Nicholas Peel</p>
    </div>
  </div>

);

export default App;
