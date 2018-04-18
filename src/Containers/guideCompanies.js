import React, { Component } from 'react';
import axios from 'axios';
import './Styles/guideCompanies.css';


class GuideCompanies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      companies: [],
    }
  }

  componentDidMount() {
    axios.get('https://fierce-ridge-55021.herokuapp.com/guiding-companies')
      .then((result) => {
        console.log(result);
        this.setState({
          companies: [...result.data],
        });
      });
  }

  render() {
    return (
      <div>
        <h1>GUIDING COMPANIES</h1>
      </div>
    );
  }
}

export default GuideCompanies;
