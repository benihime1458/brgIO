import React from 'react';
import {render} from 'react-dom';
import App from './Components/App';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Security, ImplicitCallback } from '@okta/okta-react';

const config = {
  issuer: 'https://dev-743134.okta.com/oauth2/default',
  redirect_uri: `${window.location.origin}/implicit/callback`,
  client_id: '0oa17exa9n7RgEs8A357'
};

render(
  <Router>
    <Security {...config} >
      <App />
    </Security>
  </Router>,
  document.getElementById('app')
);

if (module.hot) module.hot.accept();
