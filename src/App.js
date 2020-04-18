import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

import Spinner from "./containers/spinner/spinner";
import Login from "./containers/login/index";
import Home from "./containers/home/home";
// import Session from "./containers/session/session";
import NotFound from "./containers/not-found/not-found";
// import Sample from "./containers/sample/sample";

import ProtectedRoute from "./auth/protected-route";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Spinner />
          <Switch>
            <ProtectedRoute name="home" path='/home' component={Home} />
            {/* <ProtectedRoute name="home" path='/session' component={Session} /> */}
            <Route path='/login' component={Login} />
            <ProtectedRoute path="/" component={NotFound}>
            </ProtectedRoute>
            <ProtectedRoute />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
