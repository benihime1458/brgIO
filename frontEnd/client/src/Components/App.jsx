import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import {Button} from '@material-ui/core'

//material-ui pickers
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from '@date-io/date-fns';

import { withAuth } from '@okta/okta-react';
import { useAuth } from '../auth';

import { Header, Body } from './Layout';

export default class extends Component {

  render() {
    return (
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Router>
          <div className="container">
              <Header />
              <Body />
          </div>
        </Router>
      </MuiPickersUtilsProvider>
    );
  }
}

// const App = withAuth(({ auth }) => {
//   const [authenticated, user] = useAuth(auth);


//   return (
//     <MuiPickersUtilsProvider utils={DateFnsUtils}>
//       <Router>
//         <div className="container">
//           <Header />
//           <Body />
//         </div>
//       </Router>
//     </MuiPickersUtilsProvider>
//   )
// })

// export default App;