import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './pages/Home'

function Routes() {
    return (
        <div>
            <Switch>
                <Route exact path='/' component={Home}></Route>
            </Switch>
            
        </div>
    )
}

export default Routes
