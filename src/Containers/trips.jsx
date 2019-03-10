import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { BounceLoader } from 'react-spinners';
import axios from 'axios';
import ProfileList from '../Components/profileList';
import SearchBar from '../Components/searchbar';
import './Styles/trips.css';


class Trips extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trips: [],
      loading: true,
    };
  }

  componentDidMount() {
    this.getAllTrips();
  }

  getAllTrips = () => {
    axios.get('https://fierce-ridge-55021.herokuapp.com/trips')
      .then((result) => {
        // eslint-disable-next-line no-console
        console.log(result);
        this.setState({
          trips: [...result.data],
          loading: false,
        });
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log(err);
        this.setState({
          loading: false,
        });
      });
  }

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const search = this.state.value;
    if (search.trim() === '') {
      this.getAllTrips();
    } else {
      axios.get(`https://fierce-ridge-55021.herokuapp.com/search/Trip/${search}`)
        .then((result) => {
          console.log(result);
          this.setState({
            trips: result.data[0],
            loading: false
          });
        })
        .catch((err) => {
          console.log(err);
          this.setState({ loading: false });
        });
    }
  }

  render() {
    return (
      <div>
        <h1>TRIPS</h1>
        <form onSubmit={this.handleSubmit} >
          <SearchBar
            val={this.state.value}
            change={this.handleChange}
            submit={this.handleSubmit}
          />
        </form>
        <div className="boxOfCards">
          <Row>
            <Col md={2} mdOffset={5}>
              <BounceLoader
                loading={this.state.loading}
                size={75}
                color="rgb(55,131,182)"
              />
            </Col>
          </Row>
          <ProfileList
            heading=""
            listArr={this.state.trips}
            emptyMsg="No trips to display"
          />
        </div>
      </div>
    );
  }
}

export default Trips;
