import React, { Fragment, Component, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Card, CardMedia,
  Table, TableBody, TableCell, TableHead,
  TableRow, Paper, Typography,
} from '@material-ui/core';

const hosts = 'http://ec2-54-183-225-234.us-west-1.compute.amazonaws.com:5635' || 'http://localhost:5635';

const useStyles = makeStyles(theme => ({
  card: {
    marginBottom: 25,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  typography: {
    align: 'center',
  },
}));

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: "#3F51B5",
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
}))(TableRow);

const Climb = props => ( 
  <StyledTableRow>
    <StyledTableCell>{props.climb.number}</StyledTableCell>
    <StyledTableCell>{props.climb.color}</StyledTableCell>
    <StyledTableCell>V{props.climb.grade}</StyledTableCell>
    <StyledTableCell>{props.climb.dateSet.substring(0, 10)}</StyledTableCell>
  </StyledTableRow>
)

export default props => {
  const [climbs, setClimbs] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    axios.get(`http://localhost:5635/climbs`)
      .then(response => {
        setClimbs(response.data)
      })
      .catch((error) => console.log(error))
  }, []);

  const climbList = (wall) => {
    let problems = climbs.filter(climb => climb.area === wall);
    problems.sort((a, b) => a.number - b.number);
    problems = problems.map(climb => {
      return <Climb climb={climb} key={climb._id}/>
    })

    return <Fragment>
      <Typography align="center" variant='h4' gutterBottom>{wall.toUpperCase()}</Typography>
      <Card className={classes.card}>
        <Table>
          <TableHead>
            <TableRow>
              <StyledTableCell>Number</StyledTableCell>
              <StyledTableCell>Color</StyledTableCell>
              <StyledTableCell>Grade</StyledTableCell>
              <StyledTableCell>Date Set</StyledTableCell>
              <StyledTableCell>Attempts</StyledTableCell>
              <StyledTableCell>Sends</StyledTableCell>
              <StyledTableCell>Flashed</StyledTableCell>
              <StyledTableCell>Project</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {problems}
          </TableBody>
        </Table>
      </Card>
    </Fragment> 
  }
  
  const cave = climbList('cave');
  const corridor = climbList('corridor');
  const northeast = climbList('north east');
  const slab = climbList('slab');
  const southeast = climbList('south east');
  const southwest = climbList('south west');
  const toprope = climbList('top rope');
  const westwall = climbList('west wall');
  
  return (
    <Fragment>
      <Typography align="center" variant='h4' gutterBottom>ROUTESETTING MAP</Typography>
        <Card className={classes.card}>
          <CardMedia className={classes.media} image="images/brgmap.jpg" title="brgmap"/>
        </Card>
        {cave}
        {corridor}
        {northeast}
        {slab}
        {southeast}
        {southwest}
        {westwall}
        {toprope}
    </Fragment>
  )
}