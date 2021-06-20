import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import './Listings.css';
import ListingCard from './ListingCard';
import RickllowApi from './api';
import FourOFour from './404Page';

const Listings = () => {
  const { category } = useParams();
  // Process to get the query param values, if there are any:
  // useLocation hook gives back an object containing info about the URL.  One of the properties is search, which contains
  // the query params part of a URL.  If our query param was ?search_term=earth, it would return that whole thing as a string.
  const { search } = useLocation();
  // URLSearchParams is a JS class that has useful methods to modify or get info from a URL param.  The get method simply gets
  // the value of a search parameter.  If it doesn't find the parameter you're looking for, it returns null.  
  const searchTerm = new URLSearchParams(search).get('search_term');
  const [isLoading, setIsLoading] = useState(true);
  const [locations, setLocations] = useState([]);
  const [title, setTitle] = useState("");

  useEffect(() => {
    async function getLocations() {
      // since we're using this component for a few different routes, we need to check multiple conditions
      let res;
      // first, if this is a /locations/categories/:category route
      if (category) {
        // if there's a :category param, we pass that into our api method for categories
        res = await RickllowApi.getLocationsByCategory(category);
        // we set our title to whatever the category is.  if it's not any of these 3 or 'dimensions', our api method
        // will return an error message to us and our locations state will be a string, which we handle below.  if
        // :category is 'dimensions', then this component won't render in the first place, <Dimensions /> will.
        if (category === 'planets') {
          setTitle("Planets");
        }

        if (category === 'space-stations') {
          setTitle("Space Stations");
        }

        if (category === 'misc') {
          setTitle("Everything Else");
        }
      } else if (searchTerm) {
        // we also handle if there is a ?search_term query parameter.  since we can't search in a certain category, this will
        // only run if there is no :category param.  this is supposed to run only in a /locations route.
        setTitle(`Search Results For "${searchTerm}"`);
        res = await RickllowApi.getAllLocations(searchTerm);       
      } else {
        setTitle("All Listings");
        res = await RickllowApi.getAllLocations();
      }

      setLocations(res);
      setIsLoading(false);
    }
    getLocations();
  }, [searchTerm, category]);
  
  if (isLoading) {
    return <h1 className="my-4">Loading...</h1>;
  }

  if (typeof locations === 'string') {
    return <FourOFour message={locations} />;
  }

  return (
    <div className="Listings container">
      <h1 className="my-4">{title}({locations.length})</h1>
      <div className="row justify-content-center">
        {locations.map(l => (
          <div key={l.name} className="Listings-columns col-12 col-md-6 col-lg-4 col-xxl-3 mb-4">
            {/* Below, we have to pass in cost as an object, because we need to know for every location if that location
            has an alternate currency.  If it does, we have to show that plus the normal USD cost. */}
            <ListingCard 
              name={l.name} 
              cost={{ cost: l.cost, altCost: l.alt_cost_amt, altCurr: l.alt_cost_curr }} 
              image={l.image} 
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Listings;