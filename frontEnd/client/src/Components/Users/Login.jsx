import React, { useState } from 'react';
import fire from './Fire';
import { Typography, Button, InputLabel, InputAdornment, Input, FormControl, TextField } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';

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
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const changeEmail = (e) => setEmail(e.target.value);
  const changePassword = (e) => setPassword(e.target.value);

  const login = e => {
    e.preventDefault();
    fire.auth().signInWithEmailAndPassword(email, password).then((u) => {
    }).catch((error) => {
      console.log(error);
    });
  }

  const signup = e => {
    e.preventDefault();
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
            <TextField label="Email: " type="email" value={email} onChange={changeEmail} />
            <TextField label="Password: " type="password" value={password} onChange={changePassword} />
            <Button type="submit" onClick={login}>Login</Button>
            <Button onClick={signup}>Signup</Button>
          </FormControl>
        </form>
      </div>
    </div>
  );
};