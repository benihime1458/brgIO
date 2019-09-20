import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom'; // use to edit climbing notes and other details

import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Card, CardMedia, Checkbox,
  Table, TableBody, TableCell, TableHead,
  TableRow, Typography, Button
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

const Problem = props => {
  let currentProblem = props.problem;
  let [flashed, setFlashed] = useState(currentProblem.flashed)
  let [project, setProject] = useState(currentProblem.flashed)
  const classes = props.classes;

  return (<StyledTableRow>
      <StyledTableCell align="center">{currentProblem.number}</StyledTableCell>
      <StyledTableCell align="center">V{currentProblem.grade}</StyledTableCell>
      <StyledTableCell align="center">{<Button fullWidth variant="outlined" style={{backgroundColor: `${currentProblem.color}`, color: 'white'}}>{currentProblem.color}</Button>}</StyledTableCell>
      {/* <StyledTableCell>{currentProblem.dateSet.substring(0, 10)}</StyledTableCell> */}
      <StyledTableCell align="center">{currentProblem.attempts}</StyledTableCell>
      <StyledTableCell align="center">{currentProblem.sends}</StyledTableCell>
      <StyledTableCell align="center">
      {<Checkbox color="primary" checked={flashed} onClick={() => flashed ? setFlashed(false) : setFlashed(true)}/>}
      </StyledTableCell>
      <StyledTableCell align="center">
      {<Checkbox checked={project} onClick={() => project ? setProject(false) : setProject(true)}/>}
      </StyledTableCell>
    </StyledTableRow>)
}

export default props => {

  const classes = useStyles();

  const problemList = (wall) => {
    let problems = props.user.problemLog.filter(problem => problem.area === wall);
    problems.sort((a, b) => a.number - b.number);
    problems = problems.map(problem => {
      return <Problem problem={problem} key={problem._id} classes={classes}/>
    })

    return <Fragment>
      <Typography align="center" variant='h4' gutterBottom>{wall.toUpperCase()}</Typography>
      <Card className={classes.card}>
        <Table>
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">Number</StyledTableCell>
              <StyledTableCell align="center">Grade</StyledTableCell>
              <StyledTableCell align="center">Color</StyledTableCell>
              {/* <StyledTableCell>Date Set</StyledTableCell> */}
              <StyledTableCell align="center">Attempts</StyledTableCell>
              <StyledTableCell align="center">Sends</StyledTableCell>
              <StyledTableCell align="center">Flash</StyledTableCell>
              <StyledTableCell align="center">Project</StyledTableCell>
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