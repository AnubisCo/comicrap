import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import News from "./pages/News";
import Nav from "./components/Nav";
import './App.css';

class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          <Switch>
            <Route path="/news">
              <Nav />
              <News />
            </Route>
            <Route path="/creators">
              <Nav />
            </Route>
            <Route path="/">
              <Home />
            </Route>
            <Route path="/comics">
              <Nav />
            </Route>
            <Route path="/merch">
              <Nav />
            </Route>
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
