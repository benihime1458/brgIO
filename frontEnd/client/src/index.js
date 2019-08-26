import React from 'react';
import {render} from 'react-dom';
import App from './Components/App';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Security, ImplicitCallback } from '@okta/okta-react';

const config = {
  issuer: 'https://dev-743134.okta.com/oauth2/default',
  redirect_uri: window.location.origin,
  client_id: '0oa173jwts80qBV0d357'
}

render(
  <Router>
    <Security {...config} >
      <Route path="/" exact component={App} />
      <Route path="/implicit/callback" component={App} />
    </Security>
  </Router>,
  document.getElementById('app')
);