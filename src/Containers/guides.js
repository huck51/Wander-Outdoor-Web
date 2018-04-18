import React, { Component } from 'react';
import './Styles/guides.css';


class Guides extends Component {
  constructor(props) {
    super(props);
    this.state = {
      guides: [],
    }
  }

  render() {
    return (
      <div>
        <h1>GUIDES</h1>
      </div>
    );
  }
}

export default Guides;
