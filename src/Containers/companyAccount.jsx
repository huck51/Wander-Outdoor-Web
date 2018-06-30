import React, { Component } from 'react';
import axios from 'axios';
import './Styles/companyAccount.css';

class CompanyAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      state: 'state',
    }
  }

  render() {
    return (
      <div>
        <h1>Company Account Details</h1>
        <button>Delete Company</button>
      </div>
    );
  }
}

export default CompanyAccount;
