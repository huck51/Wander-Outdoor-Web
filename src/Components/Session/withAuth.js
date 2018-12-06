import React from 'react';
import AuthUserContext from './context';


const withAuth = Component => {
  class WithAuth extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        authUser: null,
      };
    }

    componentDidMount() {
      const isAuth = this.props.auth.isAuthenticated();
      if (isAuth) {
        const user = this.props.auth.getProfile();
        this.setState({ authUser: user });
      }
    }

    render() {
      const authContext = {
        authUser: this.state.authUser,
        authMethods: this.props.auth,
      };
      return (
        <AuthUserContext.Provider value={authContext} >
          <Component {...this.props} />
        </AuthUserContext.Provider>
      );
    }
  }

  return WithAuth;
};

export default withAuth;
