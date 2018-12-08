import auth0 from 'auth0-js';

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

    this.scheduleRenewal();
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
    localStorage.clear();
    clearTimeout(this.tokenRenewalTimeout);

    window.location = '/';
  }

  renewToken() {
    this.auth0.checkSession({}, (err, result) => {
        if (err) {
          console.log(err);
        } else {
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
      }, delay);
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
  }

  setSession(authResult) {
    this.accessToken = authResult.accessToken;
    this.idToken = authResult.idToken;
    this.userProfile = authResult.idTokenPayload;
    this.expiresAt = authResult.expiresIn * 1000 + new Date().getTime();

    window.addEventListener('beforeunload', () => {
      this.persist();
    })

    this.scheduleRenewal();
  }

  isAuthenticated() {
    return new Date().getTime() < this.expiresAt;
  }
}
