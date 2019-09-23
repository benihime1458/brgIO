import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import { LinearProgress, Typography, Paper, Tabs, Tab, Button } from '@material-ui/core';

// Null User Components
import Login from '../Users/Login';
import Signup from '../Users/Signup';
import Navbar from './Navbar'

// User Dashboard Components
import ProblemList from "../Climbs/problem-list";

const useStyles = makeStyles((theme => ({
  root: {
    height: '100%',
  },
  content: {
    display: 'flex',
    justifyContent: 'center',
    height: '100%',
    padding: theme.spacing(4),
    paddingTop: theme.spacing(14),
  },
  paper: {
    height: '100%',
    minWidth: '450px',
    maxWidth: '700px',
    padding: theme.spacing(5),
  },
})));

export default props => {
  const classes = useStyles();
  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(null);
  const [userList, setUserList] = useState({});

  useEffect(() => {
    axios.get(`/users`).then(res => {
      for (let i in res.data) {

        let currentUser = { username: res.data[i].username, email: res.data[i].email }

        userList[res.data[i].username] ? null : setUserList(prevState => {
          return { ...prevState, [currentUser.username]: currentUser }
        });
      }
    })
  }, [])

  useEffect(() => {
    props.user ? null 
    : (
      setLoading(true), 
      setTimeout(() => {
        setLoading(false)
      }, 1500)) 
  }, [])

  return (
    <>
    <Navbar user={props.user} />
    <div className={classes.root} >
      <div className={classes.content}>
        <Paper className={classes.paper}>
          {!props.user ? 
            <>
              <Typography variant="h1" align="center" gutterBottom>brg.io</Typography>
              <Tabs
                value={index}
                indicatorColor='primary'
                textColor='primary'
                variant="fullWidth"
                centered
              >
                <Tab label='Login' onClick={() => setIndex(0)} />
                <Tab label='Sign Up' onClick={() => setIndex(1)} />
              </Tabs>
              {index == 0 ? <Login /> : <Signup userList={userList}/>}
              <Typography paragraph >
                Welcome to brg.io! My name is Benny and I love bouldering. This web app is for quickly logging your bouldering session at Brides Rock Gym, my home gym. More features will be added as I continue to work on this project. =]
              </Typography>
            </>
            :
            <>
            {
              loading ? <Route path="/" render={() => <LinearProgress/>} />  : <Route path="/" exact render={() => <ProblemList user={props.user} />}/>
            }  
            </>
          }
        </Paper>
      </div>
    </div>
    </>
  );
}