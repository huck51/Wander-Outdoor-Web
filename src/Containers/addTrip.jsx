import React, { Component } from 'react';
import axios from 'axios';
import './Styles/addTrip.css';


class AddTrip extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      price: '',
      location: '',
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handlePriceChange = this.handlePriceChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleNameChange(e) {
    this.setState({ name: e.target.value });
  }
  handleDescriptionChange(e) {
    this.setState({ description: e.target.value });
  }
  handlePriceChange(e) {
    this.setState({ price: e.target.value });
  }
  handleLocationChange(e) {
    this.setState({ location: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    const {
      name,
      description,
      price,
      location,
    } = this.state;
    const newTrip = {
      name,
      description,
      location,
      price,
    };
    this.setState({
      name: '',
      description: '',
      location: '',
      price: '',
    });
    axios.post('https://fierce-ridge-55021.herokuapp.com/add-trip', newTrip)
      .then(() => {
        // eslint-disable-next-line no-undef
        window.location = '/company/dashboard';
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <h1>Add Trip</h1>
        <form>
          <input
            name="name"
            type="text"
            placeholder="Name"
            value={this.state.name}
            onChange={this.handleNameChange}
          />
          <input
            name="location"
            type="text"
            placeholder="Location"
            value={this.state.location}
            onChange={this.handleLocationChange}
          />
          <input
            name="description"
            type="text"
            placeholder="Description"
            value={this.state.description}
            onChange={this.handleDescriptionChange}
          />
          <input
            name="price"
            type="text"
            placeholder="Price"
            value={this.state.price}
            onChange={this.handlePriceChange}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default AddTrip;
