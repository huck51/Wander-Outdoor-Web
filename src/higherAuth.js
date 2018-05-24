import Auth from './auth';

const HigherAuth = (component) => {
  const auth = new Auth();
  const loggedIn = auth.isAuthenticated();
  if (loggedIn) {
    return component;
  }
  return null;
};

export default HigherAuth;
