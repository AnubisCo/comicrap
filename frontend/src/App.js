import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import News from "./pages/News";
import Creators from "./pages/Creators";
import Comics from "./pages/Comics";
import Merch from "./pages/Merch"
import Nav from "./components/Nav";
import './App.css';

class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          <Switch>
            <Route path="/comics">
              <Nav />
              <Comics />
            </Route>
            <Route path="/creators">
              <Nav />
              <Creators />
            </Route>
            <Route path="/news">
              <Nav />
              <News />
            </Route>
            <Route path="/merch">
              <Nav />
              <Merch />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
