import React, { Component } from 'react';
import FieldGroup from '../Components/fieldGroup';
import './Styles/accountInfo.css';


class AccountInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
    };
  }

  render() {
    return (
      <div>
        <h1>ACCOUNT INFO</h1>
        <div className="container">
          <form>
            <FieldGroup
              type="text"
              label="Test 1"
              placeholder="Placeholder 1"
            />
            <FieldGroup
              type="text"
              label="Test 2"
              placeholder="Placeholder 2"
            />
            <FieldGroup
              type="text"
              label="Test 3"
              placeholder="Placeholder 3"
            />
          </form>
        </div>
      </div>
    );
  }
}

export default AccountInfo;
