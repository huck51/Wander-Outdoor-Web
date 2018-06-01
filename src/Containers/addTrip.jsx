import React, { Component } from 'react';
import axios from 'axios';
import FieldGroup from '../Components/fieldGroup';
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
        <div className="container">
          <form onSubmit={this.handleSubmit} className="sizeControl">
            <FieldGroup
              label="Trip Name"
              name="name"
              type="text"
              placeholder="Name"
              value={this.state.name}
              onChange={this.handleChange}
            />
            <FieldGroup
                label="Trip location"
                name="location"
                type="text"
                placeholder="Location"
                value={this.state.location}
                onChange={this.handleChange}
            />
            <FieldGroup
                label="Description"
                name="description"
                type="text"
                placeholder="Description"
                value={this.state.description}
                onChange={this.handleChange}
            />
            <FieldGroup
                label="Price"
                name="price"
                type="text"
                placeholder="Ex: 100.50"
                value={this.state.price}
                onChange={this.handleChange}
            />
            <button
              type="submit"
              onClick={this.handleSubmit}
              className="epSaveBtn"
            >Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

export default AddTrip;
