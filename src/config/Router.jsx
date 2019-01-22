import React, { Component } from 'react';
import { BrowserRouter, HashRouter, Switch, Route, Redirect} from 'react-router-dom';
import App from '../App'
import index from '../components/index'

const Routes = (
    <BrowserRouter>
        <Switch>
            <Route path='/' exact component={App}></Route>
            <Route path='/index' exact component={index}></Route>
        </Switch>
    </BrowserRouter>
)

export default Routes