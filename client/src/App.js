import React, { Component } from "react"
import NavBar from "./components/NavBar"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Search from "./pages/Search"
import Saved from "./pages/Saved"
import NoMatch from "./pages/NoMatch"
import "./App.css";

/*
class App extends Component {
  render() {
    return (
      <NavBar />
    );
  }
}
*/

const App = () => (
  <Router>
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Search} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/saved" component={Saved} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

export default App;
