import React, { Component } from 'react';
import './Styles/companyDashboard.css';


class CompanyDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      state: 'state',
    };
  }

  render() {
    return (
      <div>
        <h1>Company Dashboard</h1>
      </div>
    );
  }
}

export default CompanyDashboard;
