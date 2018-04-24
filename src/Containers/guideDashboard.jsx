import React, { Component } from 'react';
import './Styles/guideDashboard.css';


class GuideDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      state: 'state',
    };
  }

  render() {
    return (
      <div>
        <h1>Gudie Dashboard</h1>
      </div>
    );
  }
}

export default GuideDashboard;
