import React from 'react';
import { Button } from '@material-ui/core';
import fire from './Fire';

export default props => {

  const signout = e => {
    e.preventDefault();

    props.demo ? props.setDemo(false) :  

    fire.auth().signOut().then((u) => {

      alert('signed out')
      window.location = '/';
    }).catch((error) => {
      console.log(error);
      
    });
  }

  const currentUser = props.user ? props.user.username.toUpperCase() : 'Demo Mode'

  return <Button variant="contained" color="secondary" onClick={signout}>Logout: {currentUser}</Button>
}


