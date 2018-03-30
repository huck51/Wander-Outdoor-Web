import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Containers/home';
import SignUp from './Containers/signUp';
import Login from './Containers/login';
import GuidingCompanies from './Containers/guideCompanies';
import Guides from './Containers/guides';
import About from './Containers/about';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/signup' component={SignUp} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/guiding-companies' component={GuidingCompanies} />
      <Route exact path='/guides' component={Guides} />
      <Route exact path='/about' component={About} />
    </Switch>
  </main>
);

export default Main;
