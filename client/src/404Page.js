import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './404Page.css';

const FourOFourPage = ({ message }) => {
  const history = useHistory();

  const goBack = () => {
    history.goBack();
  }

  useEffect(() => {
    document.body.style.backgroundImage = `url("/images/schrodingers_cats.jpeg")`;
    document.body.style.backgroundPosition = 'center center';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundAttachment = 'fixed';
    document.body.style.backgroundSize = 'cover';

    // This returned callback is our clean-up function.  We have to set all the values of the properties we set
    // above back to nothing, because we don't want this background picture showing up on all of the pages after
    // we navigate away from this page.  When this component unmounts, the below code will run.
    return () => {
      document.body.style.backgroundImage = null;
      document.body.style.backgroundPosition = null;
      document.body.style.backgroundRepeat = null;
      document.body.style.backgroundAttachment = null;
      document.body.style.backgroundSize = null;
    }
  }, []);

  return (
    <div className="FourOFourPage container">
      <div className="row justify-content-center align-items-center">
        <div className="col">
          <h1 className="header-text">Uh oh, bro.</h1>
          <h1 className="header-text">404, bro.</h1>
          <h1 className="my-4 subheader-text">Sorry, bro.  {message ? message : "Can't find what you're looking for."}</h1>
          <button className="btn btn-info me-5" onClick={goBack}>Go back</button>
          <Link to="/" className="btn btn-primary">Go home</Link>
        </div>
      </div>
    </div>
  );
}

export default FourOFourPage;