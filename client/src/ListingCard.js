import React from 'react';
import { Link } from 'react-router-dom';
import './ListingCard.css';
import SaveHeart from './SaveHeart';
import { numberWithCommas } from './helpers';

const ListingCard = ({ name, cost, image }) => {
  return (
    <div className="ListingCard card rounded shadow">
      <div className="ListingCard-img-container">
        <Link to={`/listings/${name}`}>
          <img src={`/images/${image}`} className="card-img-top img-fluid" alt={name} />
        </Link>
        <SaveHeart color="white" />
      </div>
      <div className="card-body rounded-bottom">
        <div className="row align-items-center">
          <div className="col">
            <div className="ListingCard-title">
              <h5 className="card-title">{name}</h5>
            </div>
            {/* Below, we check to see if the cost of living is in another currency.  If it is, we show that currency first,
              followed by the USD equivalent in parentheses.  If not, we just show the USD amount. */}
            <div className="ListingCard-cost">
              <p className="card-text">
                {cost.altCurr ? 
                  `${numberWithCommas(cost.altCost)} ${cost.altCurr} ($${numberWithCommas(cost.cost)})/year` : 
                  `$${numberWithCommas(cost.cost)}/year`
                }
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListingCard;