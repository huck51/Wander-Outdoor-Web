import React, { Component } from 'react';
import axios from 'axios';
import './Styles/removeGuide.css';


class RemoveGuide extends Component {
  constructor(props) {
    super(props);
    this.state = {
      guides: [],
    };
  }

  componentDidMount() {
    axios.get('https://fierce-ridge-55021.herokuapp.com/guides')
      .then((results) => {
        this.setState({
          guides: [...results.data],
        });
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.error(err);
      });
  }

  deleteGuide = (e) => {
    const id = e.target.value;
    console.log(id);
    axios.post('https://fierce-ridge-55021.herokuapp.com/remove-guide', { id: id })
      .then((response) => {
        console.log(response);
        this.componentDidMount();
        alert(`Removed ${response.data.firstName} from your list of guides`);
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.error(err);
      });
  }

  render() {
    return (
      <div>
        <h1>Remove Guide</h1>
        <div className="container">
          <ul>
            {this.state.guides.map((guide) => {
              return (
                <li className="list">
                  <h3>{guide.firstname} {guide.lastName}</h3>
                  <h5>{guide.email}</h5>
                  <h5>{guide.phone}</h5>
                  <button className="removeButn" value={guide._id} onClick={this.deleteGuide}>Remove Guide</button>
                </li>
              );
            })
          }
          </ul>
        </div>
      </div>
    );
  }
}

export default RemoveGuide;
