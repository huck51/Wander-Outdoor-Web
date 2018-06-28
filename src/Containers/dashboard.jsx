import React, { Component } from 'react';
import {
  Row,
  Col,
} from 'react-bootstrap';
import { BounceLoader } from 'react-spinners';
import { Link } from 'react-router-dom';
import './Styles/dashboard.css';


class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      companies: [{ companyName: 'Guide Company', companyAddress: 'Fake company address', companyPhone: 'fake phone number' }],
      loading: false,
    };
  }
  /*
  componentDidMount() {
    axios.get('/companies', id)
      .then((response) => {
        console.log(response);
        this.setState({
          companies: response.data.companies,
          loading: false,
        });
      })
      .catch((err) => {
        console.error(err);
        this.setState({ loading: false });
      });
  }
*/
  render() {
    return (
      <div className="container auto">
        <h1>Company Dashboard</h1>
        <div>
          <Row>
            <Col md={2} mdOffset={5}>
              <BounceLoader
                loading={this.state.loading}
                size={75}
                color="rgb(55,131,182)"
              />
            </Col>
          </Row>
          <ul className="guideUl">
            <Row className="container">
              <Col xs={12} sm={6} md={4} lg={3}>
                <Link to={`/signup/guiding-company`}>
                  <li className="btnCard">
                    <h3 className="addNew">Register New Company</h3>
                    <h1 className="giantPlus">+</h1>
                  </li>
                </Link>
              </Col>
              {this.state.companies.map((company) => {
                return (
                  <Col xs={12} sm={6} md={4} lg={3}>
                    <li className="list">
                      <h3>{company.companyName}</h3>
                      <p>{company.companyAddress}</p>
                      <p>{company.companyPhone}</p>
                      <Link to={`/dashboard/${company.companyName}`}><button className="removeButn">View Company</button></Link>
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

export default Dashboard;
