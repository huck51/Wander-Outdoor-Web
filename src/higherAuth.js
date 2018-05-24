import Auth from './auth';

const HigherAuth = (component) => {
  const auth = new Auth();
  const loggedIn = auth.isAuthenticated();
  console.log(loggedIn);
  if (loggedIn) {
    return component;
  }
  return null;
};

export default HigherAuth;
