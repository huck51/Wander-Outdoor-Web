import React, { Component } from 'react';
import { FormGroup } from 'react-bootstrap';
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
    const { name, email, mesage } = this.state;
    const contactMessage = { name, email, mesage };
    // Need to configure query parameters V
    axios.post('https://fierce-ridge-55021.herokuapp.com/', contactMessage)
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
          <form>
            <FormGroup>
              <FieldGroup
                type="text"
                name="name"
                value={this.state.name}
                label="Name"
                placeholder="Name"
                onChange={this.handleChange}
              />
              <FieldGroup
                type="email"
                name="email"
                value={this.state.email}
                label="Email"
                placeholder="Ex: johndoe@gmail.com"
                onChange={this.handleChange}
              />
              <FieldGroup
                type="text-area"
                name="message"
                value={this.state.message}
                label="Message"
                placeholder="Your message here..."
                onChange={this.handleChange}
              />
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
