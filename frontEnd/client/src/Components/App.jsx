import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

//material-ui pickers
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from '@date-io/date-fns';

import { Navbar, Body } from './Layout';
import { fire, Login } from './Users';

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
      user ? console.log(user.email) : null;
      if (user) {
        this.setState({ user });
        localStorage.setItem('user', user.uid);
      } else {
        this.setState({ user: null });
        localStorage.removeItem('user');
      }
    });
  }

  render() {
    return (
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Router>
          <div className="container">
            <Navbar user={this.state.user} />
            {this.state.user ? 
            (<Body />) 
            : (<Login />)}
          </div>
        </Router>
      </MuiPickersUtilsProvider>
    );
  }
}