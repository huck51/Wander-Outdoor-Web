import React from 'react';
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

class CardSection extends React.Component {
  render() {
    return (
      <div className="container">
        <label style={{display: 'inline'}}>
          Card Number
          <CardNumberElement style={{base: {fontSize: '18px'}}} />
        </label>
        <label style={{display: 'inline'}}>
          Expiration Date
          <CardExpiryElement style={{base: {fontSize: '18px'}}} />
        </label>
        <label style={{display: 'inline'}}>
          CVC Code
          <CardCVCElement style={{base: {fontSize: '18px'}}} />
        </label>
        <label style={{display: 'inline'}}>
          ZIP
          <PostalCodeElement style={{base: {fontSize: '18px'}}} />
        </label>
      </div>
    );
  }
};

export default CardSection;
