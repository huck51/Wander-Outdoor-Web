import React, { Component } from 'react';
import {
  Col,
  ControlLabel,
  FormControl,
  FormGroup,
  Row,
} from 'react-bootstrap';
import axios from 'axios';
import StarRatingComponent from 'react-star-rating-component';
import DisplayCard from '../Components/displayCard';
import ProfTopSection from '../Components/profTopSection';
import ReviewCard from '../Components/reviewCard';
import ReviewForm from '../Components/reviewForm';
import './Styles/viewCompany.css';


class ViewCompany extends Component {
  constructor(props) {
    super(props);
    this.state = {
      companyName: '',
      streetAddress: '',
      city: '',
      stateName: '',
      zipCode: '',
      companyPhone: '',
      guides: [],
      trips: [],
      bio: '',
      locations: [],
      permits: [],
      rating: {
        rate: 5,
        numberOfRatings: 0,
      },
      chex: [],
      picture: '',
      reviews: [],
      newReview: '',
      newRating: 0,
    };
  }
  componentDidMount() {
    axios.get(`https://fierce-ridge-55021.herokuapp.com/company/${this.props.match.params.company}`)
      .then((response) => {
        const {
          companyName,
          streetAddress,
          city,
          stateName,
          zipCode,
          companyPhone,
          guides,
          trips,
          bio,
          locations,
          permits,
          rating,
          chex,
          picture,
          reviews
        } = response.data;
        this.setState({
          companyName,
          streetAddress,
          city,
          stateName,
          zipCode,
          companyPhone,
          guides,
          trips,
          bio,
          locations,
          permits,
          chex,
          picture,
          rating,
          reviews,
        });
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.error(err);
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
        company: this.props.match.params.company,
        rating,
      };
      axios.post(`https://fierce-ridge-55021.herokuapp.com/company-update-reviews`, updateObject).
        then((response) => {
          console.log(response);
          const newCompany = response.data;
          this.setState({
            rating: newCompany.rating,
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
    const profPic = {
      'backgroundImage': `url(${this.state.picture})`,
      'backgroundPosition': 'center',
      'backgroundSize': 'contain',
      'backgroundRepeat': 'no-repeat',
    };
    return (
      <div>
        <div className="contain">
          <ProfTopSection
            btnText={false}
            city={this.state.city}
            companyName={false}
            description={this.state.bio}
            name={this.state.companyName}
            phone={this.state.companyPhone}
            picture={this.state.picture}
            price={false}
            rate={this.state.rating.rate}
            stateName={this.state.stateName}
            url={`/company/${this.state.companyCode}`}
          />
          <Row className="mainCard">
            <Col xs={12} sm={12} md={12} lg={12}>
              <h2>Guides</h2>
              <ul className="guideUl">
                <Row className="container">
                {
                  this.state.guides.length === 0 ?
                    <li>No guides available</li> :
                  this.state.guides.map(guide => <DisplayCard item={guide} Url={`/profile/${guide.id}`}/>)
                }
              </Row>
              </ul>
            </Col>
          </Row>
          <Row className="mainCard">
            <Col xs={12} sm={12} md={12} lg={12}>
              <h2>Trips</h2>
              <ul className="guideUl">
                <Row className="container">
                {
                  this.state.trips.length === 0 ?
                    <li>No trips available</li> :
                  this.state.trips.map(trip => <DisplayCard item={trip} Url={`/trips/${trip._id}`} />)
                }
              </Row>
              </ul>
            </Col>
          </Row>
          <Row className="mainCard">
            <Col xs={12} sm={12} md={12} lg={12}>
              <h2>Sports / Activities</h2>
              <ul>
                {
                  this.state.chex.length === 0 ?
                    <li>No activities available</li> :
                  this.state.chex.map(activity => <li className="listCheck">{activity}</li>)
                }
              </ul>
            </Col>
          </Row>
          <Row className="mainCard">
            <Col xs={12} sm={12} md={12} lg={12}>
              <h2>Permited Locations</h2>
              <ul>
                {
                  this.state.locations.length === 0 ?
                    <li>No alternate available</li> :
                  this.state.locations.map(location => <li>{location}</li>)
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

export default ViewCompany;
