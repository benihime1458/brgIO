import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      <nav>
        <Link to="/" >brg-exercises</Link>
        <div>
          <ul>
            <li>
              <Link to="/">Exercises</Link>
            </li>
            <li>
              <Link to="/create">Create Exercise Log</Link>
            </li>
            <li>
              <Link to="/user">Create User</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}