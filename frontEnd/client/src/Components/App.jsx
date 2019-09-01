import React, {Component, Fragment} from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

//material-ui pickers
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from '@date-io/date-fns';

import { Navbar, Dashboard } from './Layout';
import { fire } from './Users';

export default class extends Component {

  constructor() {
    super();
    this.state = ({
      user: null,
    });
    this.authListener = this.authListener.bind(this);
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log(user.email)
        this.setState({ user });
        localStorage.setItem('user', user.uid);
      } else {
        this.setState({ user: null });
        localStorage.removeItem('user');
      }
    })
  }

  render() {
    return (
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Router>
          <div className="container">
            <Navbar user={this.state.user} />
            <Dashboard user={this.state.user} />
          </div>
        </Router>
      </MuiPickersUtilsProvider>
    );
  }
}