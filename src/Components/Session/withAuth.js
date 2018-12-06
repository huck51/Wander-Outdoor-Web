import React from 'react';
import AuthUserContext from './context';


const withAuth = Component => {
  class WithAuth extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        authUser: null,
        authMethods: props.auth,
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
      return (
        <AuthUserContext.Provider value={this.state} >
          <Component {...this.props} />
        </AuthUserContext.Provider>
      );
    }
  }

  return WithAuth;
};

export default withAuth;
