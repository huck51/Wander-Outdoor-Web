import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HigherAuth from './higherAuth';
import AccountInfo from './Containers/accountInfo';
import Auth from './auth';
import AuthLoad from './Components/authLoad';
import Contact from './Containers/contact';
import EditProfile from './Containers/editProfile';
import Home from './Containers/home';
import SignUp from './Containers/signUp';
import Login from './Containers/login';
import GuidingCompanies from './Containers/guideCompanies';
import Guides from './Containers/guides';
import Inbox from './Containers/inbox';
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
      <Route exact path="/about" component={HigherAuth(About)} />
      <Route exact path="/account-info/:id" component={HigherAuth(AccountInfo)} />
      <Route
        exact
        path="/authload"
        render={(props) => {
          handleAuthentication(props);
          return <AuthLoad {...props} />
        }}
      />
      <Route exact path="/company/add-guide" component={AddGuide} />
      <Route exact path="/company/add-trip" component={AddTrip} />
      <Route exact path="/company/:companyName" render={props => <ViewCompany {...props} />} />
      <Route exact path="/company/dashboard" render={props => <CompanyDashboard auth={auth} {...props} />} />
      <Route exact path="/company/remove-trip" component={RemoveTrip} />
      <Route exact path="/company/remove-guide" component={RemoveGuide} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/edit-profile/:id" component={HigherAuth(EditProfile)} />
      <Route exact path="/guides" component={Guides} />
      <Route exact path="/guides/:username" render={props => <ViewGuide auth={auth} {...props} />} />
      <Route exact path="/guiding-companies" component={GuidingCompanies} />
      <Route exact path="/inbox/:id" component={HigherAuth(Inbox)} />
      <Route exact path="/profile/:username" component={ViewTraveler} />
      <Route exact path="/results" component={Results} />
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/signup/guide" component={SignUpGuides} />
      <Route exact path="/signup/guiding-company" component={SignUpGC} />
      <Route exact path="/signup/traveler" component={SignUpTravelers} />
      <Route exact path="/travelers/traveler" component={ViewTraveler} />
      <Route exact path="/trips/trip" component={ViewTrip} />
      <Route component={FourOhFour} />
      <Route exact path="/404-not-found" component={FourOhFour} />
    </Switch>
  </main>
);

export default Main;
