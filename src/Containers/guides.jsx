import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CircleLoader } from 'react-spinners';
import axios from 'axios';
import './Styles/guides.css';


class Guides extends Component {
  constructor(props) {
    super(props);
    this.state = {
      guides: [],
      loading: true,
    };
  }

  componentDidMount() {
    axios.get('https://fierce-ridge-55021.herokuapp.com/guides')
      .then((result) => {
        // eslint-disable-next-line no-console
        console.log(result);
        this.setState({
          guides: [...result.data],
          loading: false,
        });
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log(err);
        this.setState({
          loading: false,
        });
      });
  }

  render() {
    return (
      <div>
        <h1>GUIDES</h1>
        <div>
          <Row>
            <Col md={2} mdOffset={5}>
              <CircleLoader
                loading={this.state.loading}
                size={75}
              />
            </Col>
          </Row>
          <ul className="guideUl">
            <Row className="container">
              {this.state.guides.map((guide) => {
                return (
                  <Col xs={12} sm={6} md={4} lg={3}>
                    <li className="list">
                      <h3>{guide.firstName} {guide.lastName}</h3>
                      <p>{guide.companyName}</p>
                      <p>{guide.certs}</p>
                      <Link to={`/guides/${guide.username}`}><button className="removeButn">View Guide</button></Link>
                    </li>
                  </Col>
                );
              })}
            </Row>
          </ul>
        </div>
      </div>
    );
  }
}

export default Guides;
