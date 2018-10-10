import React, { Component } from 'react';
import MegaContext from './megaContext';

class MegaProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        userName: 'jeff',
        id: 'hpv123',
      },
    };
  }

  render() {
    return (
      <div />
    )
  }
}

export default MegaProvider;
