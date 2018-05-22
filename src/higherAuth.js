
const HigherAuth = (auth, component) => {
  if (auth.isAuthenticated()) {
    return component;
  }
  return null;
};

export default HigherAuth;
