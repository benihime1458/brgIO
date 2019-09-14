import React, { Fragment, Component, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { withStyles } from '@material-ui/core/styles';
import {
  Table, TableBody, TableCell, TableHead,
  TableRow, Paper, Typography,
} from '@material-ui/core';

const hosts = 'http://ec2-54-183-225-234.us-west-1.compute.amazonaws.com:5635' || 'http://localhost:5635';

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
    <StyledTableCell>{props.climb.grade}</StyledTableCell>
    <StyledTableCell>{props.climb.dateSet.substring(0, 10)}</StyledTableCell>
    <StyledTableCell>{props.climb.area}</StyledTableCell>
    {/* <StyledTableCell>
      <Link to={"/edit/" + props.climb._id}>edit</Link> | <a href="#" onClick={() => { props.deleteExercise(props.climb._id) }}>delete</a>
    </StyledTableCell> */}
  </StyledTableRow>
)

export default props => {
  const [climbs, setClimbs] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:5635/climbs`)
      .then(response => {
        setClimbs(response.data)
      })
      .catch((error) => console.log(error))
  }, []);

  const climbList = () => {
    return climbs.map(climb => {
      return <Climb climb={climb} key={climb._id}/>
    })

  }
  
  const list = climbList();
  
  return (
    <Fragment>
      <Typography variant='h4' gutterBottom>Bouldering Log</Typography>
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <StyledTableCell>Number</StyledTableCell>
              <StyledTableCell>Color</StyledTableCell>
              <StyledTableCell>Grade</StyledTableCell>
              <StyledTableCell>Date Set</StyledTableCell>
              <StyledTableCell>Area</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {list}
          </TableBody>
        </Table>
      </Paper>
    </Fragment>
  )
}