import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';


export default class Profile extends Component {
  render() {
    return (
      <Grid container className="profile-container">
        <Avatar className="avatar">N</Avatar>
        <Grid item className="data-container">
          <div className="title">Nisanth</div>
          <div className="sub-title">8792434849</div> 
        </Grid>
      </Grid>
    )
  }
}
