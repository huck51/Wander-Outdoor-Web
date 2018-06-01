import React, { Component } from 'react';
import { ControlLabel, FormControl, FormGroup } from 'react-bootstrap';
import axios from 'axios';
import FieldGroup from '../Components/fieldGroup';
import './Styles/contact.css';


class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = this.state;
    const contactMessage = { name, email, message };
    // Need to configure query parameters V
    console.log(contactMessage);
    axios.post('https://fierce-ridge-55021.herokuapp.com/contact-message', contactMessage)
      .then((response) => {
        console.log(response);
        alert('Success! We recieved your message. Thanks for the feedback!');
        this.setState({
          name: '',
          email: '',
          message: '',
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }
  render() {
    return (
      <div>
        <h1>Contact Us</h1>
        <div className="container">
          <form className="sizeControl" onSubmit={this.handleSubmit}>
            <FormGroup>
              <FieldGroup
                type="text"
                name="name"
                value={this.state.name}
                label="Name"
                placeholder="Name"
                onChange={this.handleChange}
                className="extraFormSizing"
              />
              <FieldGroup
                type="email"
                name="email"
                value={this.state.email}
                label="Email"
                placeholder="Ex: johndoe@gmail.com"
                onChange={this.handleChange}
                className="extraFormSizing"
              />
              <FormGroup controlId="formControlsTextarea">
                <ControlLabel>Message</ControlLabel>
                <FormControl
                  componentClass="textarea"
                  placeholder="Maximum of 750 words..."
                  value={this.state.message}
                  onChange={this.handleChange}
                  name="message"
                  className="textArea extraFormSizing"
                  rows="15"
                />
              </FormGroup>
              <button
                className="epSaveBtn"
                type="submit"
                onClick={this.handleSubmit}>Send</button>
            </FormGroup>
          </form>
        </div>
      </div>
    );
  }
}


export default Contact;
