import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";

import StockComponent from '../../routes/stocks';


export default class RouteComponent extends Component {
    render() {
        return (
            <div className="view-container">
                <Switch>
                    <Route exact path="/stocks" component={StockComponent} />
                </Switch>
            </div>
        )
    }
}
