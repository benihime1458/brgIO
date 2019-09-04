import React, { useState } from 'react';
import fire from './Fire';
import { Button, InputLabel, InputAdornment, Input, FormControl, TextField, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
  },
  content: {
    width: '85%',
    height: '95%'
  },
  form: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(5),
    width: '100%',

  },
  textField: {
    marginTop: theme.spacing(3),
    width: '100%',
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

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <form onSubmit={login}>
          <FormControl className={classes.form}>
              <TextField className={classes.textField} variant="filled" label="Email" type="email" value={email} onChange={changeEmail} />
              <TextField className={classes.textField} variant="filled" label="Password" type="password" value={password} onChange={changePassword} />
              <Button className={classes.textField} color="primary" variant="contained" type="submit">Login</Button>
          </FormControl>
        </form>
      </div>
    </div>
  );
};