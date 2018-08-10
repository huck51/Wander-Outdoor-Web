import React, { Component } from 'react';
import MegaContext from './megaContext';

class MegaProvider extends Component {
  state = {
    userInfo: {
      userName: 'jeff',
      id: 'hpv123',
    },
  };

  render() {
    return (
      <MegaContext.Provider
        value={ {
          state: this.state,
          actions: {
            handleUserInfo: info => this.setState({ userInfo: info }),
          },
        } }
      >
        { this.props.children }
      </MegaContext.Provider>
    );
  }
}

export default MegaProvider;
