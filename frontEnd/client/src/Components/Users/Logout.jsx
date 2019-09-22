import React from 'react';
import { Button } from '@material-ui/core';
import fire from './Fire';

export default props => {

  const signout = e => {
    e.preventDefault();
    fire.auth().signOut().then((u) => {
      localStorage.getItem('problemLog') ? localStorage.removeItem('problemLog') : null
      localStorage.getItem('user') ? localStorage.removeItem('user') : null
      alert('signed out')
    window.location = '/';
    }).catch((error) => {
      console.log(error);
      
    });
  }

  const currentUser = props.user.username ? props.user.username.toUpperCase() : 'Demo Mode'

  return <Button variant="contained" color="secondary" onClick={signout}>Logout: {currentUser}</Button>
}


