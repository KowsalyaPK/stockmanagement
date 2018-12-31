import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './sideMenu.css';


export default class SideMenu extends Component {
  render () {
    return (
      <div>
        <NavLink to={`/transactions`} activeClassName="active">
          <div className="side-menu-item-container">
            <div className="side-menu-item info-icon"></div>
          </div>
        </NavLink>
        {/* TODO */}
        <NavLink to={`/list`} activeClassName="active">
          <div className="side-menu-item-container">
            <div className="side-menu-item filter-icon"></div>
          </div>
        </NavLink>
        <NavLink to={`/user-details`} activeClassName="active">
          <div className="side-menu-item-container">
            <div className="side-menu-item menu-category-icon"></div>
          </div>
        </NavLink>
        <NavLink to="/chat" activeClassName="active">
          <div className="side-menu-item-container">
            <div className="side-menu-item chat-icon"></div>
          </div>
        </NavLink>
      </div>
    )
  }
}
