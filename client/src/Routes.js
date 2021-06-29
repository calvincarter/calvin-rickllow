import React from "react";
import Home from "./Home";
import Account from "./Account";
import Listings from "./Listings";
import Listing from "./Listing";
import { Route, Switch } from "react-router-dom";
import Dimensions from "./Dimensions";
import FourOFourPage from './404Page';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/account">
        <Account />
      </Route>
      <Route exact path="/listings/categories/dimensions">
        <Dimensions />
      </Route>
      <Route exact path="/listings/categories/:category">
        <Listings />
      </Route>
      <Route><FourOFourPage /></Route>
    </Switch>
  );
}

export default Routes;