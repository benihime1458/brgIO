import React, { useState } from 'react';
import fire from './Fire';
import axios from 'axios';
import { Typography, Button, InputLabel, InputAdornment, Input, FormControl, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const hosts = 'http://ec2-54-183-225-234.us-west-1.compute.amazonaws.com:5635' || 'http://localhost:5635';

const useStyles = makeStyles((theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
  },
  content: {
    padding: theme.spacing(1),
  },
})));

export default props => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const changeUsername = (e) => setUsername(e.target.value);
  const changeEmail = (e) => setEmail(e.target.value);
  const changePassword = (e) => setPassword(e.target.value);

  const signup = e => {
    e.preventDefault();

    const newUser = {username: username};

    axios.post(`http://localhost:5635/users/add`, newUser).then(res => console.log(res.data));

    fire.auth().createUserWithEmailAndPassword(email, password).then((u) => {
    }).then((u) => { console.log(u) })
      .catch((error) => {
        console.log(error);
      })
  }

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <form>
          <FormControl variant="standard">
            <TextField label="Username: " type="string" value={username} onChange={changeUsername} />
            <TextField label="Email: " type="email" value={email} onChange={changeEmail} />
            <TextField label="Password: " type="password" value={password} onChange={changePassword} />
            <Button variant="contained" type="submit" onClick={signup}>Sign Up</Button>
          </FormControl>
        </form>
      </div>
    </div>
  );
};