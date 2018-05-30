import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import './Styles/inbox.css';


class Inbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
    };
  }

  render() {
    return (
      <div>
        <h1>INBOX</h1>
        <div className="container">
          <Row>
            <Col xs={12} sm={6} md={3} lg={2}>
              <ul>
                <li className="filterTabs">Unread</li>
                <li className="filterTabs">Read</li>
                <li className="filterTabs">Saved</li>
                <li className="filterTabs">Trash</li>
              </ul>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Inbox;
