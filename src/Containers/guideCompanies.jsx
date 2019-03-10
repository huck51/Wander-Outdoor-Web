import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { BounceLoader } from 'react-spinners';
import axios from 'axios';
import ProfileList from '../Components/profileList';
import SearchBar from '../Components/searchbar';
import './Styles/guideCompanies.css';


class GuideCompanies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      companies: [],
      loading: true,
    };
  }

  componentDidMount() {
    this.getAllCompanies();
  }

  getAllCompanies = () => {
    axios.get('https://fierce-ridge-55021.herokuapp.com/guiding-companies')
      .then((result) => {
        this.setState({
          companies: [...result.data],
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
      this.getAllCompanies();
    } else {
      axios.get(`https://fierce-ridge-55021.herokuapp.com/search/Company/${search}`)
        .then((result) => {
          console.log(result);
          this.setState({
            companies: result.data[0],
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
        <h1>GUIDING COMPANIES</h1>
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
            listArr={this.state.companies}
            emptyMsg="No companies matching those parameters"
          />
        </div>
      </div>
    );
  }
}

export default GuideCompanies;
