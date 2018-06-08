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
            <Col xs={12} sm={6} md={3} lg={2} className="partition">
              <ul className="filterUl">
                <li className="filterTabs"><button className="filterBtn">Unread</button></li>
                <li className="filterTabs"><button className="filterBtn">Read</button></li>
                <li className="filterTabs"><button className="filterBtn">Saved</button></li>
                <li className="filterTabs"><button className="filterBtn">Trash</button></li>
              </ul>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Inbox;
