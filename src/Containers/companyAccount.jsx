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
    console.log(this.props.match.params.company);
    axios.get(`https://fierce-ridge-55021.herokuapp.com/company/account/info/${this.props.match.params.company}`)
      .then((response) => {
        const { companyCode, companyName } = response.data
        console.log(response.data);
        this.setState({
          companyCode,
          companyName
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <h1>{`${this.state.companyName} Account Details`}</h1>
        <p>Company Code: {this.state.companyCode}</p>
        <button>Delete Company</button>
      </div>
    );
  }
}

export default CompanyAccount;
