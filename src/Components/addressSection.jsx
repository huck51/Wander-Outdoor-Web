import React, { Component } from 'react';

class AddressSection extends Component {
  render() {
    return (
      <div className="container">
        <label>
          Name
          <input />
        </label>
        <label>
          Address
          <input />
        </label>
        <label>
          City
          <input />
        </label>
        <label>
          State
          <input />
        </label>
      </div>
    );
  }
};

export default AddressSection;
