import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HigherAuth from './higherAuth';
import Auth from './auth';
import AuthLoad from './Components/authLoad';
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
const auth = new Auth();

const handleAuthentication = ({ location }) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
};

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/signup/traveler" component={SignUpTravelers} />
      <Route exact path="/signup/guide" component={SignUpGuides} />
      <Route exact path="/signup/guiding-company" component={SignUpGC} />
      <Route exact path="/guiding-companies" component={GuidingCompanies} /> // UPDATE ROUTE
      <Route exact path="/guides" component={Guides} />
      <Route exact path="/guides/:username" render={props => <ViewGuide auth={auth} {...props} />} />
      <Route exact path="/about" component={HigherAuth(auth, About)} />
      <Route exact path="/results" component={Results} />
      <Route exact path="/company/dashboard" render={props => <CompanyDashboard auth={auth} {...props} />} />
      <Route exact path="/company/add-trip" component={AddTrip} />
      <Route exact path="/company/remove-trip" component={RemoveTrip} />
      <Route exact path="/company/add-guide" component={AddGuide} />
      <Route exact path="/company/remove-guide" component={RemoveGuide} />
      <Route exact path="/company/:companyName" render={props => <ViewCompany {...props} />} />
      <Route exact path="/trips/trip" component={ViewTrip} /> // UPDATE ROUTE
      <Route exact path="/travelers/traveler" component={ViewTraveler} /> //UPDATE ROUTE
      <Route exact path="/contact" component={Contact} />
      <Route
        exact
        path="/authload"
        render={(props) => {
          handleAuthentication(props);
          return <AuthLoad {...props} />
        }}
      />
      <Route component={FourOhFour} />
      <Route exact path="/404-not-found" component={FourOhFour} />
    </Switch>
  </main>
);

export default Main;
