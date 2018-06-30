import React, { Component } from 'react';
import axios from 'axios';
import './Styles/companyAccount.css';

class CompanyAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      companyCode: '',
    }
  }

  componentDidMount() {
    axios.get(`https://fierce-ridge-55021.herokuapp.com/company/${this.props.match.params.company}`)
      .then((response) => {
        const { companyCode } = response.data
        this.setState({
          companyCode,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <h1>{`${this.props.match.params.company} Account Details`}</h1>
        <p>Company Code: {this.state.companyCode}</p>
        <button>Delete Company</button>
      </div>
    );
  }
}

export default CompanyAccount;
