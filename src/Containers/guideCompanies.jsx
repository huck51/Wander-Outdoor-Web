import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import axios from 'axios';
import ViewCompany from './viewCompany';
import './Styles/guideCompanies.css';


class GuideCompanies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      companies: [],
    };
  }

  componentDidMount() {
    axios.get('https://fierce-ridge-55021.herokuapp.com/guiding-companies')
      .then((result) => {
        this.setState({
          companies: [...result.data],
        });
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <h1>GUIDING COMPANIES</h1>
        <div>
          <ul>
            {this.state.companies.map((company) => {
              return (
                <li className="list">
                  <h3>{company.companyName}</h3>
                  <p>{company.companyAddress}</p>
                  <p>{company.companyPhone}</p>
                  <Link to={`/company/${company.companyName}`}><button className="removeButn">View Company</button></Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default GuideCompanies;
