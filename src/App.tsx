import React from 'react';
import { Route, Switch } from 'react-router'

import './App.css';
import './api/config'
import { Routes } from './routing'
import Home from './pages/Home/Home'
import { errorHandle, productInitialized } from './actions'


export default function App() {
    productInitialized()
    return (
        <Switch>
            <Route exact path={ Routes.HOME }>
                <Home />
            </Route>
        </Switch>
    )
}
