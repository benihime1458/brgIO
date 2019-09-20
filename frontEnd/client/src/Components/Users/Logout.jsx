import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import fire from './Fire';

export default props => {

  const signout = e => {
    e.preventDefault();
    fire.auth().signOut().then((u) => {
      alert('signed out')
    window.location = '/';
    }).catch((error) => {
      console.log(error);
      
    });
  }

  return (
    <Button variant="contained" color="secondary" onClick={signout}>Logout</Button>
  );
}


