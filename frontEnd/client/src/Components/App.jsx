import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

//material-ui pickers
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from '@date-io/date-fns';


import { Header, Body } from './Layout';

export default class extends Component {

  render() {
    return (
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Router>
          <div className="container">
              <Header />
              <Body />
          </div>
        </Router>
      </MuiPickersUtilsProvider>
    );
  }
}