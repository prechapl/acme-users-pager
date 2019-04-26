import React, { Component, Fragment } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Navigation from './Nav';
import Users from './Users';

class App extends Component {
  render() {
    return (
      <Fragment>
        <HashRouter>
          <Route component={Navigation} />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/users/:index?" component={Users} />
            <Route
              exact
              path="/users/search/:searchTerm/:index?"
              component={Users}
            />
          </Switch>
        </HashRouter>
      </Fragment>
    );
  }
}

export default App;
