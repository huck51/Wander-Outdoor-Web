import auth0 from 'auth0-js';
import jwt from 'jsonwebtoken';

export default class Auth {
  auth0 = new auth0.WebAuth({
    domain: process.env.REACT_APP_DOMAIN,
    clientID: process.env.REACT_APP_CLIENT_ID,
    redirectUri: process.env.REACT_APP_REDIRECT,
    audience: process.env.REACT_APP_AUDIENCE,
    responseType: 'token id_token',
    scope: 'openid profile email',
  });
  constructor() {
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
  }
  login() {
    this.auth0.authorize();
  }

  logout() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    window.location = '/';
  }

  handleAuthentication() {
    this.auth0.parseHash((err, result) => {
      if (result && result.accessToken && result.idToken) {
        console.log(result);
        this.setSession(result);
      } else if (err) {
        console.log('again');
        console.error(err);
        // window.location = '/';
      }
    });
  }

  setSession(sesh) {
    const expiresAt = JSON.stringify((sesh.expiresIn * 1000) + new Date().getTime());
    const prof = jwt.decode(sesh.idToken);
    localStorage.setItem('access_token', sesh.accessToken);
    localStorage.setItem('id_token', sesh.idToken);
    localStorage.setItem('expires_at', expiresAt);
    localStorage.setItem('nickname', prof.nickname);
    localStorage.setItem('email', prof.email);
    window.location = '/';
  }

  isAuthenticated() {
    let expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return new Date().getTime() < expiresAt;
  }
}
