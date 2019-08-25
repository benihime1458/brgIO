import React from 'react';
import {render} from 'react-dom';
import App from './Components/App';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Security, ImplicitCallback } from '@okta/okta-react';

const CALLBACK_PATH = '/implicit/callback';

const config = {
  issuer: 'https://dev-743134.okta.com/oauth2/default',
  redirect_uri: window.location.origin + '/implicit/callback',
  client_id: '0oa171zjsrp4eC9v1357'
}

render(
  <Router>
    <Security {...config} >
      <Route path="/" exact component={App} />
      <Route path="/implicit/callback" component={ImplicitCallback} />
    </Security>
  </Router>,
  document.getElementById('app')
);

// render(<App />,document.getElementById('app'));