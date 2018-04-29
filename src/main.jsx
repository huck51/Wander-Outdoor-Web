import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Contact from './Containers/contact';
import Home from './Containers/home';
import SignUp from './Containers/signUp';
import Login from './Containers/login';
import GuidingCompanies from './Containers/guideCompanies';
import Guides from './Containers/guides';
import About from './Containers/about';
import Results from './Containers/results';
import SignUpTravelers from './Containers/signUpTravelers';
import SignUpGuides from './Containers/signUpGuides';
import SignUpGC from './Containers/signUpGC';
import CompanyDashboard from './Containers/companyDashboard';
import AddTrip from './Containers/addTrip';
import FourOhFour from './Containers/fourOhFour';
import RemoveTrip from './Containers/removeTrip';
import AddGuide from './Containers/addGuide';
import RemoveGuide from './Containers/removeGuide';
import ViewCompany from './Containers/viewCompany';
import ViewGuide from './Containers/viewGuide';
import ViewTrip from './Containers/viewTrip';
import ViewTraveler from './Containers/viewTraveler';

// Reorganize routes

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/signup/traveler" component={SignUpTravelers} />
      <Route exact path="/signup/guide" component={SignUpGuides} />
      <Route exact path="/signup/guiding-company" component={SignUpGC} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/guiding-companies" component={GuidingCompanies} /> // UPDATE ROUTE
      <Route exact path="/guides" component={Guides} />
      <Route exact path="/guides/:guideID" component={ViewGuide} />
      <Route exact path="/about" component={About} />
      <Route exact path="/results" component={Results} />
      <Route exact path="/company/dashboard" component={CompanyDashboard} />
      <Route exact path="/company/add-trip" component={AddTrip} />
      <Route exact path="/company/remove-trip" component={RemoveTrip} />
      <Route exact path="/company/add-guide" component={AddGuide} />
      <Route exact path="/company/remove-guide" component={RemoveGuide} />
      <Route exact path="/company/:companyID" component={ViewCompany} />
      <Route exact path="/trips/trip" component={ViewTrip} /> // UPDATE ROUTE
      <Route exact path="/travelers/traveler" component={ViewTraveler} /> //UPDATE ROUTE
      <Route exact path="/contact" component={Contact} />
      <Route component={FourOhFour} />
    </Switch>
  </main>
);

export default Main;
