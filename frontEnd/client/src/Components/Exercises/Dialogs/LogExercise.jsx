import React, { Fragment } from 'react';
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle, Fab } from '@material-ui/core';
import Add from '@material-ui/icons/Add';
import CreateExercise from "../create-exercise.component";

export default class AddExercise extends React.Component {
  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <Fragment>

        <Fab
          size='small'
          onClick={this.handleClickOpen}
        >
          <Add />
        </Fab>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby='form-dialog-title'
        >
          <DialogTitle
            id='form-dialog-title'
            style={{ textTransform: 'capitalize' }}
          >
            Add {this.props.group} Exercise
          </DialogTitle>
          <DialogContent>
            <CreateExercise/>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={this.handleClose}
              color='primary'
            >
              Cancel
            </Button>
          </DialogActions>
        </Dialog>
      </Fragment>
    );
  }
}
