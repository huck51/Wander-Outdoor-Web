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
import ReviewCard from '../Components/reviewCard';
import './Styles/viewTraveler.css';


class ViewTraveler extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      companyName: '',
      username: '',
      picture: '',
      bio: '',
      stats: [],
      tripsQualified: [],
      tripsCompleted: [],
      certs: [],
      activities: [],
      rating: {
        rate: 5,
        numberOfRatings: 0,
      },
      roleGroup: '',
      city: '',
      stateName: '',
      reviews: [],
      newReview: '',
      newRating: 0,
      chex: [],
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    console.log(id);
    axios.post('https://fierce-ridge-55021.herokuapp.com/find-user', {id})
      .then((response) => {
        console.log(response);
        const {
          firstName,
          lastName,
          companyName,
          picture,
          bio,
          stats,
          tripsQualified,
          tripsCompleted,
          certs,
          activities,
          rating,
          roleGroup,
          city,
          stateName,
          reviews,
          chex,
        } = response.data;
        const name = localStorage.getItem('name');
        this.setState({
          username: name ? name : 'Anonymous',
          firstName,
          lastName,
          companyName,
          picture,
          bio,
          stats,
          tripsQualified,
          tripsCompleted,
          certs,
          activities,
          rating,
          roleGroup,
          city,
          stateName,
          reviews,
          chex,
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }

  starClick = (nextValue, prevValue, name) => {
    this.setState({ newRating: nextValue });
  }

  starHover = (nextValue, prevValue, name) => {
    this.setState({ newRating: nextValue });
  }

  starHoverOut = (nextValue, prevValue, name) => {
    this.setState({ newRating: prevValue });
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const newReview = {
      author: this.state.username,
      text: this.state.newReview,
      date: new Date().toUTCString(),
      rate: this.state.newRating,
    };
    if (!newReview.rate) {
      return alert('Must Provide a star rating');
    }
    const axiosOptions = {
      newReview
    };
    axios.post('https://fierce-ridge-55021.herokuapp.com/new-review', axiosOptions)
    .then((response) => {
      console.log(response);
      const length = this.state.reviews.length;
      const reviews = [];
      for (let i = 0; i < length; i++) {
        reviews.push(this.state.reviews[i]._id);
      }
      reviews.push(response.data._id);
      const rating = this.state.rating;
      if (!rating.numberOfRatings) {
        rating.rate = this.state.newRating;
        rating.numberOfRatings = 1;
      } else {
        const backRate = rating.rate * rating.numberOfRatings;
        rating.numberOfRatings++;
        rating.rate = (backRate + this.state.newRating)/rating.numberOfRatings;
      }
      const updateObject = {
        reviews,
        id: this.props.match.params.id,
        rating,
      };
      axios.post(`https://fierce-ridge-55021.herokuapp.com/guide-update-reviews`, updateObject).
        then((response) => {
          console.log(response);
          const newGuide = response.data;
          this.setState({
            rating: newGuide.rating,
            newRating: 0,
            newReview: '',
          });
        }).
        catch((err) => {
          console.log(err);
        });
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
              <img src={this.state.picture} alt="Profile" className="proPic"/>
            </Col>
            <Col xs={12} sm={12} md={8} lg={8}>
              <Row>
                <Col xs={12} sm={12} md={12} lg={12}>
                  <div className="">
                    <h2 className="basicInfo2">{this.state.firstName} {this.state.lastName}</h2>
                    <h4 className="basicInfo4">{this.state.roleGroup}</h4>
                    <h4 className="basicInfo4">{this.state.companyName}</h4>
                    <h4 className="basicInfo4">{this.state.city}, {this.state.stateName}
                    </h4>
                    <StarRatingComponent
                      name={this.state.firstName}
                      starColor="#3783B6"
                      emptyStarColor="#B5D994"
                      value={this.state.rating.rate}
                      className="starRating"
                    />
                  </div>
                </Col>
              </Row>
              <Row>
                <Col xs={12} sm={12} md={12} lg={12}>
                  <div className="">
                    <hr className="cardBreak" />
                    <div className="contain">
                      <p className="bio">{this.state.bio}</p>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className="mainCard">
            <Col xs={12} sm={12} md={12} lg={12}>
              <h2>Activities</h2>
              <ul>
                {
                  this.state.chex.length === 0 ?
                    <li>No activities</li> :
                  this.state.chex.map(check => <li className="listCheck">{check}</li>)
                }
              </ul>
            </Col>
          </Row>
          <Row className="mainCard">
            <Col xs={12} sm={12} md={12} lg={12}>
              <h2>Trips</h2>
              <ul>
                {
                  this.state.tripsQualified.length === 0 ?
                    <li>Not qualified to lead any trips.</li> :
                  this.state.tripsQualified.map(trip => <li>{trip.name}</li>)
                }
              </ul>
            </Col>
          </Row>
          <Row className="mainCard">
            <Col xs={12} sm={12} md={12} lg={12}>
              <h2>Past Trips</h2>
              <ul>
                {
                  this.state.tripsCompleted.length === 0 ?
                    <li>No trips completed</li> :
                  this.state.tripsCompleted.map(trip => <li>{trip.name}</li>)
                }
              </ul>
            </Col>
          </Row>
          <Row className="mainCard">
            <Col xs={12} sm={12} md={12} lg={12}>
              <h2>Certifications</h2>
              <ul>
                {
                  this.state.certs.length === 0 ?
                    <li>No certifications</li> :
                  this.state.certs.map(cert => <li>{cert}</li>)
                }
              </ul>
            </Col>
          </Row>
          <Row className="mainCard">
            <Col xs={12} sm={12} md={12} lg={12}>
              <h2>Reviews</h2>
              <ul>
                <Row className="container">
                  {
                    this.state.reviews.length === 0 ?
                      <li>No reviews. Be the first one!</li> :
                    this.state.reviews.map((review, index) => {
                      if (!review) {
                        return (<div />);
                      } else {
                        return (<ReviewCard review={review} index={index} />);
                      }
                    })
                  }
                </Row>
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
                  <div>
                    <p style={{ marginBottom: 0 }}><strong>Star Rating:</strong></p>
                    <StarRatingComponent
                      name="newReview"
                      starColor="#3783B6"
                      emptyStarColor="#B5D994"
                      value={this.state.newRating}
                      className=""
                      onStarClick={this.starClick}
                    />
                  </div>
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

export default ViewTraveler;
