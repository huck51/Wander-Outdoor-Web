import React, { Component } from 'react';
import './Styles/textInput.css';


class TextInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    }
  }

  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="placeholder"
          value={this.state.value}
          onChange={this.handleOnChange}>
        </input>
      </form>
    );
  }
}

export default TextInput;
