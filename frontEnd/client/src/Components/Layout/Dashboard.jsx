import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { makeStyles, useTheme } from '@material-ui/core/styles';

import { LinearProgress, Typography, Paper, Tabs, Tab } from '@material-ui/core';

// Null User Components
import Login from '../Users/Login';
import Signup from '../Users/Signup';

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
    minWidth: '50%',
    padding: theme.spacing(5),
  },
})));

export default props => {
  const classes = useStyles();
  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(null);

    useEffect(() => {
      props.user ? null 
      : (
        setLoading(true), 
        setTimeout(() => {
          setLoading(false)
        }, 1500)) 
    }, [])

  return (
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
              {index == 0 ? <Login /> : <Signup />}
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
  );
}