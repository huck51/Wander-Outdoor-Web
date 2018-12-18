import React, { Component } from 'react';
import { injectStripe } from 'react-stripe-elements';
import axios from 'axios';
import AddressSection from './addressSection';
import CardSection from './cardSection';
import './Styles/checkoutForm.css';

class CheckoutForm extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  async handleSubmit(e) {
    e.preventDefault();

    const ownerInfo = {
      type: 'card',
      owner: {
        name: 'Merrill Marauder',
        address: {
          line1: '5454 Airfield Ave',
          city: 'Walabum',
          postal_code: '90210',
          country: 'Burma',
        },
        email: 'merrillsmarauders@goarmy.com',
      },
    };

    const { source, error } = await this.props.stripe.createSource(ownerInfo);

    if (error) {
      console.log(error);
    } else {
      console.log(`Source: ${JSON.stringify(source)}`);
      const axOptions = {
        source,
        email: ownerInfo.email,
        id: this.props.auth.userProfile['https://wander-outdoor.com/uuid'],
      };
      axios.post('https://fierce-ridge-55021.herokuapp.com/create/customer', axOptions)
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        console.log(err);
      });
    }
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit} className="cardForm">
        <AddressSection />
        <CardSection />
        <button onClick={this.handleSubmit}>Confirm order</button>
      </form>
    );
  }
};

export default injectStripe(CheckoutForm);
