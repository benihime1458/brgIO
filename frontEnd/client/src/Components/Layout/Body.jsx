import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { makeStyles, useTheme } from '@material-ui/core/styles';

import { Typography } from '@material-ui/core';

//components
import ExercisesList from "../Exercises/exercises-list.component";
import EditExercise from "../Exercises/edit-exercise.component";
import CreateExercise from "../Exercises/create-exercise.component";
import CreateUser from "../Users/create-user.component";

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

  return (
    <div className={classes.root}>
      <main className={classes.content}>
        <Typography paragraph>
          
        </Typography>
        <Route path="/" exact component={ExercisesList} />
        <Route path="/edit/:id" component={EditExercise} />
        <Route path="/create" component={CreateExercise} />
        <Route path="/user" component={CreateUser} />
      </main>
    </div>
  );
};