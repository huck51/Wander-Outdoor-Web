import React from 'react';

const squareForm = () => (
  <div id="sq-ccbox">
  /*
    You should replace the action attribute of the form with the path of
    the URL you want to POST the nonce to (for example, "/process-card")
  */
  <form id="nonce-form" novalidate action="path/to/payment/processing/page" method="post">
    Pay with a Credit Card
    <table>
    <tbody>
      <tr>
        <td>Card Number:</td>
        <td><div id="sq-card-number"></div></td>
      </tr>
      <tr>
        <td>CVV:</td>
        <td><div id="sq-cvv"></div></td>
      </tr>
      <tr>
        <td>Expiration Date: </td>
        <td><div id="sq-expiration-date"></div></td>
      </tr>
      <tr>
        <td>Postal Code:</td>
        <td><div id="sq-postal-code"></div></td>
      </tr>
      <tr>
        <td colspan="2">
          <button id="sq-creditcard" class="button-credit-card" onclick="requestCardNonce(event)">
            Pay with card
          </button>
        </td>
      </tr>
    </tbody>
    </table>

    /*
      After a nonce is generated it will be assigned to this hidden input field.
    */
    <input type="hidden" id="card-nonce" name="nonce">
  </form>
</div>

<div id="sq-walletbox">
  Pay with a Digital Wallet
  // <!-- Placeholder for Apple Pay for Web button -->
  <button id="sq-apple-pay" class="button-apple-pay"></button>

  // <!-- Placeholder for Google Pay button-->
  <button id="sq-google-pay" class="button-google-pay"></button>

  // <!-- Placeholder for Masterpass button -->
  <button id="sq-masterpass" class="button-masterpass"></button>
</div>

);

export default squareForm;
