import React from 'react';
import {
  Button,
  Col,
  ControlLabel,
  Form,
  FormControl,
  FormGroup,
  Radio,
  Row
} from 'react-bootstrap';
import UniqueCostItem from './uniqueCostItem';
import './Styles/customCost.css';

const labelSelecterArr = ['Private','Shared', 'Food', 'Gear Rental', 'Half Day', 'Full Day', 'Multi-day', 'Custom'];

const CustomCost = ({addOnDescription, addOnLabel, addOnPrice, createAddOn, flatFee, handleChange, handleDelete, handleRadio, perPerson, uniqueCostArr}) => {

  return(
    <div>
      <ul className="costList">
        {
          uniqueCostArr.map((uniqueCost, index)=> {
            console.log(uniqueCost);
            return (
              <UniqueCostItem item={uniqueCost} key={uniqueCost.id} destroy={handleDelete}/>
            )
          })
        }
      </ul>
      <p>Add new cost parameter</p>
      <Form onSubmit={createAddOn}>
        <Row>
          <Col md={4}>
            <FormGroup>
              <ControlLabel>Add-On Name</ControlLabel>
              <FormControl
                name="addOnLabel"
                onChange={handleChange}
                value={addOnLabel}
                required
              />
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <ControlLabel>Add-On Price</ControlLabel>
              <FormControl
                name="addOnPrice"
                onChange={handleChange}
                value={addOnPrice}
                required
              />
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
              <Radio
                checked={perPerson}
                onClick={handleRadio}
                name="perPerson"
              >
                Per Person
              </Radio>
              <Radio
                checked={flatFee}
                onClick={handleRadio}
                name="flatFee"
              >
                Flat Fee
              </Radio>
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md={10}>
            <FormGroup>
              <ControlLabel>Add-On Description</ControlLabel>
              <FormControl
                componentClass="textarea"
                name="addOnDescription"
                onChange={handleChange}
                rows="4"
                value={addOnDescription}
                required
              />
            </FormGroup>
          </Col>
        </Row>
        <Button
          onSubmit={createAddOn}
          type="submit"
        >
          + Add Parameter
        </Button>
      </Form>
    </div>
  );
};

export default CustomCost;
