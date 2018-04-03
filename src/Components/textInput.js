import React, { Component } from 'react';
import './Styles/textInput.css';


class TextInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    }
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange(e) {
    this.setState({value: e.target.value});
  }

  render() {
    return (
      <form>
        <input
          type={this.props.type}
          placeholder={this.props.placeholder}
          value={this.state.value}
          onChange={this.handleOnChange}>
        </input>
      </form>
    );
  }
}

export default TextInput;
