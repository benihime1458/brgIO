import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

//material-ui pickers
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from '@date-io/date-fns';

import { Navbar, Dashboard } from './Layout';
import { fire } from './Users';

export default App => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fire.auth().onAuthStateChanged((user) => {
      user ? console.log(user.email) : null;
      if (user) {
        setUser(user);
        localStorage.setItem('user', user.uid);
      } else {
        setUser(null);
        localStorage.removeItem('user');
      }
    })
  })

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Router>
        <div className="container">
          <Navbar user={user} />
          <Dashboard user={user} />
        </div>
      </Router>
    </MuiPickersUtilsProvider>
  );
}