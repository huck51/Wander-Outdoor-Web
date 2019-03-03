import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import './Styles/uniqueCostItem.css';

const UniqueCostItem = ({item, destroy})=> {
  console.log(item);
  return (
    <li className="uniqueCostItemLI" >
      <div>
        <Row>
          <Col xs={1} md={1} lg={1}>
            <Button className="removeLiBtn" onClick={destroy} value={item.id}>X</Button>
          </Col>
          <Col xs={10} md={10} lg={10}>
            <p>{`${item.costLabel} - $${item.cost}/person - ${item.costDescription}`}</p>
          </Col>
        </Row>
      </div>
    </li>
  );
};

export default UniqueCostItem;
