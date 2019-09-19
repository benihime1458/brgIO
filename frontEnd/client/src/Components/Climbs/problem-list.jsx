import React, { Fragment } from 'react';
import { Link } from 'react-router-dom'; // use to edit climbing notes and other details

import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Card, CardMedia,
  Table, TableBody, TableCell, TableHead,
  TableRow, Typography,
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

const Problem = props => (
  <StyledTableRow>
    <StyledTableCell>{props.problem.number}</StyledTableCell>
    <StyledTableCell>{props.problem.color}</StyledTableCell>
    <StyledTableCell>V{props.problem.grade}</StyledTableCell>
    <StyledTableCell>{props.problem.dateSet.substring(0, 10)}</StyledTableCell>
    <StyledTableCell>{props.problem.attempts}</StyledTableCell>
    <StyledTableCell>{props.problem.sends}</StyledTableCell>
    <StyledTableCell>{props.problem.flashed}</StyledTableCell>
    <StyledTableCell>{props.problem.project}</StyledTableCell>
  </StyledTableRow>
)

export default props => {

  const classes = useStyles();

  const problemList = (wall) => {
    let problems = props.user.problemLog.filter(problem => problem.area === wall);
    problems.sort((a, b) => a.number - b.number);
    problems = problems.map(problem => {
      return <Problem problem={problem} key={problem._id}/>
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
  
  const cave = problemList('cave');
  const corridor = problemList('corridor');
  const northeast = problemList('north east');
  const slab = problemList('slab');
  const southeast = problemList('south east');
  const southwest = problemList('south west');
  const toprope = problemList('top rope');
  const westwall = problemList('west wall');
  
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