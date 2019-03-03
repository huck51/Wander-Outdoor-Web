import React, { Component } from 'react';
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

class CustomCost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uniqueCostArr: [{costLabel: 'Cooler', cost: '20', costDescription: '50ml Yeti cooler with complimentary ice. (Holds about 12 beers with ice)', costType: 'flatFee', id: 1234567}],
      costDescription: '',
      costLabel: '',
      cost: '',
      costType: 'perPerson',
      perPerson: true,
      flatFee: false,
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleDelete = (e) => {
    const target = e.target.value;
    console.log(target);
    const uCArr = this.state.uniqueCostArr;
    for (let i = 0; i < uCArr.length; i++) {
      if (uCArr[i].id == target) {
        uCArr.splice(i, 1);
        break;
      }
    }
    this.setState({
      uniqueCostArr: uCArr
    });
  }

  handleRadio = (e) => {
    const { perPerson, flatFee } = this.state;
    const t = e.target.name;
    console.log(t);
    const tValue = this.state[t];
    console.log(tValue);
    if (!tValue) {
      this.setState({
        perPerson: !perPerson,
        flatFee: !flatFee,
        costType: t
      });
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { costDescription, costLabel, cost, uniqueCostArr } = this.state;
      const rand = (Math.random() * 1000000) + 1;
      const id = Math.round(Number(((costDescription.length + 1) * rand)));
    const newParameter = {
      costDescription,
      costLabel,
      cost,
      id
    };
    uniqueCostArr.push(newParameter);
    this.setState({
      uniqueCostArr,
      costDescription: '',
      costLabel: '',
      cost: '',
    });
  }

  render() {
    return(
      <div>
        <ul className="costList">
          {
            this.state.uniqueCostArr.map((uniqueCost, index)=> {
              return (
                <UniqueCostItem item={uniqueCost} key={uniqueCost.id} destroy={this.handleDelete}/>
              )
            })
          }
        </ul>
        <p>Add new cost parameter</p>
        <Form onSubmit={this.handleSubmit}>
          <Row>
            <Col md={4}>
              <FormGroup>
                <ControlLabel>Add-On Name</ControlLabel>
                <FormControl
                  name="costLabel"
                  onChange={this.handleChange}
                  value={this.state.costLabel}
                  required
                />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <ControlLabel>Add-On Price</ControlLabel>
                <FormControl
                  name="cost"
                  onChange={this.handleChange}
                  value={this.state.cost}
                  required
                />
              </FormGroup>
            </Col>
            <Col md={3}>
              <FormGroup>
                <Radio
                  checked={this.state.perPerson}
                  onClick={this.handleRadio}
                  name="perPerson"
                >
                  Per Person
                </Radio>
                <Radio
                  checked={this.state.flatFee}
                  onClick={this.handleRadio}
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
                  name="costDescription"
                  onChange={this.handleChange}
                  rows="4"
                  value={this.state.costDescription}
                  required
                />
              </FormGroup>
            </Col>
          </Row>
          <Button
            onSubmit={this.handleSubmit}
            type="submit"
          >
            + Add Parameter
          </Button>
        </Form>
      </div>
    );
  }
};

export default CustomCost;
