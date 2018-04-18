import React, { Component } from 'react';
import './Styles/guideCompanies.css';


class GuideCompanies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      companies: [],
    }
  }

  render() {
    return (
      <div>
        <h1>GUIDING COMPANIES</h1>
      </div>
    );
  }
}

export default GuideCompanies;
