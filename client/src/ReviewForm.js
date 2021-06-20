import React, { useState } from 'react';
import './ReviewForm.css';
import { v4 as uuid } from 'uuid';

const ReviewForm = ({ location }) => {
  const [review, setReview] = useState("");
  
  const handleChange = evt => {
    setReview(evt.target.value);
  }

  const handleSubmit = evt => {
    evt.preventDefault();
    const newReviewObj = {
      id: uuid(),
      text: review,
      user: {
        id: 1,
        username: 'mfierro31'
      }
    };
    location.reviews.push(newReviewObj);
    setReview("");
  }

  return (
    <form className="mb-5" onSubmit={handleSubmit}>
      <div className="input-container">
        <input 
          type="text" 
          className="form-control" 
          placeholder="Leave a review" 
          value={review} 
          onChange={handleChange}
          required 
        />
        <button className="btn btn-primary ReviewForm-btn">Submit</button>
      </div>
    </form>
  );
}

export default ReviewForm;