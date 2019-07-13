import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./navbar.component"
import ExercisesList from "./Exercises/exercises-list.component";
import EditExercise from "./Exercises/edit-exercise.component";
import CreateExercise from "./Exercises/create-exercise.component";
import CreateUser from "./Users/create-user.component";

export default class extends Component {

  render() {
    return (
      <Router>
        <div className="container">
          <Navbar />
          <br />
          <Route path="/" exact component={ExercisesList} />
          <Route path="/edit/:id" component={EditExercise} />
          <Route path="/create" component={CreateExercise} />
          <Route path="/user" component={CreateUser} />
        </div>
      </Router>
    );
  }
}