import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

//material-ui pickers
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from '@date-io/date-fns';

import { Header, Body } from './Layout';

import { useAuth0 } from "../react-auth0-wrapper";

import Profile from "./Users/Profile";

export default class extends Component {
  render() {
    const { loading } = useAuth0();

    if (loading) {
      return (
        <div>Loading...</div>
      );
    } 

    return (
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Router>
          <div className="container">
            <Header />
            <Body />
          </div>
          <Switch>
            <Route path="/" exact />
            <PrivateRoute path="/profile" component={Profile} />
          </Switch>
        </Router>
      </MuiPickersUtilsProvider>
    );
  }
}