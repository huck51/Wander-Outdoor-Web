import React from 'react';
import PropTypes from 'prop-types';
import {
  ControlLabel,
  FormControl,
  FormGroup,
} from 'react-bootstrap';
import './Styles/fieldGroup.css';

const FieldGroup = ({ label, ...props }) => (
  <FormGroup>
    <ControlLabel>{label}</ControlLabel>
    <FormControl {...props} className="formPut" />
  </FormGroup>
);

FieldGroup.defaultProps = {
  label: '',
};

FieldGroup.propTypes = {
  label: PropTypes.string,
};

export default FieldGroup;
