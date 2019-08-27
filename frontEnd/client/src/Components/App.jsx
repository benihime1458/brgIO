import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ImplicitCallback } from '@okta/okta-react';

//material-ui pickers
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from '@date-io/date-fns';

import { Header, Body } from './Layout';

export default class extends Component {

  render() {
    return (
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <div className="container">
            <Header />
            <Route exaxt path="/" component={Body} />
            <Route path="/implicit/callback" component={ImplicitCallback} />
          </div>
      </MuiPickersUtilsProvider>
    );
  }
}