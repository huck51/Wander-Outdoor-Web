import React from 'react';
import { Switch, Route } from 'react-router-dom';
import About from './Containers/about';
import AccountInfo from './Containers/accountInfo';
import AddGuide from './Containers/addGuide';
import AddTrip from './Containers/addTrip';
import Auth from './auth';
import AuthLoad from './Components/authLoad';
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
import Inbox from './Containers/inbox';
import MegaContext from './Components/megaContext';
import MegaConsumer from './Components/megaConsumer';
import RemoveGuide from './Containers/removeGuide';
import RemoveTrip from './Containers/removeTrip';
import Results from './Containers/results';
import SignUp from './Containers/signUp';
import SignUpGC from './Containers/signUpGC';
import SignUpGuides from './Containers/signUpGuides';
import SignUpTravelers from './Containers/signUpTravelers';
import SubscriptionDetails from './Containers/subscriptionDetails';
import Trips from './Containers/trips';
import ViewCompany from './Containers/viewCompany';
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
      <Route
        exact
        path="/"
        render={props => (
          <MegaContext.Consumer>
            {value => (
              <Home {...props} value={value} />
            )}
          </MegaContext.Consumer>
          )}
      />
      <Route exact path="/about" component={About} />
      <Route
        exact
        path="/account-info"
        component={AccountInfo}
        render={props => (
          <MegaContext.Consumer>
            {value => (
              <AccountInfo {...props} value={value} />
            )}
          </MegaContext.Consumer>
        )}
      />
      <Route
        exact
        path="/authload"
        render={(props) => {
          handleAuthentication(props);
          return <AuthLoad {...props} />
        }}
      />
      <Route
        exact
        path="/business-member/payments"
        render={props => (
          <MegaContext.Consumer>
            {value => (
              <BizMembers
                {...props}
                value={value}
              />
            )}
          </MegaContext.Consumer>
          )
        }
      />
      <Route
        exact
        path="/company/:companyCode"
        render={props => (
          <MegaContext.Consumer>
            {value => (
              <ViewCompany
                {...props}
                value={value}
              />
            )}
          </MegaContext.Consumer>
          )
        }
      />
      <Route
        exact
        path="/company/remove-trip"
        render={props => (
          <MegaContext.Consumer>
            {value => (
              <RemoveTrip
                {...props}
                value={value}
              />
            )}
          </MegaContext.Consumer>
          )
        }
      />
      <Route
        exact
        path="/company/remove-guide"
        render={props => (
          <MegaContext.Consumer>
            {value => (
              <RemoveGuide
                {...props}
                value={value}
              />
            )}
          </MegaContext.Consumer>
          )
        }
      />
      <Route
        exact
        path="/contact"
        render={props => (
          <MegaContext.Consumer>
            {value => (
              <Contact
                {...props}
                value={value}
              />
            )}
          </MegaContext.Consumer>
          )
        }
      />
      <Route
        exact
        path="/dashboard"
        render={props => (
          <MegaContext.Consumer>
            {value => (
              <Dashboard
                {...props}
                value={value}
                auth={auth}
              />
            )}
          </MegaContext.Consumer>
          )
        }
      />
      <Route
        exact
        path="/dashboard/:companyCode/:company"
        render={props => (
          <MegaContext.Consumer>
            {value => (
              <CompanyDashboard
                {...props}
                value={value}
                auth={auth}
              />
            )}
          </MegaContext.Consumer>
          )
        }
      />
      <Route
        exact
        path="/dashboard/:company/add-guide"
        render={props => (
          <MegaContext.Consumer>
            {value => (
              <AddGuide
                {...props}
                value={value}
              />
            )}
          </MegaContext.Consumer>
          )
        }
      />
      <Route
        exact
        path="/dashboard/:company/add-trip"
        render={props => (
          <MegaContext.Consumer>
            {value => (
              <AddTrip
                {...props}
                value={value}
              />
            )}
          </MegaContext.Consumer>
          )
        }
      />
      <Route
        exact
        path="/dashboard/:company/add-trip/:trip"
        render={props => (
          <MegaContext.Consumer>
            {value => (
              <AddTrip
                {...props}
                value={value}
              />
            )}
          </MegaContext.Consumer>
          )
        }
      />
      <Route
        exact
        path="/dashboard/:company/company-account"
        render={props => (
          <MegaContext.Consumer>
            {value => (
              <CompanyAccount
                {...props}
                value={value}
              />
            )}
          </MegaContext.Consumer>
          )
        }
      />
      <Route
        exact
        path="/dashboard/:company/edit-company"
        render={props => (
          <MegaContext.Consumer>
            {value => (
              <EditCompany
                {...props}
                value={value}
              />
            )}
          </MegaContext.Consumer>
          )
        }
      />
      <Route
        exact
        path="/dashboard/:company/guides"
        render={props => (
          <MegaContext.Consumer>
            {value => (
              <DashboardGuides
                {...props}
                value={value}
                auth={auth}
              />
            )}
          </MegaContext.Consumer>
          )
        }
      />
      <Route
        exact
        path="/dashboard/:company/trips"
        render={props => (
          <MegaContext.Consumer>
            {value => (
              <DashboardTrips
                {...props}
                value={value}
                auth={auth}
              />
            )}
          </MegaContext.Consumer>
          )
        }
      />
      <Route
        exact
        path="/edit-profile"
        render={props => (
          <MegaContext.Consumer>
            {value => (
              <EditProfile
                {...props}
                value={value}
              />
            )}
          </MegaContext.Consumer>
          )
        }
      />
      <Route
        exact
        path="/edit-trip/:id"
        render={props => (
          <MegaContext.Consumer>
            {value => (
              <EditTrip
                {...props}
                value={value}
              />
            )}
          </MegaContext.Consumer>
          )
        }
      />
      <Route
        exact
        path="/guides"
        render={props => (
          <MegaContext.Consumer>
            {value => (
              <Guides
                {...props}
                value={value}
              />
            )}
          </MegaContext.Consumer>
          )
        }
      />
      <Route
        exact
        path="/guides/:username"
        render={props => (
          <MegaContext.Consumer>
            {value => (
              <ViewTraveler
                {...props}
                value={value}
                auth={auth}
              />
            )}
          </MegaContext.Consumer>
          )
        }
      />
      <Route
        exact
        path="/guiding-companies"
        render={props => (
          <MegaContext.Consumer>
            {value => (
              <GuidingCompanies
                {...props}
                value={value}
              />
            )}
          </MegaContext.Consumer>
          )
        }
      />
      <Route
        exact
        path="/profile/:id"
        render={props => (
          <MegaContext.Consumer>
            {value => (
              <ViewTraveler
                {...props}
                value={value}
              />
            )}
          </MegaContext.Consumer>
          )
        }
      />
      <Route
        exact
        path="/results/:search"
        render={props => (
          <MegaContext.Consumer>
            {value => (
              <Results
                {...props}
                value={value}
              />
            )}
          </MegaContext.Consumer>
          )
        }
      />
      <Route
        exact
        path="/signup/guiding-company"
        render={props => (
          <MegaContext.Consumer>
            {value => (
              <SignUpGC
                {...props}
                value={value}
              />
            )}
          </MegaContext.Consumer>
          )
        }
      />
      <Route
        exact
        path="/subscription-details"
        render={props => (
          <MegaContext.Consumer>
            {value => (
              <SubscriptionDetails
                {...props}
                value={value}
              />
            )}
          </MegaContext.Consumer>
          )
        }
      />
      <Route
        exact
        path="/trips"
        render={props => (
          <MegaContext.Consumer>
            {value => (
              <Trips
                {...props}
                value={value}
              />
            )}
          </MegaContext.Consumer>
          )
        }
      />
      <Route
        exact
        path="/trips/:id"
        render={props => (
          <MegaContext.Consumer>
            {value => (
              <ViewTrip
                {...props}
                value={value}
              />
            )}
          </MegaContext.Consumer>
          )
        }
      />
      <Route component={FourOhFour} />
      <Route exact path="/404-not-found" component={FourOhFour} />
    </Switch>
  </main>
);

export default Main;
