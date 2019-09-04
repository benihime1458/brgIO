import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route } from "react-router-dom";

//material-ui pickers
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from '@date-io/date-fns';

import { Navbar, Dashboard } from './Layout';
import { fire } from './Users';

export default App => {
  const [user, setUser] = useState(null);
  const [userList, setUserList] = useState({});

  useEffect(() => {
    fire.auth().onAuthStateChanged((user) => {
      // user ? console.log(user.email) : null;
      if (user) {
        setUser(user);
        localStorage.setItem('user', user.uid);
      } else {
        setUser(null);
        localStorage.removeItem('user');
      }
    })
  })
  
  useEffect(() => {
    axios.get(`http://localhost:5635/users`).then(res => {
      for (let i in res.data) {
        // userList[res.data[i].username] ? null : setUserList(userList[res.data[i].username] = res.data[i].username)
        let currentUser = res.data[i].username
        userList[res.data[i].username] ? null : setUserList(prevState => {
          return { ...prevState, [currentUser] : true}
        });
      }
    })
  }, [])

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Router>
        <div className="container">
          <Navbar user={user} />
          <Dashboard user={user} userList={userList} />
        </div>
      </Router>
    </MuiPickersUtilsProvider>
  );
}