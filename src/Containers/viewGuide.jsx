import React, { Component } from 'react';
import axios from 'axios';
import './Styles/viewGuide.css';


class ViewGuide extends Component {
  constructor(props) {
    super(props);
    this.state = {
      guide: {},
    };
  }
  componentDidMount() {
    axios.get(`https://fierce-ridge-55021.herokuapp.com/guides/${this.props.match.params.username}`)
      .then((response) => {
        this.setState({
          guide: response.data,
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
        <h1>{this.state.guide.firstName} {this.state.guide.lastName}</h1>
        <h5>{this.state.guide.companyName}</h5>
        <h5>{this.state.guide.bio}</h5>
        <h5>{this.state.guide.certs}</h5>
      </div>
    );
  }
}

export default ViewGuide;
