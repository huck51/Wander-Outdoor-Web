import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { BounceLoader } from 'react-spinners';
import axios from 'axios';
import ProfileList from '../Components/profileList';
import './Styles/guides.css';


class Guides extends Component {
  constructor(props) {
    super(props);
    this.state = {
      guides: [],
      loading: true,
    };
  }

  componentDidMount() {
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

  render() {
    return (
      <div>
        <h1>GUIDES</h1>
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
            emptyMsg="No guides to display"
          />
        </div>
      </div>
    );
  }
}

export default Guides;
