import auth0 from 'auth0-js';
import axios from 'axios';

export default class Auth {
  accessToken;
  idToken;
  expiresAt;
  userProfile;
  tokenRenewalTimeout;

  constructor() {
    this.auth0 = new auth0.WebAuth({
      domain: process.env.REACT_APP_DOMAIN,
      clientID: process.env.REACT_APP_CLIENT_ID,
      redirectUri: process.env.REACT_APP_REDIRECT,
      audience: process.env.REACT_APP_AUDIENCE,
      responseType: 'token id_token',
      scope: 'openid profile email',
      prompt: 'none',
      response_mode: 'web_message',
    });

    this.getProfile = this.getProfile.bind(this);
    this.setSession = this.setSession.bind(this);
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
    this.renewToken = this.renewToken.bind(this);
    this.scheduleRenewal = this.scheduleRenewal.bind(this);
    this.persist = this.persist.bind(this);
    this.endPersistence = this.endPersistence.bind(this);
    this.link = this.link.bind(this);

    // this.scheduleRenewal();
    // this.endPersistence(localStorage.getItem('persist'));
  }

  getProfile() {
    return this.userProfile;
  }

  login() {
    this.auth0.authorize();
  }

  logout() {
    this.accessToken = null;
    this.idToken = null;
    this.expiresAt = 0;
    this.userProfile = null;
    localStorage.clear();
    clearTimeout(this.tokenRenewalTimeout);

    window.location = '/';
  }

  renewToken() {
    this.auth0.checkSession({}, (err, result) => {
        if (err) {
          console.log(err);
        } else {
          console.log('Token has been renewed');
          this.setSession(result);
        }
      }
    );
  }

  scheduleRenewal() {
    const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    const delay = expiresAt - Date.now();
    if (delay > 0) {
      this.tokenRenewalTimeout = setTimeout(() => {
        this.renewToken();
      }, 600000);
    }
  }

  handleAuthentication() {
    return new Promise((resolve, reject) => {
      this.auth0.parseHash((err, authResult) => {
        if (err) return reject(err);
        console.log(authResult);
        if (!authResult || !authResult.idToken) {
          return reject(err);
        }
        this.setSession(authResult);
        resolve();
      });
    })
  }

  persist() {
    localStorage.setItem('access_token', this.accessToken);
    localStorage.setItem('id_token', this.idToken);
    localStorage.setItem('expires_at', JSON.stringify(this.expiresAt));
    localStorage.setItem('profile', JSON.stringify(this.userProfile));
    localStorage.setItem('persist', true);
  }

  endPersistence(persist) {
    if (persist) {
      this.accessToken = localStorage.getItem('access_token');
      this.idToken = localStorage.getItem('id_token');
      this.expiresAt = JSON.parse(localStorage.getItem('expires_at'));
      this.userProfile = JSON.parse(localStorage.getItem('profile'));
      localStorage.clear();
      window.addEventListener('beforeunload', () => {
        this.persist();
      });
    }
  }

  setSession(authResult) {
    this.accessToken = authResult.accessToken;
    this.idToken = authResult.idToken;
    this.userProfile = authResult.idTokenPayload;
    this.expiresAt = authResult.expiresIn * 1000 + new Date().getTime();

    window.addEventListener('beforeunload', () => {
      this.persist();
    });

    if (!authResult.idTokenPayload['https://wander-outdoor.com/linked']) {
      this.link(authResult);
    }

    // this.scheduleRenewal();
  }

  link(authResult) {
    const options = {
      id: authResult.idTokenPayload['https://wander-outdoor.com/uuid'],
      email: authResult.idTokenPayload.email
    };
    axios.post('https://fierce-ridge-55021.herokuapp.com/signup-newuser', options)
      .then(results => {
        console.log(results);
        const user = this.userProfile.sub.split('|').join('%7C');
        const authZeroOpts = {
          headers: {
            "Authorization": `Bearer ${results.middleManagement}`
          },
          "user_metadata": {
            "linked": true
          }
        };
        axios.patch(`https://wander-outdoor.auth0.com/api/v2/users/${user}`, authZeroOpts)
          .then(response => {
            console.log(response);
          })
          .catch(error => {
            console.log(error);
          });
      })
      .catch(err => {
        console.log(err);
      });
  }

  isAuthenticated() {
    const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return new Date().getTime() < (this.expiresAt || expiresAt);
  }
}
