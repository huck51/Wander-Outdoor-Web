import React, { Component } from 'react';
import axios from 'axios';
import DisplayCard from '../Components/displayCard';
import './Styles/addGuide.css';


class AddGuide extends Component {
  constructor(props) {
    super(props);
    this.state = {
      guides: []
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }
  handleSubmit = (e) => {
    e.preventDefault();
    axios.post('https://fierce-ridge-55021.herokuapp.com/signup/guide', newGuide)
      .then(() => {
        window.location = '/guides';
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
        this.setState({
          guides: [...response.data],
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }
  render() {
    return (
      <div>
        <h1>Add Guide</h1>
        <ul className="guideUl">
          <Row className="container">
            {this.state.guides.map((guide) => {
              return (
                <DisplayCard item={guide} Url={`/profile/${guide.id}`} />
              );
            })}
          </Row>
        </ul>
      </div>
    );
  }
}

export default AddGuide;
