import React, { Component } from 'react';
import {
  CardElement,
  CardNumberElement,
  CardExpiryElement,
  CardCVCElement,
  PostalCodeElement,
  PaymentRequestButtonElement,
  IbanElement,
  IdealBankElement
 } from 'react-stripe-elements';

class CardSection extends Component {
  render() {
    return (
      <div className="container">
        <label style={{display: 'block', maxWidth: '48em'}}>
          Card Info
          <CardElement style={{base: {
        iconColor: "#000",
        color: "#000",
        fontWeight: 400,
        fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
        fontSize: "16px",
        fontSmoothing: "antialiased",

        "::placeholder": {
          color: "#000"
        },
        ":-webkit-autofill": {
          color: "#fce883"
        }
      },}} />
        </label>
      </div>
    );
  }
};

export default CardSection;
