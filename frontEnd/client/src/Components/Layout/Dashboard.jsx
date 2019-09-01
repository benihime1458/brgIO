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
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(14),
  },
})));

export default props => {
  const classes = useStyles();
  const [index, setIndex] = useState(0);

  props.user ? console.log('logged in as', props.user.email) : console.log('not logged in');

  return (
    <div className={classes.root}>
      <main className={classes.content}>
        {!props.user ?
          <>
            <Tabs
              value={index}
              indicatorColor='primary'
              textColor='primary'
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
      </main>
    </div>
  );
}

