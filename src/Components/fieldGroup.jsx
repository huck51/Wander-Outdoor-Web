import React from 'react';
import {
  ControlLabel,
  FormControl,
  FormGroup,
} from 'react-bootstrap';
import './Styles/fieldGroup.css';

const FieldGroup = ({ label, ...props }) => (
  <FormGroup>
    <ControlLabel>{label}</ControlLabel>
    <FormControl {...props} className="formPut"/>
  </FormGroup>
);

export default FieldGroup;
