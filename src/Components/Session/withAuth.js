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
      this.props.auth.endPersistence(localStorage.getItem('persist'));
      const isAuth = this.props.auth.isAuthenticated();
      console.log(`isAuth: ${isAuth}`);
      if (isAuth) {
        const user = this.props.auth.getProfile();
        console.log(`User: ${user}`);
        this.setState({ authUser: user });
      }
    }

    getAuth = user => {
      this.setState({
        authUser: user,
      });
    }

    render() {
      const authContext = {
        authUser: this.state.authUser,
        authMethods: this.props.auth,
        getAuth: this.getAuth,
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
