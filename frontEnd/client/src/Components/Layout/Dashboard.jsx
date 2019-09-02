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
    height: '100%',
    padding: theme.spacing(15),
  },
  paper: {
    height: '100%',
  },
})));

export default props => {
  const classes = useStyles();
  const [index, setIndex] = useState(0);

  props.user ? console.log('logged in as', props.user.email) : console.log('not logged in');

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <Paper className={classes.paper}>
          {!props.user ?
            <>
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

