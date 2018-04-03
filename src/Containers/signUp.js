import React, { Component } from 'react';
import TextInput from '../Components/textInput';
import './Styles/signUp.css';


class SignUp extends Component {

  render() {
    return (
      <div>
        <div className="container">
          <TextInput type={'text'} placeholder={'Username'}/>
          <TextInput type={'password'} placeholder={'Password'}/>
        </div>
      </div>
    );
  }
}

export default SignUp;
