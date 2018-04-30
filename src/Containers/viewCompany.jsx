import React, { Component } from 'react';
import axios from 'axios';
import './Styles/viewCompany.css';


class ViewCompany extends Component {
  constructor(props) {
    super(props);
    this.state = {
      company: {},
    };
  }
  componentDidMount() {
    axios.get(`https://fierce-ridge-55021.herokuapp.com/company/${this.props.match.params.companyName}`)
      .then((response) => {
        this.setState({
          company: response.data,
        });
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.error(err);
      });
  }

  render() {
    return (
      <div className="container">
        <h1>{this.state.company.companyName}</h1>
        <h5>{this.state.company.companyAddress}</h5>
        <h5>{this.state.company.companyPhone}</h5>
      </div>
    );
  }
}

export default ViewCompany;
