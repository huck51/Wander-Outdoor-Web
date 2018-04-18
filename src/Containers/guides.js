import React, { Component } from 'react';
import './Styles/guides.css';


class Guides extends Component {
  constructor(props) {
    super(props);
    this.state = {
      guides: [],
    }
  }

  componentDidMount() {
    axios.get('https://fierce-ridge-55021.herokuapp.com/guides')
      .then((result) => {
        console.log(result);
        this.setState({
          guides: [...result.data],
        });
      });
  }

  render() {
    return (
      <div>
        <h1>GUIDES</h1>
      </div>
    );
  }
}

export default Guides;
