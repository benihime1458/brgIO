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
      localStorage.getItem('problemLog') ? localStorage.removeItem('problemLog') : null

      if (user !== null && user.isAnonymous) {
        let localProblems = [];
        if (!localStorage.getItem('problemLog')) {
          let newProblems = [];
          axios.get(`/climbs`)
          .then(res => {
            res.data.map(climb => {
              let problem = climb;
              problem.attempts = 0
              problem.sends = 0
              problem.flashed = false
              problem.project = false
              problem.notes = 'climbing notes'
              
              newProblems.push(problem)
            })
            
          }).then(() => localProblems = newProblems, user.problemLog = localProblems)
          .then(() => localStorage.setItem('problemLog', JSON.stringify(localProblems))).then(() => {
            setUser({problemLog: localProblems})
            localStorage.setItem('user', 'demo');
            })
        } else {
            setUser({ problemLog: JSON.parse(localStorage.getItem('problemLog')) })
            localStorage.setItem('user', user.uid);
        }
      } 
      
      if (user !== null && !user.isAnonymous) {
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