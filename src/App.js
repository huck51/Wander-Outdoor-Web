import React from 'react';
import NavigationBar from './Components/navigationbar';
import Main from './main';
import Footer from './Components/footer';
import './App.css';

const App = () => (
  <div>
    <div id="body">
      <NavigationBar />
      <Main />
    </div>
    <div id="footer">
      <Footer />
    </div>
  </div>
);


export default App;
