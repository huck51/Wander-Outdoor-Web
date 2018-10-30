import React from 'react';
import {
  ControlLabel,
  FormControl,
  FormGroup,
} from 'react-bootstrap';
import StarRatingComponent from 'react-star-rating-component';

const ReviewForm = ({ fValue, change, sValue, sClick, submit }) => {
  return (
    <div>
      <form>
        <FormGroup controlId="formControlsTextarea">
          <ControlLabel>Write a review:</ControlLabel>
          <FormControl
            componentClass="textarea"
            placeholder="Maximum of 250 words..."
            value={fValue}
            onChange={change}
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
            value={sValue}
            className=""
            onStarClick={sClick}
          />
        </div>
        <button
          type="submit"
          className="epSaveBtn"
          onClick={submit}
        >Submit
        </button>
      </form>
    </div>
  );
};

export default ReviewForm;
