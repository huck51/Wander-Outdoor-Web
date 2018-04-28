import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Styles/removeTrip.css';


class RemoveTrip extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trips: [],
    };
  }

  componentDidMount() {
    axios.get('https://fierce-ridge-55021.herokuapp.com/trips')
      .then((results) => {
        this.setState({
          trips: [...results.data],
        });
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.error(err);
      });
  }

  deleteTrip = (e) => {
    const id = e.target.value;
    console.log(id);
    axios.post('https://fierce-ridge-55021.herokuapp.com/remove-trip', { id: id })
      .then((response) => {
        console.log(response);
        this.componentDidMount();
        alert(`Removed ${response.data.name} from your list of trips`);
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.error(err);
      });
  }

  render() {
    return (
      <div>
        <h1>Manage Trips</h1>
        <Link to="/company/add-trip"><button className="addButn">+Add Trip</button></Link>
        <div className="container">
          <ul>
            {this.state.trips.map((trip) => {
              return (
                <li className="list">
                  <h3>{trip.name}</h3>
                  <h5>{trip.location}</h5>
                  <h5>{trip.price}</h5>
                  <button className="removeButn" value={trip._id} onClick={this.deleteTrip}>Remove Guide</button>
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

export default RemoveTrip;
