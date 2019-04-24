import React, { Component, Fragment } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Home from './Home';
import Nav from './Nav';
import Users from './Users';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Router>
          <Route component={Nav} />
          <Route exact path="/" component={Home} />
          <Route exact path="/users/:index" component={Users} />
        </Router>
      </Fragment>
    );
  }
}

export default App;
