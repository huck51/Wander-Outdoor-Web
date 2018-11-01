import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import axios from 'axios';
import DisplayCard from '../Components/displayCard';
import './Styles/addGuide.css';


class AddGuide extends Component {
  constructor(props) {
    super(props);
    this.state = {
      guides: [],
      addGuides: [],
      subError: false,
    };
  }

  select = (index) => {
    console.log(index);
    const tempGuides = this.state.guides;
    const tempAddGuides = this.state.addGuides;
    tempGuides[index].selected = !tempGuides[index].selected;
    tempAddGuides[index].selected = !tempAddGuides[index].selected;
    this.setState({
      guides: tempGuides,
      addGuides: tempAddGuides,
    });
  }

  toggleError = () => {
    this.setState({ subError: true });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const addGuides = this.state.addGuides;
    const guides = [];
    for (let i = 0; i <addGuides.length; i++) {
      if (addGuides[i].selected) {
        guides.push(addGuides[i]._id);
      }
    }
    if (guides.length < 1) {
      this.toggleError();
      return;
    }
    const payload = {
      companyCode: this.props.match.params.company,
      guides
    }
    axios.post('https://fierce-ridge-55021.herokuapp.com/add-guides-to-company', payload)
      .then(() => {
        window.location = `/dashboard/${this.props.match.params.company}/guides`;
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log(err);
      });
  }

  componentDidMount() {
    axios.get(`https://fierce-ridge-55021.herokuapp.com/guides/${this.props.match.params.company}`)
      .then((response) => {
        console.log(response);
        const guides = [...response.data];
        const addGuides = [];
        for (let i = 0; i < guides.length; i++) {
          guides[i].selected = false;
          guides[i].index = i;
          addGuides[i] = {
            _id: guides[i]._id,
            selected: false,
          };
        }
        this.setState({
          guides,
          addGuides,
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }
  render() {
    const selectText = {
      color: 'rgb(40, 166, 76)',
      textAlign: 'center',
      margin: '2em auto',
    };
    const { subError } = this.state;
    const hideWarning = {
      visibility: 'hidden',
    };
    return (
      <div>
        <h1>Add Guide</h1>
        <button onClick={this.handleSubmit}>Add Selected Guides</button>
        <div style={subError ? {color: 'red', padding: '1em'} : hideWarning}>
          <p>*No guides selected. You must select at least one guide before submitting.</p>
        </div>
        <ul className="guideUl">
          <Row className="container">
            {this.state.guides.map((guide) => {
              return (
                <Col xs={12} sm={6} md={4} lg={3}>
                  <li className={this.state.guides[guide.index].selected ? `list cursor selectedCard` : `list cursor`} onClick={() => this.select(guide.index)}>
                    <div className="thumbox" style={{marginBottom: 0}}>
                      <div
                        style={
                          {
                            backgroundImage: `url(${guide.picture})`,
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: '100% auto',
                            backgroundColor: 'white',
                          }
                        }
                        className="cardImg"
                      />
                      <div className="caption">
                        <h3>{guide.name}</h3>
                        <p>{`${guide.city}, ${guide.stateName}`}</p>
                      </div>
                      <p style={selectText}>
                        <strong>{this.state.guides[guide.index].selected ? 'SELECTED' : ''}</strong>
                      </p>
                    </div>
                  </li>
                </Col>
              );
            })}
          </Row>
        </ul>
      </div>
    );
  }
}

export default AddGuide;
