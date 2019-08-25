import { withAuth } from '@okta/okta-react';
import React, { Component } from 'react';
import { Header } from '../Layout';

async function checkAuthentication() {
  const authenticated = await this.props.auth.isAuthenticated();
  if (authenticated !== this.state.authenticated) {
    this.setState({ authenticated });
  }
}

export default withAuth(class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { authenticated: null };
    this.checkAuthentication = checkAuthentication.bind(this);
    this.login = this.login.bind(this);
  }

  async componentDidMount() {
    this.checkAuthentication();
  }

  async componentDidUpdate() {
    this.checkAuthentication();
  }

  async login() {
    this.props.auth.login('/');
  }

  render() {
    return (
      <div>
        {!this.state.authenticated &&
          <div>
            <a onClick={this.login}>Login</a>
          </div>
        }
      </div>
    );
  }
});