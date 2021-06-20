import React, { useState } from 'react';
import { isoToLocale } from './helpers';
import './ViewLocationForm.css';

const ViewLocationForm = ({ location }) => {
  // Two-liner to get today's local (Los Angeles) date in string form
  // This line gives us today's date in m/d/yyyy format
  const todayLocal = new Date().toLocaleDateString();
  // This line turns that back into a UTC format, turns it into a string, splits it where the date ends and the time begins,
  // and returns the date in string form in the correct yyyy-mm-dd format
  const todayLocalCorrectFormat = new Date(todayLocal).toISOString().split('T')[0];
  // I did this, because most likely, no one outside of the US is going to see this website, so it'd be better if this project
  // centered around LA time, that way, at most, it will only be 3 hours behind or ahead of a user.
  const INITIAL_STATE = {
    date: "",
    name: "",
    email: ""
  };

  const [formData, setFormData] = useState(INITIAL_STATE);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = evt => {
    const { name, value } = evt.target;
    setFormData(fData => ({ ...fData, [name]: value }));
  }

  const handleSubmit = evt => {
    evt.preventDefault();
    setIsSubmitted(true);
  }
  
  if (isSubmitted) {
    // turns out, it's a real pain to keep the actual value of the form date and display it in plain English.  You can use
    // the Date object's toLocaleDateString to turn the form Date to plain English format, but then it changes the date to 
    // the day before (at some points during the day), because it's using the local date and time.  To prevent that, we can
    // use the isoToLocale function below, taken straight from a stackoverflow article - 
    // https://stackoverflow.com/questions/55427168/is-there-a-function-to-get-the-utc-date-in-the-locale-string-format
    const dateOptions = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    };

    const prettyDate = isoToLocale(new Date(formData.date), undefined, dateOptions);

    return (
      <div className="ViewLocationForm-submitted-container">
        <div>
          <p><b>Viewing {location.name}</b></p> 
          <p><b>with {location.agent.name}</b></p>
          <p><b>on {prettyDate}!</b></p>
          <p><b>{location.agent.name} will email you to settle on a specific time.</b></p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="row justify-content-center">
        <form className="ViewLocationForm text-start" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="date" className="form-label"><b>Pick a date</b></label>
            <input 
              type="date" 
              id="date" 
              name="date" 
              className="form-control" 
              min={todayLocalCorrectFormat}
              onChange={handleChange}
              value={formData.date} 
              required 
            />
          </div>
          <div className="mb-3">
            <label htmlFor="name" className="form-label"><b>Name</b></label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              className="form-control"
              onChange={handleChange}
              value={formData.name}
              required 
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label"><b>Email</b></label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              className="form-control"
              onChange={handleChange}
              value={formData.email} 
              required />
          </div>
          <button className="btn btn-primary">View Location!</button>
        </form>
      </div>
    );
  }
}

export default ViewLocationForm;