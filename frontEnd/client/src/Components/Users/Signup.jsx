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
    width: '70%',
    height: '80%'
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
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const changeUsername = (e) => setUsername(e.target.value);
  const changeEmail = (e) => setEmail(e.target.value);
  const changePassword = (e) => setPassword(e.target.value);

  const signup = e => {
    e.preventDefault();

    const newUser = {username: username};

    (username !='' || email != '' || password !='') ? 
    axios.post(`http://localhost:5635/users/add`, newUser).then(res => console.log(res.data)).then(
      fire.auth().createUserWithEmailAndPassword(email, password).then((u) => {
      }).then((u) => { console.log(u) })
        .catch((error) => {
          console.log(error)
        })
    )
    : alert('fill out form completely')
      
  }

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <form onSubmit={signup}>
          <FormControl className={classes.form}>
            <TextField className={classes.textField} variant="filled"  label="Desired Username" type="string" value={username} onChange={changeUsername} />
            <TextField className={classes.textField} variant="filled" label="Email" type="email" value={email} onChange={changeEmail} />
            <TextField className={classes.textField} variant="filled" label="Password" type="password" value={password} onChange={changePassword} />
            <Button className={classes.textField} color="primary" variant="contained" type="submit">Sign Up</Button>
          </FormControl>
        </form>
      </div>
    </div>
  );
};