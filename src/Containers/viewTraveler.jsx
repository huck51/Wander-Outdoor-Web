import React, { Component } from 'react';
import { Col, Row, } from 'react-bootstrap';
import axios from 'axios';
import DisplayCard from '../Components/displayCard';
import ProfileList from '../Components/profileList';
import ProfTopSection from '../Components/profTopSection';
import ReviewCard from '../Components/reviewCard';
import ReviewForm from '../Components/reviewForm';
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
      axios.post(`https://fierce-ridge-55021.herokuapp.com/guide-update-reviews`, updateObject)
        .then((response) => {
          console.log(response);
          const newGuide = response.data;
          this.setState({
            rating: newGuide.rating,
            newRating: 0,
            newReview: '',
          });
        })
        .catch((err) => {
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
          <ProfTopSection
            btnText="Request Guide"
            city={this.state.city}
            companyName={this.state.companyName}
            description={this.state.bio}
            name={`${this.state.firstName} ${this.state.lastName}`}
            picture={this.state.picture}
            price={false}
            rate={this.state.rating.rate}
            stateName={this.state.stateName}
            url={`/company/${this.state.companyCode}`}
          />
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
              <ul className="guideUl">
                <Row className="container">
                {
                  this.state.tripsQualified.length === 0 ?
                    <li>Not qualified to lead any trips.</li> :
                  this.state.tripsQualified.map(trip => <DisplayCard item={trip} Url={`/trips/${trip._id}`} className="listCheck" />)
                }
              </Row>
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

export default ViewTraveler;
