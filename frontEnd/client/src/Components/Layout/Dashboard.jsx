import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { makeStyles, useTheme } from '@material-ui/core/styles';

import { Typography, Paper, Tabs, Tab } from '@material-ui/core';

// Null User Components
import Login from '../Users/Login';
import Signup from '../Users/Signup';

// User Dashboard Components
import ExercisesList from "../Exercises/exercises-list.component";
import EditExercise from "../Exercises/edit-exercise.component";
import CreateExercise from "../Exercises/create-exercise.component";

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

  // props.user ? console.log('logged in as', props.user.email) : console.log('not logged in');
  // props.userList ? console.log('userList', props.userList) : null;
  // const users = props.userList;
  // console.log('userList', users);
  return (
    <div className={classes.root}>
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
              {index == 0 ? <Login /> : <Signup userList={props.userList}/>}
              <Typography paragraph >
                Welcome to brg.io! My name is Benny and I love bouldering. This web app is for quickly logging your bouldering session at Brides Rock Gym, my home gym. More features will be added as I continue to work on this project. =]
              </Typography>
            </>
            :
            <>
              <Route path="/" exact component={ExercisesList} />
              <Route path="/edit/:id" component={EditExercise} />
              <Route path="/create" component={CreateExercise} />
              {/* <Route path="/user" component={CreateUser} /> Need to make a User path for settings */}
            </>
          }
        </Paper>
      </div>
    </div>
  );
}

