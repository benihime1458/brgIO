import React, { useState } from 'react';
import fire from './Fire';
import axios from 'axios';
import { Button, FormControl, TextField } from '@material-ui/core';
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

  let userList = props.userList;

  // onChange
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // validation & helper text
  const [validUser, validateUser] = useState(null);
  const [validEmail, validateEmail] = useState(null);
  const [validPassword, validatePassword] = useState(null);
  const [userHelper, setUserHelp] = useState(null);
  const [emailHelper, setEmailHelp] = useState(null);
  const [passwordHelp, setPasswordHelp] = useState(null);

  const changeUsername = (e) => {
    let usernameInput = e.target.value.toLowerCase().replace(/\s/g,'');
    setUsername(usernameInput);
    validateUser(usernameInput.length >= 4 && usernameInput.length <= 20)
  }
  
  const changeEmail = (e) => {
    let emailInput = e.target.value.replace(/\s/g, '');
    setEmail(emailInput);
    e.target.value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) ?
    validateEmail(true) : validateEmail(false)
  }

  const changePassword = (e) => {
    setPassword(e.target.value);
    validatePassword(e.target.value.length >= 6)
  }

  const signup = e => {
    e.preventDefault();

    let newUser = {username: username, email: email, problemLog: []};
    let userExists = (username) => axios.get(`/users/${username}`).then(res => res.data !== null ? setUserHelp('Username not available. Please choose a different username.') : setUserHelp('Username available.'))

    if (!validUser || !validEmail || !validPassword) {      
      
    (username.length < 4 || username.length > 20) ? 
      setUserHelp('4 character min. 20 character max. No spaces.')
      : userExists(username)
      
      validEmail ? setEmailHelp('Valid email.') : setEmailHelp('Invalid email. Please provide valid email address.')

      if (!validPassword) {
        setPasswordHelp('6 character min. 20 character max.')
      } else {
        setPasswordHelp('Retype password.')
        setPassword('') 
      }

    } else {

      axios.get(`/problems`).then(res => {
        newUser.problemLog = res.data

        axios.post(`/users/add`, newUser).then(
          fire.auth().createUserWithEmailAndPassword(email, password).then((u) => {
          }).then((u) => { console.log(u) })
            .catch((error) => {
              console.log(error)
            }))
      })

   }
  }

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <form onSubmit={signup}>
          <FormControl className={classes.form}>
            <TextField className={classes.textField} variant="filled" label="Desired Username" type="string" value={username} onChange={changeUsername} helperText={userHelper} />
            <TextField className={classes.textField} variant="filled" label="Email" type="email" value={email} onChange={changeEmail} helperText={emailHelper}/>
            <TextField className={classes.textField} variant="filled" label="Password" type="password" value={password} onChange={changePassword} helperText={passwordHelp} />
            <Button className={classes.textField} color="primary" variant="contained" type="submit">Sign Up</Button>
          </FormControl>
        </form>
      </div>
    </div>
  );
};