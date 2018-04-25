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
  }
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }
  handleSubmit = (e) => {
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
            onChange={this.handleChange}
          />
          <input
            name="location"
            type="text"
            placeholder="Location"
            value={this.state.location}
            onChange={this.handleChange}
          />
          <input
            name="description"
            type="text"
            placeholder="Description"
            value={this.state.description}
            onChange={this.handleChange}
          />
          <input
            name="price"
            type="text"
            placeholder="Price"
            value={this.state.price}
            onChange={this.handleChange}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default AddTrip;
