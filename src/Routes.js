import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Config from './pages/Config'
import Home from './pages/Home'

function Routes() {
    return (
        <div>
            <Switch>
                <Route exact path='/' component={Home}></Route>

                <Route exact path='/config' component={Config}></Route>
            </Switch>
            
        </div>
    )
}

export default Routes
