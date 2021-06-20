// This component is the save button, or the heart icon, on the ListingCard and Listing components.
// Tried to make this as flexible as possible for both use-cases, so there's an option to have the text 'Save'
// next to it, which we use in the Listing component.  This also changes to 'Saved' when the empty heart is clicked,
// then goes back to 'Save' when the full heart is clicked.  We also have to pass in a valid Bootstrap color for the
// heart.
import React, { useState } from 'react';
import './SaveHeart.css';

const SaveHeart = ({ saveText, color }) => {
  const [isEmptyHeartClicked, setIsEmptyHeartClicked] = useState(false);
  const [isFullHeartClicked, setIsFullHeartClicked] = useState(true);

  const heartClick = () => {
    setIsEmptyHeartClicked(!isEmptyHeartClicked);
    setIsFullHeartClicked(!isFullHeartClicked);
  }

  return (
    <>
      <button className="SaveHeart" onClick={heartClick}>
        <i 
          className={`far fa-heart ${isEmptyHeartClicked ? 'd-none' : ''} text-${color}`} 
        ></i>
      </button>
      <button className="SaveHeart" onClick={heartClick}>
        <i 
          className={`fas fa-heart ${isFullHeartClicked ? 'd-none' : ''} text-${color}`}
        ></i>
      </button>
      <span className={saveText ? `SaveHeart-text text-${color}` : 'd-none'}>{`Save${isEmptyHeartClicked ? 'd' : ''}`}</span>
    </>
  );
}

export default SaveHeart;