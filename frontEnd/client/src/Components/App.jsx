import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route } from "react-router-dom";

//material-ui pickers
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from '@date-io/date-fns';

import { Dashboard } from './Layout';
import { fire } from './Users';

export default App => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fire.auth().onAuthStateChanged((user) => {
      
      if (user) {
        axios.get(`/users`).then(res => {
          for (let i in res.data) {
            let userData = res.data[i];
            
            userData.email === user.email ? 
            setUser({username: userData.username, email: userData.email, problemLog: userData.problemLog}) 
            : null
            
            localStorage.setItem('user', user.uid);
          }
        })
      } else {
        setUser(null);
        localStorage.removeItem('user');
      }
     
    })
  }, [])

  return (
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Router >
          <Dashboard user={user}/>
        </Router>
      </MuiPickersUtilsProvider>
  );
}