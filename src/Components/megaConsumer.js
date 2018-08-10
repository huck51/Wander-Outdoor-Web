import React, { Component } from 'react';
import MegaContext from './megaContext';

const MegaConsumer = ({ context, children }) => (
  <MegaContext.Consumer>
    {context => children}
  </MegaContext.Consumer>
);

export default MegaConsumer;
