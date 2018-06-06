import React, { Component } from 'react';
import './Styles/viewTrip.css';


class ViewTrip extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      company: '',
      location: '',
      description: '',
      price: '',
      guides: [],
      rating: null,
      picture: '',
    }
  }

  render() {
    return (
      <div>
        <h1>Single Trip</h1>
      </div>
    );
  }
}

export default ViewTrip;
