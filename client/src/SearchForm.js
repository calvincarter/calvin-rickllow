import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './SearchForm.css';

const SearchForm = ({ classOrNoClass }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const history = useHistory();
  
  const handleChange = evt => {
    setSearchTerm(evt.target.value);
  }

  const handleSubmit = evt => {
    evt.preventDefault();
    history.push(`/listings?search_term=${searchTerm}`);
  }

  return (
    <form className={classOrNoClass ? classOrNoClass : ""} onSubmit={handleSubmit}>
      <div className="input-container">
        <input 
          type="text" 
          className="form-control" 
          placeholder="Enter a location name" 
          value={searchTerm} 
          onChange={handleChange}
          required 
        />
        <button><i className="fas fa-search text-primary SearchForm-btn"></i></button>
      </div>
    </form>
  );
}

export default SearchForm;