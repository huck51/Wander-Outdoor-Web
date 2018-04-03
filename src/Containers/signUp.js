import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Styles/signUp.css';


class SignUp extends Component {

  render() {
    return (
      <div>
        <h2>What kind of user are you?</h2>
        <div className="container">
          <Link to="/signup/traveler"><button>Traveler</button></Link>
          <Link to="/signup/guide"><button>Guide</button></Link>
          <Link to="/signup/guiding-company"><button>Guiding Company</button></Link>
        </div>
      </div>
    );
  }
}

export default SignUp;
