import React, { Component } from 'react';
import {
  Col,
  ControlLabel,
  FormControl,
  FormGroup,
  Row,
} from 'react-bootstrap';
import StarRatingComponent from 'react-star-rating-component';
import ReviewCard from '../Components/reviewCard';
import ReviewForm from '../Components/reviewForm';
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
      newRating: 0,
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

  starClick = (nextValue, prevValue, name) => {
    this.setState({ newRating: nextValue });
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
    const postNewReview = this.state.reviews;
    postNewReview.push(newReview);
    this.setState({ reviews: postNewReview });
    axios.post('https://fierce-ridge-55021.herokuapp.com/new-review', axiosOptions)
    .then((response) => {
      console.log(response);
      const length = this.state.reviews.length;
      const reviews = [];
      for (let i = 0; i < length; i++) {
        if (this.state.reviews[i]._id) {
          reviews.push(this.state.reviews[i]._id);
        }
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
      axios.post(`https://fierce-ridge-55021.herokuapp.com/trip-update-reviews`, updateObject).
        then((response) => {
          console.log(response);
          const newTrip = response.data;
          this.setState({
            rating: newTrip.rating,
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
                <Row className="container">
                {
                  this.state.reviews.length === 0 ?
                    <li>No reviews available. Be the first one!</li> :
                  this.state.reviews.map((review, index) => <ReviewCard review={review} index={index} />)
                }
                </Row>
              </ul>
              <ReviewForm
                fValue={this.state.newReview}
                change={this.handleChange}
                sValue={this.state.newRating}
                sClick={this.starClick}
                submit={this.handleSubmit}
              />
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default ViewTrip;
