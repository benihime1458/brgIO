import React, { Fragment, Component } from 'react';
import axios from 'axios';
import { Typography, Button, InputLabel, InputAdornment, Input, FormControl} from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';

const hosts = 'http://ec2-54-183-225-234.us-west-1.compute.amazonaws.com:5635' || 'http://localhost:5635';

export default class CreateUser extends Component {
  constructor(props) {
    super(props);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      username: ''
    };
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const newUser = {
      username: this.state.username,
    };
    console.log(newUser);
    
    axios.post(`${hosts}/users/add`, newUser)
      .then(res => console.log(res.data));
    
      this.setState({
      username: ''
    })
  }
  render() {
    return (
      <Fragment>
        <Typography variant='h4' gutterBottom>Create New User</Typography>
          <form onSubmit={this.onSubmit}>
            <FormControl variant="standard">
              <InputLabel>Desired Username:</InputLabel>
              <Input
                id="input-with-icon-adornment"
                autoComplete="off"
                startAdornment={
                  <InputAdornment position="start">
                    <AccountCircle color="primary" />
                  </InputAdornment>
                }
                required
                value={this.state.username}
                onChange={this.onChangeUsername}       
              />
              <br></br>
            </FormControl>
            <div className="form-group">
              <Button variant="contained" type="submit" color="primary">Create User</Button>
            </div>
          </form>
      </Fragment>
    )
  }
}