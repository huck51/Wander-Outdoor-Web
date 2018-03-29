import React, { Component } from 'react';
import NavigationBar from '../Components/navigationbar';
import TextInput from '../Components/textInput';
import './Styles/login.css';


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    }
  }

  render() {
    return (
      <div>
        <NavigationBar />
        <div className="container">
          <TextInput />
          <TextInput />
        </div>
      </div>
    );
  }
}

export default Login;
