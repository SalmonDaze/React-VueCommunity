import React, { Component } from 'react';
import { BrowserRouter, HashRouter, Switch, Route, Redirect} from 'react-router-dom';
import App from '../App'
import  index  from '../container/index.jsx'
import { createTopic } from '../container/createTopic.jsx'
import { User } from '../container/user.jsx'
import { Message } from '../container/message.jsx'
import { strandContent } from '../components/strandContent'

const Routes = (
    <BrowserRouter>
        <Switch>
            <Route path='/' exact component={App}></Route>
            <Route path='/index' exact component={index}></Route>
            <Route path='/createTopic' exact component={createTopic}></Route>
            <Route path='/message' exact component={Message}></Route>
            <Route path='/user' exact component={User}></Route>
            <Route path='/topic/:id' exact component={strandContent}></Route>
        </Switch>
    </BrowserRouter>
)

export default Routes