import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import { Body } from './Layout';
import ExercisesList from "./Exercises/exercises-list.component";
import EditExercise from "./Exercises/edit-exercise.component";
import CreateExercise from "./Exercises/create-exercise.component";
import CreateUser from "./Users/create-user.component";

export default class extends Component {

  render() {
    return (
      <Router>
        <div className="container">
          <Body />
        </div>
      </Router>
    );
  }
}