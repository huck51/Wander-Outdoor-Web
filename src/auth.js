import auth0 from 'auth0-js';

export default class Auth {
  constructor() {
    this.auth0 = new auth0.WebAuth({
      domain: process.env.REACT_APP_DOMAIN,
      clientID: process.env.REACT_APP_CLIENT_ID,
      redirectUri: process.env.REACT_APP_REDIRECT,
      audience: process.env.REACT_APP_AUDIENCE,
      responseType: 'token id_token',
      scope: 'openid profile',
    });

    this.getProfile = this.getProfile.bind(this);
    this.setSession = this.setSession.bind(this);
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
  }

  getProfile() {
    return this.profile;
  }

  login() {
    this.auth0.authorize();
  }

  logout() {
    this.idToken = null;
    this.expiresAt = null;
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

  setSession(authResult) {
    this.idToken = authResult.idToken;
    this.profile = authResult.idTokenPayload;
    this.expiresAt = authResult.expiresIn * 1000 + new Date().getTime();
  }

  isAuthenticated() {
    return new Date().getTime() < this.expiresAt;
  }
}
