import React from 'react';
import { Link } from 'react-router-dom';
import SearchForm from './SearchForm';
import './Home.css';

const Home = () => {
  return (
    <div className="Home">
      <div className="Home-banner-container">
        <img src="/images/home_banner.jpeg" className="img-fluid Home-banner" alt="rick and morty in another dimension"/>
        <h1>Tired of your place in the universe?</h1>
        <SearchForm classOrNoClass="Home-search-form" />
        <h4>We can help you change that.</h4>
      </div>
      <h2 className="mt-3">Search by category</h2>
      <div className="row my-5 mx-3">
        <div className="col-md-3 mb-3">
          <h4><Link to="/listings/categories/planets" className="Home-links">Planets</Link></h4>
          <Link to="/listings/categories/planets">
            <img src="/images/earth.png" className="img-fluid rounded-3" alt="earth" />
          </Link>
        </div>
        <div className="col-md-3 mb-3">
          <h4><Link to="/listings/categories/space-stations" className="Home-links">Space Stations</Link></h4>
          <Link to="/listings/categories/space-stations">
            <img src="/images/citadel_of_ricks.png" className="img-fluid rounded-3" alt="citadel of ricks" />
          </Link>
        </div>
        <div className="col-md-3 mb-3">
          <h4><Link to="/listings/categories/dimensions" className="Home-links">Dimensions</Link></h4>
          <Link to="/listings/categories/dimensions">
            <img src="/images/Cromulon_Dimension.png" className="img-fluid rounded-3" alt="cromulon dimension" />
          </Link>
        </div>
        <div className="col-md-3">
          <h4><Link to="/listings/categories/misc"  className="Home-links">Everything else</Link></h4>
          <Link to="/listings/categories/misc">
            <img src="/images/Anatomy_Park.png" className="img-fluid rounded-3" alt="anatomy park" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;