import React from 'react';
import { StripeProvider } from 'react-stripe-elements';
import Footer from './Components/footer';
import Main from './main';
import NavigationBar from './Components/navigationbar';
import { AuthUserContext, withAuth } from './Components/Session';
import './App.css';

const fallRun = 'https://res.cloudinary.com/wander-outdoor/image/upload/c_scale,q_60,w_1600/v1529539222/Wander/DSC_0076-2.webp';
const grayTightRope = 'https://res.cloudinary.com/wander-outdoor/image/upload/c_scale,q_60,w_1600/v1529538924/Wander/grayTightRope.webp';
const hangingGear = 'https://res.cloudinary.com/wander-outdoor/image/upload/c_scale,q_60,w_1600/v1529538889/Wander/hangingGear.webp';
const heidiClimb = 'https://res.cloudinary.com/wander-outdoor/image/upload/c_scale,q_60,w_1600/v1529538806/Wander/heidiClimb.webp';
const sunsetClimb = 'https://res.cloudinary.com/wander-outdoor/image/upload/c_scale,q_60,w_1600/v1529538844/Wander/sunsetClimb.webp';
const surfing = 'https://res.cloudinary.com/wander-outdoor/image/upload/c_scale,q_60,w_1600/v1529538872/Wander/surfing.webp';
const deepSnowHike = 'https://res.cloudinary.com/wander-outdoor/image/upload/c_scale,q_60,w_1600/v1530098328/Wander/deepSnowHike.webp';
const bouldering = 'https://res.cloudinary.com/wander-outdoor/image/upload/c_scale,w_1600/v1541621996/Wander/bouldering-min.webp';
const canyonRun = 'https://res.cloudinary.com/wander-outdoor/image/upload/c_scale,w_1600/v1541621984/Wander/canyonRun-min.webp';

const backgroundArray = [bouldering, canyonRun, deepSnowHike, grayTightRope, hangingGear, sunsetClimb, surfing, heidiClimb, fallRun];
const rando = Math.floor(Math.random() * backgroundArray.length);
const stylz = {
  backgroundImage: `url(${backgroundArray[rando]})`,
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  height: '100vh',
};

const stile = { backgroundColor: 'white' };

const App = props => (
  <div style={window.location.pathname === '/' ? stylz : stile}>
    <div className={window.location.pathname === '/' ? 'shadeLayer' : ''}>
      <div id="body">
        <AuthUserContext.Consumer>
          {
            value => <NavigationBar auth={value.authMethods} user={value.authUser} current={value.getCurrent}/>
          }
        </AuthUserContext.Consumer>
        <StripeProvider stripe={null}>
          <Main />
        </StripeProvider>
      </div>
      <div id="footer">
        <Footer />
      </div>
    </div>
  </div>
)
/*
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stripe: null,
      loggedIn: false,
      authUser: null,
    };
  }

  componentDidMount() {
    if (window.Stripe) {
      this.setState({stripe: window.Stripe('pk_test_6kVwvdGW58r0XdXjnI4i9ui4')});
    } else {
      document.querySelector('#stripe-js').addEventListener('load', () => {
        // Create Stripe instance once Stripe.js loads
        this.setState({stripe: window.Stripe('pk_test_6kVwvdGW58r0XdXjnI4i9ui4')});
      });
    }
  }

  render() {
    return (
      <div style={window.location.pathname === '/' ? stylz : stile}>
        <div className={window.location.pathname === '/' ? 'shadeLayer' : ''}>
          <div id="body">
            <NavigationBar loggedIn={this.state.loggedIn} user={this.state.user} />
            <StripeProvider stripe={this.state.stripe}>
              <Main />
            </StripeProvider>
          </div>
          <div id="footer">
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

*/
export default withAuth(App);
