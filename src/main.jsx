import React from 'react';
import { Switch, Route } from 'react-router-dom';
import About from './Containers/about';
import AccountInfo from './Containers/accountInfo';
import AddGuide from './Containers/addGuide';
import AddTrip from './Containers/addTrip';
import Auth from './auth';
import AuthLoad from './Components/authLoad';
import AuthRedirect from './Containers/authRedirect';
import { AuthUserContext } from './Components/Session';
import BizMembers from './Containers/bizMembers';
import CompanyAccount from './Containers/companyAccount';
import CompanyDashboard from './Containers/companyDashboard';
import Contact from './Containers/contact';
import Dashboard from './Containers/dashboard';
import DashboardGuides from './Containers/dashboardGuides';
import DashboardTrips from './Containers/dashboardTrips';
import EditCompany from './Containers/editCompany';
import EditProfile from './Containers/editProfile';
import EditTrip from './Containers/editTrip';
import FourOhFour from './Containers/fourOhFour';
import Guides from './Containers/guides';
import GuidingCompanies from './Containers/guideCompanies';
import HigherAuth from './higherAuth';
import Home from './Containers/home';
import RemoveGuide from './Containers/removeGuide';
import RemoveTrip from './Containers/removeTrip';
import Results from './Containers/results';
import SignUpGC from './Containers/signUpGC';
import SignUpGuides from './Containers/signUpGuides';
import SubscriptionDetails from './Containers/subscriptionDetails';
import Trips from './Containers/trips';
import ViewCompany from './Containers/viewCompany';
import ViewTraveler from './Containers/viewTraveler';
import ViewTrip from './Containers/viewTrip';


