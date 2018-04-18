import React, { Component } from 'react';
import NavigationBar from './Components/navigationbar';
import Main from './main';
import Footer from './Components/footer';
import './App.css';

const App = () => (
  <div>
    <NavigationBar />
    <Main />
    <Footer />
  </div>
);

export default App;
