import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom'; // use to edit climbing notes and other details

import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Card, CardContent, CardMedia, Checkbox,
  Table, TableBody, TableCell, TableHead,
  TableRow, Typography, Divider, IconButton,
} from '@material-ui/core';
import Add  from '@material-ui/icons/Add';
import Remove  from '@material-ui/icons/Remove';

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
  let [attempts, setAttempts] = useState(currentProblem.attempts)
  let [sends, setSends] = useState(currentProblem.sends)

  return (<StyledTableRow>
      <StyledTableCell align="center" width="150px">
        <Card style={{ width: '100%'}} >
          <CardContent style={{ backgroundColor: '#eeeeee'}}>
            <Card>
              <Typography variant="body2" style={{backgroundColor: 'white'}}>{currentProblem.number}</Typography>
              <Divider/>
              <Typography variant="subtitle2" style={{backgroundColor: 'white'}}>V{currentProblem.grade}</Typography>
              <Divider/>
              <Typography style={{ backgroundColor: `${currentProblem.color}`, height: '20px'}} ></Typography>
            </Card>
          </CardContent>
        </Card>
      </StyledTableCell>
      <StyledTableCell align="center">
      <Typography variant="subtitle2">
        <IconButton onClick={() => setAttempts(attempts - 1)} color="secondary"><Remove fontSize="small" /></IconButton>
        {attempts}
        <IconButton onClick={() => setAttempts(attempts + 1)} color="primary"><Add fontSize="small" /></IconButton></Typography>
      </StyledTableCell>
      <StyledTableCell align="center">
      <Typography variant="subtitle2">
        <IconButton onClick={() => setSends(sends - 1)} color="secondary"><Remove fontSize="small" /></IconButton>
        {sends}
        <IconButton onClick={() => setSends(sends + 1)} color="primary"><Add fontSize="small" /></IconButton></Typography>
      </StyledTableCell>
      <StyledTableCell align="center">
      {<Checkbox checked={flashed} onClick={() => flashed ? setFlashed(false) : setFlashed(true)}/>}
      </StyledTableCell>
      <StyledTableCell align="center">
      {<Checkbox color="primary" checked={project} onClick={() => project ? setProject(false) : setProject(true)}/>}
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
              <StyledTableCell align="center"># | Grade | Color</StyledTableCell>
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