const Main = () => (
  <main>
    <Switch>
      <Route
        exact
        path="/"
        render={props => (
            <Home {...props} />
          )}
      />
      <Route
        exact
        path="/about"
        render={(props) => (
          <About {...props} />
        )}
      />
      <Route
        exact
        path="/account-info"
        render={props => {
        return (<AuthUserContext.Consumer>
            {
              value => value.authMethods.isAuthenticated() ? <AccountInfo auth={value.authMethods} getAuth={value.getAuth} {...props} /> : <AuthRedirect auth={value.authMethods} />
            }
          </AuthUserContext.Consumer>);
        }}
      />
      <Route
        exact
        path="/authload"
        render={(props) => {
        return (<AuthUserContext.Consumer>
            {
              value => <AuthLoad auth={value.authMethods} getAuth={value.getAuth} />
            }
          </AuthUserContext.Consumer>);
        }}
      />
      <Route
        exact
        path="/business-member/payments"
        render={props => (
            <BizMembers {...props} />
          )
        }
      />
      <Route
        exact
        path="/company/:company"
        render={props => (
            <ViewCompany {...props} />
          )
        }
      />
      <Route
        exact
        path="/company/remove-trip"
        render={props => (
            <RemoveTrip {...props} />
          )
        }
      />
      <Route
        exact
        path="/company/remove-guide"
        render={props => (
            <RemoveGuide {...props} />
          )
        }
      />
      <Route
        exact
        path="/contact"
        render={props => (
            <Contact {...props} />
          )
        }
      />
      <Route
        exact
        path="/dashboard"
        render={props => {
        return (<AuthUserContext.Consumer>
            {
              value => value.authMethods.isAuthenticated() ? <Dashboard auth={value.authMethods} getAuth={value.getAuth} {...props} /> : <AuthRedirect auth={value.authMethods} />
            }
          </AuthUserContext.Consumer>);
        }}
      />
      <Route
        exact
        path="/dashboard/:companyCode/1/:company"
        render={props => {
        return (<AuthUserContext.Consumer>
            {
              value => value.authMethods.isAuthenticated() ? <CompanyDashboard auth={value.authMethods} getAuth={value.getAuth} {...props} /> : <AuthRedirect auth={value.authMethods} />
            }
          </AuthUserContext.Consumer>);
        }}
      />
    <Route
      exact
      path="/dashboard/:company/add-existing-guide"
      render={props => {
      return (<AuthUserContext.Consumer>
          {
            value => value.authMethods.isAuthenticated() ? <AddGuide auth={value.authMethods} getAuth={value.getAuth} {...props} /> : <AuthRedirect auth={value.authMethods} />
          }
        </AuthUserContext.Consumer>);
      }}
    />
      <Route
        exact
        path="/dashboard/:company/create-guide"
        render={props => {
        return (<AuthUserContext.Consumer>
            {
              value => value.authMethods.isAuthenticated() ? <SignUpGuides auth={value.authMethods} getAuth={value.getAuth} {...props} /> : <AuthRedirect auth={value.authMethods} />
            }
          </AuthUserContext.Consumer>);
        }}
      />
      <Route
        exact
        path="/dashboard/:company/add-trip"
        render={props => <AddTrip {...props} /> }
      />
      <Route
        exact
        path="/dashboard/:company/add-trip"
        render={props => {
        return (<AuthUserContext.Consumer>
            {
              value => value.authMethods.isAuthenticated() ? <AddTrip auth={value.authMethods} getAuth={value.getAuth} {...props} /> : <AuthRedirect auth={value.authMethods} />
            }
          </AuthUserContext.Consumer>);
        }}
      />
      <Route
        exact
        path="/dashboard/:company/add-trip/:trip"
        render={props => {
        return (<AuthUserContext.Consumer>
            {
              value => value.authMethods.isAuthenticated() ? <AddTrip auth={value.authMethods} getAuth={value.getAuth} {...props} /> : <AuthRedirect auth={value.authMethods} />
            }
          </AuthUserContext.Consumer>);
        }}
      />
      <Route
        exact
        path="/dashboard/:company/company-account"
        render={props => {
        return (<AuthUserContext.Consumer>
            {
              value => value.authMethods.isAuthenticated() ? <CompanyAccount auth={value.authMethods} getAuth={value.getAuth} {...props} /> : <AuthRedirect auth={value.authMethods} />
            }
          </AuthUserContext.Consumer>);
        }}
      />
      <Route
        exact
        path="/dashboard/:company/edit-company"
        render={props => {
        return (<AuthUserContext.Consumer>
            {
              value => value.authMethods.isAuthenticated() ? <EditCompany auth={value.authMethods} getAuth={value.getAuth} {...props} /> : <AuthRedirect auth={value.authMethods} />
            }
          </AuthUserContext.Consumer>);
        }}
      />
      <Route
        exact
        path="/dashboard/:company/guides"
        render={props => {
        return (<AuthUserContext.Consumer>
            {
              value => value.authMethods.isAuthenticated() ? <DashboardGuides auth={value.authMethods} getAuth={value.getAuth} {...props} /> : <AuthRedirect auth={value.authMethods} />
            }
          </AuthUserContext.Consumer>);
        }}
      />
      <Route
        exact
        path="/dashboard/:company/trips"
        render={props => {
        return (<AuthUserContext.Consumer>
            {
              value => value.authMethods.isAuthenticated() ? <DashboardTrips auth={value.authMethods} getAuth={value.getAuth} {...props} /> : <AuthRedirect auth={value.authMethods} />
            }
          </AuthUserContext.Consumer>);
        }}
      />
      <Route
        exact
        path="/edit-profile"
        render={props => {
        return (<AuthUserContext.Consumer>
            {
              value => value.authMethods.isAuthenticated() ? <EditProfile auth={value.authMethods} getAuth={value.getAuth} {...props} /> : <AuthRedirect auth={value.authMethods} />
            }
          </AuthUserContext.Consumer>);
        }}
      />
      <Route
        exact
        path="/edit-trip/:id"
        render={props => {
        return (<AuthUserContext.Consumer>
            {
              value => value.authMethods.isAuthenticated() ? <EditTrip auth={value.authMethods} getAuth={value.getAuth} {...props} /> : <AuthRedirect auth={value.authMethods} />
            }
          </AuthUserContext.Consumer>);
        }}
      />
      <Route
        exact
        path="/guides"
        render={props => (
            <Guides {...props} />
          )
        }
      />
      <Route
        exact
        path="/guides/:username"
        render={props => (
            <ViewTraveler {...props} />
          )
        }
      />
      <Route
        exact
        path="/guiding-companies"
        render={props => (
            <GuidingCompanies {...props} />
          )
        }
      />
      <Route
        exact
        path="/profile/:profileNum"
        render={props => (
            <ViewTraveler {...props} />
          )
        }
      />
      <Route
        exact
        path="/results/:search"
        render={props => (
            <Results {...props} />
          )
        }
      />
      <Route
        exact
        path="/signup/guiding-company"
        render={props => {
        return (<AuthUserContext.Consumer>
            {
              value => <SignUpGC auth={value.authMethods} getAuth={value.getAuth} {...props} />
              // value => value.authMethods.isAuthenticated() ? <SignUpGC auth={value.authMethods} getAuth={value.getAuth} {...props} /> : <AuthRedirect auth={value.authMethods} />
            }
          </AuthUserContext.Consumer>);
        }}
      />
      <Route
        exact
        path="/subscription-details"
        render={props => (
            <SubscriptionDetails {...props} />
          )
        }
      />
      <Route
        exact
        path="/trips"
        render={props => (
            <Trips {...props} />
          )
        }
      />
      <Route
        exact
        path="/trips/:id"
        render={props => (
          <AuthUserContext.Consumer>
            {
              value => <ViewTrip authed={value.authMethods} {...props} />
            }
          </AuthUserContext.Consumer>
          )
        }
      />
      <Route component={FourOhFour} />
      <Route exact path="/404-not-found" component={FourOhFour} />
    </Switch>
  </main>
);

export default Main;
