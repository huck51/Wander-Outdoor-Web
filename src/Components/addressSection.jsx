import React, { Component } from 'react';

class AddressSection extends Component {
  render() {
    return (
      <div className="container">
        <label style={{display: 'block'}}>
          Name
          <input style={{display: 'block'}}/>
        </label>
        <label style={{display: 'block'}}>
          Address
          <input style={{display: 'block'}}/>
        </label>
        <label style={{display: 'block'}}>
          City
          <input style={{display: 'block'}}/>
        </label>
        <label style={{display: 'block'}}>
          State
          <input style={{display: 'block'}}/>
        </label>
      </div>
    );
  }
};

export default AddressSection;
