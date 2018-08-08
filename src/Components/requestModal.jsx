import React, { Component } from 'react';
import ReactModal from 'react-modal';
import FieldGroup from './fieldGroup';
import axios from 'axios';
import './Styles/requestModal.css';

class RequestModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      trip: '',
      guide: '',
      numPeople: '',
      departure: '',
      companyName: this.props.companyName,
      companyEmail: this.props.email,
    };
  }

  handleOpenModal = () => {
    this.setState({ showModal: true });
  }

  handleCloseModal = () => {
    this.setState({ showModal: false });
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const {
      firstName,
      lastName,
      email,
      phone,
      trip,
      guide,
      numPeople,
      departure,
      companyName,
      companyEmail
    } = this.state;
    const tripRequest = {
      firstName,
      lastName,
      email,
      phone,
      trip,
      guide,
      numPeople,
      departure,
      companyName,
      companyEmail
    };
    axios.post('https://fierce-ridge-55021.herokuapp.com/request-trip', tripRequest)
      .then((response) => {
        console.log(response);
        this.handleCloseModal();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <button
          className="removeButn"
          onClick={this.handleOpenModal}
        >{this.props.btnText}</button>
        <ReactModal
          style={
            {
              overlay: {
                zIndex: 5,
                backgroundColor: 'rgba(55, 55, 55, .9)',
              },
              content: {
                zIndex: 6,
                backgroundColor: 'rgb(55, 131, 182)',
              }
            }
          }
          isOpen={this.state.showModal}
        >
          <button onClick={this.handleCloseModal} className="closeModal">X</button>
          <form onSubmit={this.handleSubmit}>
            <FieldGroup
              label="First Name"
              name="firstName"
              type="text"
              placeholder="First Name"
              value={this.state.firstName}
              onChange={this.handleChange}
            />
            <FieldGroup
              label="Last Name"
              name="lastName"
              type="text"
              placeholder="Last Name"
              value={this.state.lastName}
              onChange={this.handleChange}
            />
            <FieldGroup
              label="Email"
              name="email"
              type="text"
              placeholder="Email"
              value={this.state.email}
              onChange={this.handleChange}
            />
            <FieldGroup
              label="Phone"
              name="phone"
              type="text"
              placeholder="Ex. ###-###-####"
              value={this.state.phone}
              onChange={this.handleChange}
            />
            <FieldGroup
              label="Trip"
              name="trip"
              type="text"
              placeholder="Trip"
              value={this.state.trip}
              onChange={this.handleChange}
            />
            <FieldGroup
              label="Guide"
              name="guide"
              type="text"
              placeholder="Guide"
              value={this.state.guide}
              onChange={this.handleChange}
            />
            <FieldGroup
              label="Number of People"
              name="numPeople"
              type="number"
              placeholder="0"
              value={this.state.numPeople}
              onChange={this.handleChange}
            />
            <FieldGroup
              label="Desired Departure Date"
              name="departure"
              type="date"
              value={this.state.departure}
              onChange={this.handleChange}
            />
          <button type="submit" onClick={this.handleSubmit}>Submit</button>
          </form>
        </ReactModal>
      </div>
    );
  }
}

export default RequestModal;
