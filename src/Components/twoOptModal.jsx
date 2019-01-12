import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';
import './Styles/twoOptModal.css';

const TwoOptModal = ({ b1, b2, bodyText, cb1, cb2, show, title}) => {
  return (
    <Modal show={show} className="mod" >
      <Modal.Header closeButton className="modHead" >
        <Modal.Title className="modHead">{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="modBody" >
        <p>{bodyText}</p>
        <Button onClick={cb1} >{b1}</Button>
        <span> or </span>
        <Button onClick={cb2} >{b2}</Button>
      </Modal.Body>
    </Modal>
  )
};

export default TwoOptModal;
