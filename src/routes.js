import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/header';
import Home from './components/Home/index';
import Banner from './components/Home/banner';

const Routes = () => {
    return ( 
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route path="/" component={Home}/>
            </Switch>
        </BrowserRouter>
     );
}
 
export default Routes;