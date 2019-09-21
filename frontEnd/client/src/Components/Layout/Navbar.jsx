import React from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import clsx from 'clsx';

import { makeStyles, useTheme } from '@material-ui/core/styles';

// material-ui core
import {
  Drawer,
  AppBar,
  Toolbar,
  List,
  CssBaseline,
  Typography,
  Divider,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button
} from '@material-ui/core';

// material-ui icons
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

// Dialog Components
import LogExercise from '../Exercises/Dialogs/LogExercise';

// Logout
import Logout from '../Users/Logout';

const drawerWidth = 240;

const linkStyle = {
  textDecoration: 'none',
  color: 'black'
};

const useStyles = makeStyles((theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
})));

export default props => {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  function handleDrawerOpen() {
    setOpen(true);
  }

  function handleDrawerClose() {
    setOpen(false);
  }

  const saveLog = () => {
    let user = props.user;
    console.log('saveLog: ', user.problemLog[0]);
    axios.post(`http://localhost:5635/users/savelog`, user).then(res => console.log(res.data))
  }
  
  const saveLocal = () => {
    let user = props.user;
    console.log('saveLocal: ', user.problemLog[0]);
    // axios.post(`http://localhost:5635/users/savelog`, user).then(res => console.log(res.data))
  
    localStorage.setItem('problemLog', JSON.stringify(user.problemLog))
  }
  
  const logLocal = () => {
    const log = localStorage.getItem('problemLog');
    console.log(log);
  }
  
  const parseLocal = () => {
    const parsed = JSON.parse(localStorage.getItem('problemLog'));
    console.log(parsed);
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          {/* {props.user ? 
            <IconButton
              color="inherit"
              aria-label="Open awer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, {
                [classes.hide]: open,
              })}
            >
              <MenuIcon />
            </IconButton>
          :
          null
          } */}
          <Typography variant="h6" noWrap style={{ flex: 1 }}>
            <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>brgio</Link>
          </Typography>


          {props.user ? 
            <div >
              <Button style={{margin: 10}} variant="contained" onClick={saveLog}>
              Save Log
              </Button> 
              <Button style={{margin: 10}} variant="contained" onClick={saveLocal}>
              Save Local
              </Button> 
              <Button style={{margin: 10}} variant="contained" onClick={logLocal}>
              Log Local
              </Button> 
              <Button style={{margin: 10}} variant="contained" onClick={parseLocal}>
              Parse Local
              </Button> 
              <Logout style={{ margin: 10 }} /> 
            </div>
            : null}
          
        </Toolbar>
      </AppBar>
      {/* {props.user ?
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
        open={open}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          <Link to="/" style={linkStyle}>
            <ListItem button>
              <ListItemIcon><InboxIcon /></ListItemIcon>
              <ListItemText primary='Exercise Log' />
            </ListItem>
          </Link>
        </List>
        <Divider />
        <List>
          <Link to="/user" style={linkStyle}>
            <ListItem button>
              <ListItemIcon><MailIcon /></ListItemIcon>
              <ListItemText primary='Create User' />
            </ListItem>
          </Link>
        </List>
      </Drawer>
      : null 
      } */}
    </div>
  );
}
 