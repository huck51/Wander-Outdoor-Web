import React, { Component } from 'react';
import './Styles/travelerDashboard.css';


class TravelerDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      state: 'state',
    };
  }

  render() {
    return (
      <div>
        <h1>Traveler Dashboard</h1>
      </div>
    );
  }
}

export default TravelerDashboard;
