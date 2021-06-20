import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand d-lg-none">
          <img src="/images/rickllow_logo.png" className="img-fluid Navbar-logo" alt="rickllow logo"/>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" 
          aria-controls="navbarSupportedContent" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink to="/listings" className="Navbar-link" aria-current="page">Listings</NavLink>
            </li>
          </ul>
          <Link to="/" className="navbar-brand d-none d-lg-block">
            <img src="/images/rickllow_logo.png" className="img-fluid Navbar-logo" alt="rickllow logo"/>
          </Link>
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink to="/account" className="Navbar-link" aria-current="page">Account</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;