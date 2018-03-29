import React, { Component } from 'react';
import NavigationBar from '../Components/navigationbar';
import TextInput from '../Components/textInput';
import './Styles/signUp.css';


class SignUp extends Component {

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

export default SignUp;
