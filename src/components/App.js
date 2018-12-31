import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import Grid from '@material-ui/core/Grid';

import './app/App.css';
import '../style/index.css';


class App extends Component {
  render() {
    return (
      <Grid item xs={12} className="full-height">
        <Grid container direction="row" alignItems="stretch" className="full-height">
          <Grid item xs={12}>
            Stock Management App
          </Grid>
         </Grid>
      </Grid>
    );
  }
}

export default withRouter(App);
