import React, { Fragment, Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { withStyles } from '@material-ui/core/styles';
import { 
  Table, TableBody, TableCell, TableHead, 
  TableRow, Paper, Typography, 
} from '@material-ui/core';

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: "#3F51B5",
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
}))(TableRow);

const Exercise = props => (
  <StyledTableRow>
    <StyledTableCell>{props.exercise.username}</StyledTableCell>
    <StyledTableCell>{props.exercise.description}</StyledTableCell>
    <StyledTableCell>{props.exercise.duration}</StyledTableCell>
    <StyledTableCell>{props.exercise.date.substring(0, 10)}</StyledTableCell>
    <StyledTableCell>
      <Link to={"/edit/" + props.exercise._id}>edit</Link> | <a href="#" onClick={() => { props.deleteExercise(props.exercise._id) }}>delete</a>
    </StyledTableCell>
  </StyledTableRow>
)

export default class ExercisesList extends Component {
  constructor(props) {
    super(props);
    this.deleteExercise = this.deleteExercise.bind(this);
    this.state = { exercises: [], };
  }

  componentDidMount() {
    axios.get('http://ec2-54-183-225-234.us-west-1.compute.amazonaws.com:5635/exercises/')
      .then(response => {
        this.setState({ exercises: response.data });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteExercise(id) {
    axios.delete('http://ec2-54-183-225-234.us-west-1.compute.amazonaws.com:5635/exercises/' + id)
      .then(res => console.log(res.data));
    this.setState({
      exercises: this.state.exercises.filter(el => el._id !== id)
    })
  }

  exerciseList() {
    return this.state.exercises.map(currentexercise => {
      return <Exercise exercise={currentexercise} deleteExercise={this.deleteExercise} key={currentexercise._id} />;
    })
  }

  render() {
    return (
      <Fragment>
        <Typography variant='h4' gutterBottom>Exercise Log</Typography>
        <Paper>
          <Table>
            <TableHead>
              <TableRow>
                <StyledTableCell>Username</StyledTableCell>
                <StyledTableCell>Description</StyledTableCell>
                <StyledTableCell>Duration</StyledTableCell>
                <StyledTableCell>Date</StyledTableCell>
                <StyledTableCell>Actions</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
                {this.exerciseList()}
            </TableBody>
          </Table>
        </Paper>
      </Fragment>
    )
  }
}