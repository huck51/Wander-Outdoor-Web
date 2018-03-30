import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from "./Containers/home";
import SignUp from "./Containers/signUp";
import Login from "./Containers/login";

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/login" component={Login} />
    </Switch>
  </main>
);

export default Main;
