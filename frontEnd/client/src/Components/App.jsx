import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import { Body } from './Layout';

export default class extends Component {

  render() {
    return (
      <Router>
        <div className="container">
          <Body />
        </div>
      </Router>
    );
  }
}