import React, { Fragment, Component } from 'react';
import clsx from 'clsx';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button, InputLabel, InputAdornment, Input, FormControl} from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
  margin: {
    margin: theme.spacing(1),
  },
}));

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
    
    axios.post('http://localhost:5635/users/add', newUser)
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