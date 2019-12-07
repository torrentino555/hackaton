import React, { Fragment } from 'react';
import { Route, Switch, Redirect } from 'react-router'

import './App.css';
import './api/config'
import { Routes } from './routing'
import { productInitialized } from './actions'
import Home from './pages/Home'
import Products from './pages/Products'
import Product from './pages/Product'
import { Header } from './common/Header'
import { NotFound } from './pages/NotFound'


export default function App() {
    productInitialized()
    return (
        <div className="app">
            <Header/>
            <div className="wrapper">
                <Switch>
                    <Route exact path={ Routes.HOME } component={ Home }/>
                    <Route exact path={ Routes.PRODUCTS } component={ Products }/>
                    <Route exact path={ Routes.PRODUCT } component={ Product }/>
                    <Route exact path={ Routes.NOT_FOUND } component={ NotFound }/>
                    <Redirect to={Routes.NOT_FOUND}/>
                </Switch>
            </div>
        </div>
    )
}
