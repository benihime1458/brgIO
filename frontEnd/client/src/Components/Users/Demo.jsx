import React from 'react';
import fire from './Fire';
import Button from '@material-ui/core/Button';

export default props => {
  const loginGuest = e => {
    e.preventDefault();

      fire.auth().signInAnonymously().then((u) => {
      }).catch((error) => {
        console.log(error);
      }); 
  }

  return (
    <Button variant="contained" onClick={loginGuest}>Demo</Button>
  );
};