import React from 'react';
import { Route, Switch } from 'react-router'

import './App.css';
import { Routes } from './routing'
import Home from './pages/Home/Home'


export default function App() {
    return (
        <Switch>
            <Route exact path={ Routes.HOME }>
                <Home />
            </Route>
        </Switch>
    )
}
