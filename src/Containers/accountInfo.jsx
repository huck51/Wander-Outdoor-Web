import React, { Component } from 'react';
import { FormGroup, HelpBlock, Radio } from 'react-bootstrap';
import FieldGroup from '../Components/fieldGroup';
import './Styles/accountInfo.css';


class AccountInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      test1: '',
      test2: '',
      test3: '',
      roleGroup: '',
      explorer: true,
      guide: false,
    };
  }

  componentDidMount() {

  }

  handleSubmit = (e) => {

  }

  handleDelete = () => {

  }

  render() {
    return (
      <div>
        <h1>ACCOUNT INFO</h1>
        <div className="container">
          <form className="sizeControl">
            <FormGroup>
              <Radio
                onClick={this.handleClick}
                value="guide"
                name="roleGroup"
                inline
                checked={this.state.guide}
                >Guide</Radio>
              <Radio
                onClick={this.handleClick}
                value="explorer"
                name="roleGroup"
                inline
                checked={this.state.explorer}
                >Expolorer</Radio>
              <HelpBlock>*Please only select "Guide" if you are a certified guide currently employed by a company</HelpBlock>
            </FormGroup>
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
            <button
              className="epSaveBtn"
              type="submit"
              onClick={this.handleSubmit}
            >Save
            </button>
            <FormGroup>
              <button className="btn-danger deleteBtn" onClick={this.handleDelete}>Delete My Account</button>
              <HelpBlock>*Deleting your acccount is a permanent action and cannot be undone!!!</HelpBlock>
            </FormGroup>
          </form>
        </div>
      </div>
    );
  }
}

export default AccountInfo;
