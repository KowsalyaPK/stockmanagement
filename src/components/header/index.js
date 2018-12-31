import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';

import Profile from './Profile';


export default class Header extends Component {
  render() {
    return (
      <Grid container>
        <Grid item>
          <Profile></Profile>
        </Grid>
      </Grid>
    )
  }
}
