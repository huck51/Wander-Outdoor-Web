import React, { Component } from 'react';
import {
  Alert,
  Col,
  ControlLabel,
  FormControl,
  FormGroup,
  Row,
} from 'react-bootstrap';
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
      subError: false,
      msgSuccess: false,
    };
  }

  toggleError = () => {
    this.setState({ subError: true });
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = this.state;
    const nameT = name.trim();
    const emailT = email.trim();
    const messageT = message.trim();
    if (nameT === '' || emailT === '' || messageT === '') {
      this.toggleError();
      return;
    }
    const contactMessage = {
      name: nameT,
      email: emailT,
      message: messageT
    };
    // Need to configure query parameters V
    console.log(contactMessage);
    axios.post('https://fierce-ridge-55021.herokuapp.com/contact-message', contactMessage)
      .then((response) => {
        console.log(response);
        this.setState({
          name: '',
          email: '',
          message: '',
          subError: false,
          msgSuccess: true,
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }
  render() {
    return (
      <div>
        <Row>
          <Col xs={12} sm={12} md={6} lg={6} className="sidePic">
          </Col>
          <Col xs={12} sm={12} md={6} lg={6}>
            <h1>Contact Us</h1>
            <Alert bsStyle="danger" className={this.state.subError ? 'missingField' : 'allFields'}><strong>*Missing Field.</strong> Please make sure all fields are filled out before submitting.
            </Alert>
            <Alert bsStyle="success" className={this.state.msgSuccess ? 'missingField' : 'allFields'}><strong>Success</strong> - Message sent.
            </Alert>
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
                    autocomplete="name"
                  />
                  <FieldGroup
                    type="email"
                    name="email"
                    value={this.state.email}
                    label="Email"
                    placeholder="Ex: johndoe@gmail.com"
                    onChange={this.handleChange}
                    className="extraFormSizing"
                    autocomplete="email"
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
            </Col>
          </Row>
      </div>
    );
  }
}


export default Contact;
