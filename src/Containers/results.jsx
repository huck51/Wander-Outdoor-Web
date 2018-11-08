import React, { Component } from 'react';
import { Checkbox, Col, Row } from 'react-bootstrap';
import { BounceLoader } from 'react-spinners';
import axios from 'axios';
import DisplayCard from '../Components/displayCard';
import SearchBar from '../Components/searchbar';
import './Styles/results.css';


class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      loading: true,
      value: !(this.props.match.params.search) ? '' : this.props.match.params.search,
      companies: true,
      guides: true,
      trips: true,
    };
  }

  componentDidMount() {
    const { search } = this.props.match.params;
    console.log(search);
    axios.get(`https://fierce-ridge-55021.herokuapp.com/results?search=${search}`)
      .then((result) => {
        this.setState({
          results: result.data,
          loading: false,
        });
      })
      .catch((err) => {
        console.log(err);
        this.setState({
          loading: false,
        });
      });
  }

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  }

  handleCheckBoxChange = (e) => {
    const bullsEye = e.target.name;
    this.setState({
      [e.target.name]: !this.state[bullsEye]
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('hey');
    const search = this.state.value;
    this.setState({
      loading: true,
    });
    axios.get(`https://fierce-ridge-55021.herokuapp.com/results?search=${search}`)
      .then((result) => {
        this.setState({
          results: result.data,
          loading: false,
        });
      })
      .catch((err) => {
        console.log(err);
        this.setState({
          loading: false,
        });
      });
  }

  render() {
    return (
      <div>
        <h1>RESULTS</h1>
        <form onSubmit={this.handleSubmit}>
          <SearchBar
            val={this.state.value}
            change={this.handleChange}
            submit={this.handleSubmit}
            />
        </form>
        <div className="checkFilter">
          <p><strong>Showing search results for <em>{this.state.value}</em></strong></p>
          <Checkbox
            inline
            value={this.state.companies}
            onClick={this.handleCheckBoxChange}
            checked={this.state.companies}
            name="companies"
          >Show Companies</Checkbox>
          <Checkbox
            inline
            value={this.state.guides}
            onClick={this.handleCheckBoxChange}
            checked={this.state.guides}
            name="guides"
          >Show Guides</Checkbox>
          <Checkbox
            inline
            value={this.state.trips}
            onClick={this.handleCheckBoxChange}
            checked={this.state.trips}
            name="trips"
          >Show Trips</Checkbox>
        </div>
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
          <ul className="guideUl">
            <Row className="container">
              {
                this.state.results.map((result) => {
                  if (result.roleGroup === 'guide' && this.state.guides) {
                    return (
                      <DisplayCard item={result} Url={`/profile/${result.id}`} />
                    );
                  }
                  if (result.roleGroup === 'company' && this.state.companies) {
                    return (
                      <DisplayCard item={result} Url={`/company/${result.companyCode}`} />
                    );
                  }
                  if (result.roleGroup === 'trip' && this.state.trips) {
                    return (
                      <DisplayCard item={result} Url={`/trips/${result._id}`} />
                    );
                  } else {
                    return null;
                  }
                })
              }
            </Row>
          </ul>
          <div style={
            {
            visibility: this.state.results.length ? 'hidden' : 'visible'
            }
          }>
            <h4>Your search for <em>{`"${this.state.value}"`}</em> did not match any results. Please check your spelling and/or try alternative search terms.</h4>
          </div>
        </div>
      </div>
    );
  }
}

export default Results;
