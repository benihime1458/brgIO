import React from 'react';
import Button from '@material-ui/core/Button';

export default props => {

  const demoMode = e => {
    e.preventDefault();
      props.setDemo(true);
  }

  return (
    <Button variant="contained" onClick={demoMode}>Demo</Button>
  );
};