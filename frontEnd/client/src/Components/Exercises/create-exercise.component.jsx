import React, { Fragment, Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

// material-ui 
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { Typography, Button, InputLabel, InputAdornment, Input, FormControl, Paper, Select, MenuItem, TextField, Box } from '@material-ui/core';

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
    axios.get('http://ec2-54-183-225-234.us-west-1.compute.amazonaws.com:5635/users/')
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
    
    axios.post('http://ec2-54-183-225-234.us-west-1.compute.amazonaws.com:5635/exercises/add', exercise)
      .then(res => console.log(res.data));
    
      window.location = '/';
  }

  render() {
    return (
      <Fragment>
        <Typography variant="h4" gutterBottom>Create New Exercise Log</Typography>
        <Box width="50%">
          <Paper>
            <form onSubmit={this.onSubmit}>
              <div>
                <FormControl variant="standard">
                  <InputLabel>Username: </InputLabel>
                  <Select ref="userInput"
                    required
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
                  </Select>
                  <br></br>
                </FormControl>
              </div>
              <div>
                <FormControl variant="standard">
                  <InputLabel>Description: </InputLabel>
                  <Input 
                    type="text"
                    required
                    value={this.state.description}
                    onChange={this.onChangeDescription}
                  />
                <br></br>
                </FormControl>
              </div>
              <div>
                <FormControl variant="standard">
                  <InputLabel>Duration: </InputLabel>
                  <Input
                    type="number"
                    variant="outlined"
                    endAdornment={<InputAdornment position="end">min</InputAdornment>}
                    required
                    value={this.state.duration}
                    onChange={this.onChangeDuration}
                  />
                  <br></br>
                </FormControl>
              </div>
            <div>
                <FormControl variant="standard">
                  <InputLabel>Date: </InputLabel>
                    <br></br>
                    <DatePicker
                      selected={this.state.date}
                      onChange={this.onChangeDate}
                    />
                    <br></br>
                </FormControl>
            </div>
            <div>
              <FormControl variant="standard">
                <Button type="submit" color="primary" variant="contained">Create Exercise Log</Button>
              </FormControl>
            </div>
            </form>
          </Paper>
        </Box>
      </Fragment>
    )
  }
}