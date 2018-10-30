import React, { Component } from 'react';
import {
  Col,
  ControlLabel,
  FormControl,
  FormGroup,
  Row,
} from 'react-bootstrap';
import StarRatingComponent from 'react-star-rating-component';
import axios from 'axios';
import './Styles/viewTrip.css';

class ViewTrip extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      company: '',
      city: '',
      stateName: '',
      description: '',
      price: '',
      guides: [],
      picture: '',
      reviews: [],
      newReview: '',
      rating: {
        rate: 5,
        numberOfRatings: 0
      },
    }
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    axios.get(`https://fierce-ridge-55021.herokuapp.com/trip/${id}`)
      .then((result) => {
        const {
          name,
          company,
          city,
          stateName,
          description,
          price,
          guides,
          picture,
          reviews,
          rating
        } = result.data;
        console.log(result);
        this.setState({
          name,
          company,
          city,
          stateName,
          description,
          price,
          guides,
          picture,
          reviews,
          rating
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.state.reviews.push(this.state.newReview);
    const axiosOptions = {
      fierceIce: localStorage.getItem('fierceIce'),
      reviews: this.state.reviews,
    };
    axios.post('url', axiosOptions)
    .then((response) => {
      console.log(response);
      this.setState({ newReview: '' });
    })
    .catch((err) => {
      console.error(err);
    });
  }

  render() {
    return (
      <div>
        <div className="contain">
          <Row className="mainCard">
            <Col xs={12} sm={12} md={4} lg={4}>
              <img src={this.state.picture} alt="Profile Pic" className="proPic"/>
            </Col>
            <Col xs={12} sm={12} md={8} lg={8}>
              <Row>
                <Col xs={12} sm={12} md={12} lg={12}>
                  <div className="">
                    <h2 className="basicInfo2">{this.state.name}</h2>
                    <h4 className="basicInfo4">{this.state.companyName}</h4>
                    <h4 className="basicInfo4">{this.state.city}, {this.state.stateName}
                    </h4>
                    <StarRatingComponent
                      name={this.state.companyName}
                      starColor="#3783B6"
                      emptyStarColor="#B5D994"
                      value={this.state.rating.rate}
                      className="starRating"
                    />
                  <h4 className="basicInfo4">{`$${this.state.price}`}</h4>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col xs={12} sm={12} md={12} lg={12}>
                  <div className="">
                    <hr className="cardBreak" />
                    <div className="contain">
                      <p className="bio">{this.state.description}</p>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className="mainCard">
            <Col xs={12} sm={12} md={12} lg={12}>
              <h2>Guides</h2>
              <ul>
                {
                  this.state.guides.length === 0 ?
                    <li>No guides available</li> :
                  this.state.guides.map(guide => <li>{guide.name}</li>)
                }
              </ul>
            </Col>
          </Row>
          <Row className="mainCard">
            <Col xs={12} sm={12} md={12} lg={12}>
              <h2>Reviews</h2>
              <ul>
                {
                  this.state.reviews.length === 0 ?
                    <li>No reviews available. Be the first one!</li> :
                  this.state.reviews.map(review => <li>{review}</li>)
                }
              </ul>
              <div>
                <form>
                  <FormGroup controlId="formControlsTextarea">
                    <ControlLabel>Write a review:</ControlLabel>
                    <FormControl
                      componentClass="textarea"
                      placeholder="Maximum of 250 words..."
                      value={this.state.newReview}
                      onChange={this.handleChange}
                      name="newReview"
                      className="textArea"
                      rows="10"
                    />
                  </FormGroup>
                  <button
                    type="submit"
                    className="epSaveBtn"
                    onClick={this.handleSubmit}
                  >Submit
                  </button>
                </form>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default ViewTrip;
