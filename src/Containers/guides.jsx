import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { BounceLoader } from 'react-spinners';
import axios from 'axios';
import ProfileList from '../Components/profileList';
import SearchBar from '../Components/searchbar';
import './Styles/guides.css';


class Guides extends Component {
  constructor(props) {
    super(props);
    this.state = {
      guides: [],
      loading: true,
      value: '',
    };
  }

  componentDidMount() {
    this.getAllGuides();
  }

  getAllGuides = () => {
    axios.get('https://fierce-ridge-55021.herokuapp.com/guides')
      .then((result) => {
        // eslint-disable-next-line no-console
        console.log(result);
        this.setState({
          guides: [...result.data],
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
      this.getAllGuides();
    } else {
      axios.get(`https://fierce-ridge-55021.herokuapp.com/search/User/${search}`)
        .then((result) => {
          console.log(result);
          this.setState({
            guides: result.data[0],
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
        <h1>GUIDES</h1>
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
            listArr={this.state.guides}
            emptyMsg="No guides matching those parameters"
          />
        </div>
      </div>
    );
  }
}

export default Guides;
