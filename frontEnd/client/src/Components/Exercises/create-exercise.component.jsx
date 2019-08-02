import React, { Fragment, Component } from 'react';
import axios from 'axios';

// material-ui 
import { Typography, Button, InputAdornment, Paper, MenuItem, TextField } from '@material-ui/core';
import { DatePicker } from "@material-ui/pickers";

export default class CreateExercise extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeDuration = this.onChangeDuration.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: '',
      description: '',
      duration: 0,
      date: new Date(),
      users: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5635/users/')
      .then(response => {
        if (response.data.length > 0) {
          this.setState({
            users: response.data.map(user => user.username),
            username: response.data[0].username
          });
        }
      })
      .catch((error) => {
        console.log(error);
      })
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    });
  }

  onChangeDuration(e) {
    this.setState({
      duration: e.target.value
    });
  }

  onChangeDate(date) {
    this.setState({
      date: date
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const exercise = {
      username: this.state.username,
      description: this.state.description,
      duration: this.state.duration,
      date: this.state.date,
    };

    console.log(exercise);
    
    axios.post('http://localhost:5635/exercises/add', exercise)
      .then(res => console.log(res.data))
    
    axios.get('http://localhost:5635/exercises/')
    .then(response => {
      this.setState({ exercises: response.data });
      window.location = '/';
    })
    .catch((error) => {
      console.log(error);
    })
  }

  render() {
    return (
      <Fragment>
        <Typography variant="h4" gutterBottom>
          Create New Exercise Log
        </Typography>
        <div style={{ width: '100%' }} >
            <form onSubmit={this.onSubmit}>
              <TextField 
                label="Username:"
                select
                required
                margin="normal"
                value={this.state.username}
                onChange={this.onChangeUsername}>
                {
                  this.state.users.map(function (user) {
                    return <MenuItem
                      key={user}
                      value={user}>{user}
                    </MenuItem>;
                  })
                }
              </TextField>
              <br/>
              <TextField
                label="Description: "
                type="text"
                required
                multiline
                rows="4"
                fullWidth
                margin="normal"
                value={this.state.description}
                onChange={this.onChangeDescription}
              />
              <br/>
              <TextField
                required
                label="Duration: "
                type="number"
                margin="normal"
                InputProps={{
                  endAdornment: <InputAdornment position="end">Min</InputAdornment>,
                }}
                value={this.state.duration}
                onChange={this.onChangeDuration}
              />
              <br/>
              <DatePicker
                label="Date: "
                format="MM/dd/yyyy"
                margin="normal"
                value={this.state.date}
                onChange={this.onChangeDate}
                showTodayButton
              />
              <br/>
              <Button 
                type="submit" 
                color="primary" 
                variant="contained"
              >
                Create Exercise Log
              </Button>
            </form>
        </div>
      </Fragment>
    )
  }
}