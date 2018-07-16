import React from 'react';
import { Switch, Route } from 'react-router-dom';
import About from './Containers/about';
import AccountInfo from './Containers/accountInfo';
import AddGuide from './Containers/addGuide';
import AddTrip from './Containers/addTrip';
import Auth from './auth';
import AuthLoad from './Components/authLoad';
import CompanyAccount from './Containers/companyAccount';
import CompanyDashboard from './Containers/companyDashboard';
import Contact from './Containers/contact';
import Dashboard from './Containers/dashboard';
import DashboardGuides from './Containers/dashboardGuides';
import DashboardTrips from './Containers/dashboardTrips';
import EditCompany from './Containers/editCompany';
import EditProfile from './Containers/editProfile';
import FourOhFour from './Containers/fourOhFour';
import Guides from './Containers/guides';
import GuidingCompanies from './Containers/guideCompanies';
import HigherAuth from './higherAuth';
import Home from './Containers/home';
import Inbox from './Containers/inbox';
import Login from './Containers/login';
import RemoveGuide from './Containers/removeGuide';
import RemoveTrip from './Containers/removeTrip';
import Results from './Containers/results';
import SignUp from './Containers/signUp';
import SignUpGC from './Containers/signUpGC';
import SignUpGuides from './Containers/signUpGuides';
import SignUpTravelers from './Containers/signUpTravelers';
import ViewCompany from './Containers/viewCompany';
import ViewGuide from './Containers/viewGuide';
import ViewTraveler from './Containers/viewTraveler';
import ViewTrip from './Containers/viewTrip';

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
      <Route exact path="/about" component={About} />
      <Route exact path="/account-info" component={AccountInfo} />
      <Route
        exact
        path="/authload"
        render={(props) => {
          handleAuthentication(props);
          return <AuthLoad {...props} />
        }}
      />
      <Route exact path="/company/:companyName" render={props => <ViewCompany {...props} />} />
      <Route exact path="/company/remove-trip" component={RemoveTrip} />
      <Route exact path="/company/remove-guide" component={RemoveGuide} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/dashboard" render={props => <Dashboard auth={auth} {...props} />} />
      <Route exact path="/dashboard/:company" render={props => <CompanyDashboard auth={auth} {...props} />} />
      <Route exact path="/dashboard/:company/add-guide" component={AddGuide} />
      <Route exact path="/dashboard/:company/add-trip" component={AddTrip} />
      <Route exact path="/dashboard/:company/add-trip/:trip" component={AddTrip} />
      <Route exact path="/dashboard/:company/company-account" component={CompanyAccount} />
      <Route exact path="/dashboard/:company/edit-company" component={EditCompany} />
      <Route exact path="/dashboard/:company/guides" render={props => <DashboardGuides auth={auth} {...props} />} />
      <Route exact path="/dashboard/:company/trips" render={props => <DashboardTrips auth={auth} {...props} />} />
      <Route exact path="/edit-profile" component={EditProfile} />
      <Route exact path="/guides" component={Guides} />
      <Route exact path="/guides/:username" render={props => <ViewTraveler auth={auth} {...props} />} />
      <Route exact path="/guiding-companies" component={GuidingCompanies} />
      <Route exact path="/inbox/" component={Inbox} />
      <Route exact path="/profile/:user" component={ViewTraveler} />
      <Route exact path="/results/:params" component={Results} />
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/signup/guide" component={SignUpGuides} />
      <Route exact path="/signup/guiding-company" component={SignUpGC} />
      <Route exact path="/signup/traveler" component={SignUpTravelers} />
      <Route exact path="/travelers/traveler" component={ViewTraveler} />
      <Route exact path="/trips/:trip" component={ViewTrip} />
      <Route component={FourOhFour} />
      <Route exact path="/404-not-found" component={FourOhFour} />
    </Switch>
  </main>
);

export default Main;
