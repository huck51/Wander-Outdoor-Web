import React, { Component } from 'react';
import axios from 'axios';
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
        <div>
          <ul>
            {this.state.guides.map((guide) => {
              return (
                <li>
                  <h3>{guide.firstName} {guide.lastName}</h3>
                  <p>{guide.companyName}</p>
                  <p>{guide.bio}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default Guides;
